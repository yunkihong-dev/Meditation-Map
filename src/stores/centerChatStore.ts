import { create } from "zustand";
import type {
  ChatDeletedEvent,
  ChatMessage,
  ChatMessageEvent,
  ChatReadEvent,
  ChatThread,
  ChatThreadEvent,
  ChatViewer,
} from "@/services/centerChat/types";
import {
  deleteMessage,
  fetchInboxSummary,
  fetchMessages,
  fetchThread,
  fetchThreads,
  fetchUnreadChats,
  markThreadRead,
  sendMessage,
} from "@/services/centerChat/repositories/centerChatRepository";
import { compareId } from "@/stores/notificationStore";
import { newRequestId } from "@/services/notifications/broadcastForm";
import { ApiError } from "@/services/http/apiError";
import { chatErrorMessage } from "@/services/centerChat/types";

/*
 * 센터 1:1 문의 스토어 — 고객(customer)·오너(owner) 보기를 따로 둡니다(한 사람이 둘 다일 수 있음).
 * SSE 는 기존 알림 스트림에 실려 오고(chat-message / chat-read / chat-thread, 계약 C7.1),
 * 비동기 전달이라 순서가 바뀔 수 있어 메시지는 언제나 id 로 정렬·중복 제거합니다.
 */

// ── 순수 함수(테스트 대상) ──────────────────────────────────

export const keyOf = (viewer: ChatViewer, threadId: string) => `${viewer}:${threadId}`;
export const viewerOfRole = (role: "CUSTOMER" | "OWNER"): ChatViewer => (role === "OWNER" ? "owner" : "customer");

/** id 기준 합치기 — 같은 id 는 새 값이 이기고(삭제 반영 등), 결과는 id 오름차순 */
export function mergeMessages(existing: ChatMessage[], incoming: ChatMessage[]): ChatMessage[] {
  const byId = new Map<string, ChatMessage>();
  for (const m of existing) byId.set(m.id, m);
  for (const m of incoming) byId.set(m.id, m);
  return [...byId.values()].sort((a, b) => compareId(a.id, b.id));
}

export function maxMessageId(list: ChatMessage[]): string | null {
  return list.length ? list[list.length - 1].id : null;
}

/** 대화 목록 정렬 — 마지막 메시지 id 내림차순(계약 C3.2) */
export function sortThreads(list: ChatThread[]): ChatThread[] {
  return [...list].sort((a, b) => {
    const x = a.lastMessage?.id ?? "0";
    const y = b.lastMessage?.id ?? "0";
    return compareId(y, x);
  });
}

/** 큰 쪽(읽음 역행 금지 — 계약 C3.7) */
export function maxId(a: string | null, b: string | null): string | null {
  if (!a) return b;
  if (!b) return a;
  return compareId(a, b) >= 0 ? a : b;
}

/** 내 메시지 중 상대가 아직 안 읽은 것에 "1" */
export function isUnreadByCounterpart(m: ChatMessage, counterpartLastRead: string | null): boolean {
  if (!m.mine || m.deleted) return false;
  return counterpartLastRead == null || compareId(m.id, counterpartLastRead) > 0;
}

/** chat-message 이벤트를 대화 요약에 반영 */
export function applyMessageToThread(t: ChatThread, e: ChatMessageEvent, viewingOpen: boolean): ChatThread {
  const m = e.message;
  const newer = !t.lastMessage || compareId(m.id, t.lastMessage.id) >= 0;
  return {
    ...t,
    status: e.thread.status || t.status,
    unanswered: e.thread.unanswered,
    unreadCount: viewingOpen && !m.mine ? 0 : e.thread.unreadCount,
    lastMessage: newer
      ? {
          id: m.id,
          senderRole: m.senderRole,
          preview: !m.deleted && m.body ? m.body.replace(/\s+/g, " ").slice(0, 80) : null,
          imageCount: m.deleted ? 0 : m.images.length,
          deleted: m.deleted,
          createdAt: m.createdAt,
        }
      : t.lastMessage,
  };
}

/** chat-read — 상대가 읽었으면 "1" 표시를 지우고, 내 다른 탭이 읽었으면 안 읽은 수 0 */
export function applyReadToThread(t: ChatThread, e: ChatReadEvent, myRole: "CUSTOMER" | "OWNER"): ChatThread {
  if (e.readerRole === myRole) {
    return { ...t, unreadCount: 0, myLastReadMessageId: maxId(t.myLastReadMessageId, e.lastReadMessageId) };
  }
  return { ...t, counterpartLastReadMessageId: maxId(t.counterpartLastReadMessageId, e.lastReadMessageId) };
}

/** 삭제 반영 — BE 처럼 본문·사진을 비운다(당사자 화면에 원문이 남지 않게) */
export function applyDeleted(list: ChatMessage[], messageId: string, deletedAt: string | null): ChatMessage[] {
  return list.map((m) =>
    m.id === messageId
      ? { ...m, deleted: true, deletable: false, body: null, images: [], deletedAt: deletedAt ?? m.deletedAt ?? new Date().toISOString() }
      : m
  );
}

/** 대화 요약의 마지막 메시지가 지워졌으면 '삭제된 메시지'로, 이벤트 요약(받는 사람 기준)이 있으면 그 값으로 */
export function applyDeletedToThread(t: ChatThread, e: ChatDeletedEvent): ChatThread {
  const last =
    t.lastMessage && t.lastMessage.id === e.messageId
      ? { ...t.lastMessage, deleted: true, preview: null, imageCount: 0 }
      : t.lastMessage;
  if (!e.thread) return { ...t, lastMessage: last };
  return { ...t, lastMessage: last, unreadCount: e.thread.unreadCount, unanswered: e.thread.unanswered, status: e.thread.status || t.status };
}

// ── 스토어 ─────────────────────────────────────────────────

export interface PendingMessage {
  clientMessageId: string;
  body: string;
  files: File[];
  previews: string[];
  status: "sending" | "failed";
  error: string | null;
  createdAt: string;
}

interface ListState {
  ids: string[];
  nextCursor: string | null;
  loaded: boolean;
  loading: boolean;
  error: string | null;
  filter: { placeId: string | null; unanswered: boolean };
}

const emptyList = (): ListState => ({
  ids: [],
  nextCursor: null,
  loaded: false,
  loading: false,
  error: null,
  filter: { placeId: null, unanswered: false },
});

export interface CenterChatState {
  threads: Record<string, ChatThread>; // key = viewer:threadId
  lists: Record<ChatViewer, ListState>;
  messages: Record<string, ChatMessage[]>;
  olderCursor: Record<string, string | null>;
  pending: Record<string, PendingMessage[]>;
  open: Record<string, true>;
  /** 오너 사이드바 배지·대시보드(전 장소 합계) */
  inbox: { unansweredCount: number; unreadThreadCount: number } | null;
  /**
   * 오너 summary 를 새로 받을 때마다 1씩 오른다(채팅 SSE·읽음·전송 → refreshSummary).
   * 대시보드 '이 센터 신규 문의' 카드가 이 값을 구독해 선택 장소 summary 를 다시 받는다(QA R2-3)
   */
  inboxTick: number;
  /** 고객 마이 배지 */
  customerUnreadThreads: number;

  loadThreads: (viewer: ChatViewer, filter?: Partial<ListState["filter"]>, append?: boolean) => Promise<void>;
  openThread: (viewer: ChatViewer, threadId: string) => Promise<void>;
  closeThread: (viewer: ChatViewer, threadId: string) => void;
  loadOlder: (viewer: ChatViewer, threadId: string) => Promise<void>;
  catchUp: (viewer: ChatViewer, threadId: string) => Promise<void>;
  send: (viewer: ChatViewer, threadId: string, body: string, files: File[]) => Promise<void>;
  retry: (viewer: ChatViewer, threadId: string, clientMessageId: string) => Promise<void>;
  discard: (viewer: ChatViewer, threadId: string, clientMessageId: string) => void;
  markRead: (viewer: ChatViewer, threadId: string) => Promise<void>;
  deleteMine: (viewer: ChatViewer, threadId: string, messageId: string) => Promise<void>;
  receiveMessage: (e: ChatMessageEvent) => void;
  receiveRead: (e: ChatReadEvent) => void;
  receiveThread: (e: ChatThreadEvent) => void;
  receiveDeleted: (e: ChatDeletedEvent) => void;
  refreshSummary: () => Promise<void>;
  refreshCustomerUnread: () => Promise<void>;
  onReconnect: () => void;
  isOpen: (threadId: string) => boolean;
  reset: () => void;
}

const initial = () => ({
  threads: {} as Record<string, ChatThread>,
  lists: { customer: emptyList(), owner: emptyList() } as Record<ChatViewer, ListState>,
  messages: {} as Record<string, ChatMessage[]>,
  olderCursor: {} as Record<string, string | null>,
  pending: {} as Record<string, PendingMessage[]>,
  open: {} as Record<string, true>,
  inbox: null as CenterChatState["inbox"],
  inboxTick: 0,
  customerUnreadThreads: 0,
});

function revokePreviews(p: PendingMessage) {
  if (typeof URL === "undefined" || typeof URL.revokeObjectURL !== "function") return;
  p.previews.forEach((u) => {
    try {
      URL.revokeObjectURL(u);
    } catch {
      // ignore
    }
  });
}

function previewsOf(files: File[]): string[] {
  if (typeof URL === "undefined" || typeof URL.createObjectURL !== "function") return [];
  return files.map((f) => {
    try {
      return URL.createObjectURL(f);
    } catch {
      return "";
    }
  });
}

export const useCenterChatStore = create<CenterChatState>((set, get) => {
  const putThread = (viewer: ChatViewer, t: ChatThread) =>
    set((s) => ({ threads: { ...s.threads, [keyOf(viewer, t.id)]: t } }));

  const listIdsSorted = (s: CenterChatState, viewer: ChatViewer, ids: string[]) =>
    sortThreads(ids.map((id) => s.threads[keyOf(viewer, id)]).filter((t): t is ChatThread => !!t)).map((t) => t.id);

  const doSend = async (viewer: ChatViewer, threadId: string, p: PendingMessage) => {
    const key = keyOf(viewer, threadId);
    set((s) => ({
      pending: {
        ...s.pending,
        [key]: (s.pending[key] ?? []).map((x) => (x.clientMessageId === p.clientMessageId ? { ...x, status: "sending", error: null } : x)),
      },
    }));
    try {
      const m = await sendMessage(viewer, threadId, { clientMessageId: p.clientMessageId, body: p.body, images: p.files });
      set((s) => {
        const left = (s.pending[key] ?? []).filter((x) => x.clientMessageId !== p.clientMessageId);
        revokePreviews(p);
        const t = s.threads[key];
        return {
          messages: { ...s.messages, [key]: mergeMessages(s.messages[key] ?? [], [m]) },
          pending: { ...s.pending, [key]: left },
          threads: t
            ? {
                ...s.threads,
                [key]: applyMessageToThread(
                  t,
                  {
                    threadId,
                    viewerRole: viewer === "owner" ? "OWNER" : "CUSTOMER",
                    message: m,
                    thread: { lastMessageId: m.id, unreadCount: 0, unanswered: viewer === "customer", status: t.status },
                  },
                  true
                ),
              }
            : s.threads,
        };
      });
      if (viewer === "owner") void get().refreshSummary();
    } catch (e) {
      const err = e instanceof ApiError ? e : null;
      const msg = chatErrorMessage(err?.code ?? null, "보내지 못했어요. 다시 보내기를 눌러 주세요.");
      set((s) => ({
        pending: {
          ...s.pending,
          [key]: (s.pending[key] ?? []).map((x) => (x.clientMessageId === p.clientMessageId ? { ...x, status: "failed", error: msg } : x)),
        },
        threads:
          err?.code === "CENTER_CHAT_BLOCKED" && s.threads[key]
            ? { ...s.threads, [key]: { ...s.threads[key], status: "BLOCKED" } }
            : s.threads,
      }));
    }
  };

  return {
    ...initial(),

    loadThreads: async (viewer, filter, append = false) => {
      const cur = get().lists[viewer];
      const f = { ...cur.filter, ...filter };
      if (append && (!cur.nextCursor || cur.loading)) return;
      set((s) => ({ lists: { ...s.lists, [viewer]: { ...s.lists[viewer], loading: true, error: null, filter: f } } }));
      try {
        const page = await fetchThreads(viewer, {
          cursor: append ? cur.nextCursor : null,
          placeId: f.placeId,
          unanswered: f.unanswered,
        });
        set((s) => {
          const threads = { ...s.threads };
          page.items.forEach((t) => (threads[keyOf(viewer, t.id)] = t));
          const ids = append ? Array.from(new Set([...s.lists[viewer].ids, ...page.items.map((t) => t.id)])) : page.items.map((t) => t.id);
          const next = { ...s, threads };
          return {
            threads,
            lists: {
              ...s.lists,
              [viewer]: { ...s.lists[viewer], ids: listIdsSorted(next, viewer, ids), nextCursor: page.nextCursor, loaded: true, loading: false },
            },
          };
        });
      } catch {
        set((s) => ({ lists: { ...s.lists, [viewer]: { ...s.lists[viewer], loading: false, error: "문의 목록을 불러오지 못했어요." } } }));
      }
    },

    openThread: async (viewer, threadId) => {
      const key = keyOf(viewer, threadId);
      set((s) => ({ open: { ...s.open, [key]: true } }));
      const [t, page] = await Promise.all([fetchThread(viewer, threadId), fetchMessages(viewer, threadId, { cursor: null })]);
      putThread(viewer, t);
      set((s) => ({
        messages: { ...s.messages, [key]: mergeMessages(s.messages[key] ?? [], page.items) },
        olderCursor: { ...s.olderCursor, [key]: page.nextCursor },
      }));
      void get().markRead(viewer, threadId);
    },

    closeThread: (viewer, threadId) =>
      set((s) => {
        const open = { ...s.open };
        delete open[keyOf(viewer, threadId)];
        return { open };
      }),

    loadOlder: async (viewer, threadId) => {
      const key = keyOf(viewer, threadId);
      const cursor = get().olderCursor[key];
      if (!cursor) return;
      const page = await fetchMessages(viewer, threadId, { cursor });
      set((s) => ({
        messages: { ...s.messages, [key]: mergeMessages(s.messages[key] ?? [], page.items) },
        olderCursor: { ...s.olderCursor, [key]: page.nextCursor },
      }));
    },

    catchUp: async (viewer, threadId) => {
      const key = keyOf(viewer, threadId);
      let after = maxMessageId(get().messages[key] ?? []);
      if (!after) {
        await get().openThread(viewer, threadId);
        return;
      }
      for (let i = 0; i < 10 && after; i++) {
        const page = await fetchMessages(viewer, threadId, { after });
        set((s) => ({ messages: { ...s.messages, [key]: mergeMessages(s.messages[key] ?? [], page.items) } }));
        after = page.nextCursor;
      }
      try {
        putThread(viewer, await fetchThread(viewer, threadId));
      } catch {
        // 대화 요약은 다음 이벤트로 맞춰집니다
      }
      if (get().open[key]) void get().markRead(viewer, threadId);
    },

    send: async (viewer, threadId, body, files) => {
      const key = keyOf(viewer, threadId);
      const p: PendingMessage = {
        clientMessageId: newRequestId(),
        body,
        files,
        previews: previewsOf(files),
        status: "sending",
        error: null,
        createdAt: new Date().toISOString(),
      };
      set((s) => ({ pending: { ...s.pending, [key]: [...(s.pending[key] ?? []), p] } }));
      await doSend(viewer, threadId, p);
    },

    retry: async (viewer, threadId, clientMessageId) => {
      const p = (get().pending[keyOf(viewer, threadId)] ?? []).find((x) => x.clientMessageId === clientMessageId);
      // 같은 clientMessageId 로 다시 보냅니다 — 서버는 이미 저장됐으면 200 + 기존 메시지(멱등, 계약 C3.6)
      if (p) await doSend(viewer, threadId, p);
    },

    discard: (viewer, threadId, clientMessageId) =>
      set((s) => {
        const key = keyOf(viewer, threadId);
        const list = s.pending[key] ?? [];
        list.filter((x) => x.clientMessageId === clientMessageId).forEach(revokePreviews);
        return { pending: { ...s.pending, [key]: list.filter((x) => x.clientMessageId !== clientMessageId) } };
      }),

    markRead: async (viewer, threadId) => {
      const key = keyOf(viewer, threadId);
      const last = maxMessageId(get().messages[key] ?? []);
      try {
        const r = await markThreadRead(viewer, threadId, last);
        set((s) => {
          const t = s.threads[key];
          return t
            ? { threads: { ...s.threads, [key]: { ...t, unreadCount: r.unreadCount, myLastReadMessageId: maxId(t.myLastReadMessageId, r.lastReadMessageId) } } }
            : {};
        });
        if (viewer === "owner") void get().refreshSummary();
        else void get().refreshCustomerUnread();
      } catch {
        // 읽음 실패는 다음 진입 때 다시 시도합니다
      }
    },

    deleteMine: async (viewer, threadId, messageId) => {
      const key = keyOf(viewer, threadId);
      const before = get().messages[key] ?? [];
      set((s) => ({ messages: { ...s.messages, [key]: applyDeleted(s.messages[key] ?? [], messageId, null) } }));
      try {
        const m = await deleteMessage(viewer, threadId, messageId);
        set((s) => {
          const t = s.threads[key];
          return {
            messages: m ? { ...s.messages, [key]: mergeMessages(s.messages[key] ?? [], [m]) } : s.messages,
            threads: t
              ? { ...s.threads, [key]: applyDeletedToThread(t, { threadId, viewerRole: viewer === "owner" ? "OWNER" : "CUSTOMER", messageId, thread: null }) }
              : s.threads,
          };
        });
      } catch (e) {
        set((s) => ({ messages: { ...s.messages, [key]: before } }));
        throw e;
      }
    },

    receiveMessage: (e) => {
      const viewer = viewerOfRole(e.viewerRole);
      const key = keyOf(viewer, e.threadId);
      const openNow = !!get().open[key];
      set((s) => {
        const pendingList = s.pending[key] ?? [];
        const matched = e.message.mine && e.message.clientMessageId
          ? pendingList.filter((p) => p.clientMessageId === e.message.clientMessageId)
          : [];
        matched.forEach(revokePreviews);
        const t = s.threads[key];
        const threads = t ? { ...s.threads, [key]: applyMessageToThread(t, e, openNow) } : s.threads;
        const list = s.lists[viewer];
        const ids = t ? listIdsSorted({ ...s, threads }, viewer, list.ids.includes(e.threadId) ? list.ids : [e.threadId, ...list.ids]) : list.ids;
        return {
          threads,
          messages: s.messages[key] || openNow ? { ...s.messages, [key]: mergeMessages(s.messages[key] ?? [], [e.message]) } : s.messages,
          pending: matched.length ? { ...s.pending, [key]: pendingList.filter((p) => !matched.includes(p)) } : s.pending,
          lists: { ...s.lists, [viewer]: { ...list, ids } },
        };
      });
      // 목록에 없는 새 대화면 목록을 다시 받습니다(첫 메시지)
      if (!get().threads[key] && get().lists[viewer].loaded) void get().loadThreads(viewer);
      if (openNow && !e.message.mine) void get().markRead(viewer, e.threadId);
      if (viewer === "owner") void get().refreshSummary();
      else if (!openNow) void get().refreshCustomerUnread();
    },

    receiveRead: (e) => {
      // 내 역할을 모르므로 두 보기 모두에 반영합니다(같은 threadId 를 둘 다 들고 있을 수 없음 — 고객이면서 오너일 수 없는 대화)
      set((s) => {
        const threads = { ...s.threads };
        for (const viewer of ["customer", "owner"] as const) {
          const key = keyOf(viewer, e.threadId);
          const t = threads[key];
          if (t) threads[key] = applyReadToThread(t, e, viewer === "owner" ? "OWNER" : "CUSTOMER");
        }
        return { threads };
      });
    },

    receiveThread: (e) => {
      set((s) => {
        const threads = { ...s.threads };
        for (const viewer of ["customer", "owner"] as const) {
          const key = keyOf(viewer, e.threadId);
          if (threads[key]) threads[key] = { ...threads[key], status: e.status };
        }
        return { threads };
      });
      // 차단된 대화는 미답변 집계에서 빠질 수 있다 — 오너 배지·카드를 다시 받는다
      if (get().inbox) void get().refreshSummary();
    },

    receiveDeleted: (e) => {
      set((s) => {
        // 받는 사람 기준 이벤트(viewerRole) — 그 보기에만 반영
        const key = keyOf(viewerOfRole(e.viewerRole), e.threadId);
        const t = s.threads[key];
        return {
          messages: s.messages[key] ? { ...s.messages, [key]: applyDeleted(s.messages[key], e.messageId, null) } : s.messages,
          threads: t ? { ...s.threads, [key]: applyDeletedToThread(t, e) } : s.threads,
        };
      });
      // 삭제로 미답변이 바뀔 수 있다(thread.unanswered) — 오너 배지·카드
      if (viewerOfRole(e.viewerRole) === "owner") void get().refreshSummary();
    },

    refreshSummary: async () => {
      try {
        const sm = await fetchInboxSummary(null);
        set((s) => ({ inbox: { unansweredCount: sm.unansweredCount, unreadThreadCount: sm.unreadThreadCount }, inboxTick: s.inboxTick + 1 }));
      } catch {
        // 배지는 보조 정보
      }
    },

    refreshCustomerUnread: async () => {
      try {
        set({ customerUnreadThreads: (await fetchUnreadChats()).unreadThreadCount });
      } catch {
        // 배지는 보조 정보
      }
    },

    onReconnect: () => {
      // Last-Event-ID 재전송이 없어 열린 대화마다 after 로 따라잡습니다(계약 C3.5·C7.1)
      for (const key of Object.keys(get().open)) {
        const [viewer, threadId] = key.split(":") as [ChatViewer, string];
        void get().catchUp(viewer, threadId).catch(() => undefined);
      }
      for (const viewer of ["customer", "owner"] as const) {
        if (get().lists[viewer].loaded) void get().loadThreads(viewer);
      }
      if (get().inbox) void get().refreshSummary();
      void get().refreshCustomerUnread();
    },

    isOpen: (threadId) => !!get().open[keyOf("customer", threadId)] || !!get().open[keyOf("owner", threadId)],

    reset: () => {
      Object.values(get().pending).flat().forEach(revokePreviews);
      set(initial());
    },
  };
});
