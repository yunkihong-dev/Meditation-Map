import { create, type StoreApi, type UseBoundStore } from "zustand";
import type { AppNotification, NotificationScope } from "@/services/notifications/types";
import {
  fetchNotifications,
  fetchUnreadCount,
  markAllNotificationsRead,
  markNotificationRead,
} from "@/services/notifications/repositories/notificationsRepository";

/*
 * 회원용·관리자용 알림 스토어. 쿠키·경로가 달라 인스턴스를 둘로 나눕니다(계약 3절).
 *
 * 같은 알림이 SSE 와 FCM(재연결 틈), 그리고 connected 재동기화 첫 페이지로
 * 여러 번 들어올 수 있습니다. 그래서 id 기준으로 한 번만 넣고 안읽은 수도 한 번만 올립니다.
 */

// ── 순수 함수 (테스트 대상) ─────────────────────────────────

/** 기존 목록에 페이지를 합칩니다. append=false 면 첫 페이지 교체(재동기화), 중복 id 는 새 값이 이깁니다. */
export function mergePage(
  existing: AppNotification[],
  page: AppNotification[],
  append: boolean
): AppNotification[] {
  if (!append) {
    // 첫 페이지로 교체하되, 첫 페이지보다 오래된 항목(이미 더 불러온 페이지)은 유지합니다.
    const pageIds = new Set(page.map((n) => n.id));
    const oldest = page.length > 0 ? page[page.length - 1].id : null;
    const tail = oldest
      ? existing.filter((n) => !pageIds.has(n.id) && compareId(n.id, oldest) < 0)
      : [];
    return [...page, ...tail];
  }
  const seen = new Set(existing.map((n) => n.id));
  return [...existing, ...page.filter((n) => !seen.has(n.id))];
}

/** 숫자 문자열 id 비교. 숫자가 아니면 문자열 비교로 떨어집니다. */
export function compareId(a: string, b: string): number {
  if (/^\d+$/.test(a) && /^\d+$/.test(b)) {
    if (a.length !== b.length) return a.length - b.length;
  }
  return a < b ? -1 : a > b ? 1 : 0;
}

export interface IncomingResult {
  items: AppNotification[];
  unreadCount: number;
  isNew: boolean;
}

/**
 * 실시간(SSE·FCM 포그라운드)으로 들어온 알림 1건을 반영합니다.
 * - 이미 본 id 면 아무것도 바꾸지 않습니다(isNew=false)
 * - 목록을 아직 안 불러왔으면 목록은 두고 안읽은 수만 올립니다(나중에 첫 페이지가 가져옴)
 */
export function applyIncoming(
  items: AppNotification[],
  seenIds: ReadonlySet<string>,
  unreadCount: number,
  n: AppNotification,
  listLoaded: boolean
): IncomingResult {
  if (seenIds.has(n.id) || items.some((x) => x.id === n.id)) {
    return { items, unreadCount, isNew: false };
  }
  // 채팅 알림 합치기(계약 C7.2-5): 서버는 같은 대화의 미확인 채팅 알림을 지우고 새로 1개 넣는다 →
  // 목록에서도 같은 refType·refId 의 미확인 항목을 빼고, 안읽은 수는 뺀 만큼 돌려놓는다.
  let base = items;
  let unread = unreadCount;
  if (isChatCollapsible(n)) {
    const dup = items.filter((x) => !x.read && x.type === n.type && x.refType === n.refType && x.refId === n.refId);
    if (dup.length) {
      base = items.filter((x) => !dup.includes(x));
      unread = Math.max(0, unread - dup.length);
    }
  }
  return {
    items: listLoaded ? [n, ...base] : base,
    unreadCount: n.read ? unread : unread + 1,
    isNew: true,
  };
}

/** 합치기 대상 — CENTER_CHAT_MESSAGE 만(계약 C7.2) */
export function isChatCollapsible(n: Pick<AppNotification, "type" | "refType" | "refId">): boolean {
  return n.type === "CENTER_CHAT_MESSAGE" && !!n.refId;
}

export function applyRead(items: AppNotification[], id: string, readAt: string): AppNotification[] {
  return items.map((n) => (n.id === id && !n.read ? { ...n, read: true, readAt } : n));
}

export function applyReadAll(items: AppNotification[], readAt: string): AppNotification[] {
  return items.map((n) => (n.read ? n : { ...n, read: true, readAt }));
}

// ── 스토어 ─────────────────────────────────────────────────

export interface NotificationState {
  scope: NotificationScope;
  items: AppNotification[];
  nextCursor: string | null;
  /** 첫 페이지를 한 번이라도 받았는지 */
  loaded: boolean;
  loading: boolean;
  error: string | null;
  unreadCount: number;
  seenIds: Set<string>;
  setUnreadCount: (n: number) => void;
  refreshUnreadCount: () => Promise<void>;
  loadFirstPage: () => Promise<void>;
  loadMore: () => Promise<void>;
  /** 실시간 알림 반영. 새 알림이면 true(토스트를 띄울지 판단용) */
  receive: (n: AppNotification) => boolean;
  markRead: (id: string) => Promise<void>;
  markAllRead: () => Promise<void>;
  reset: () => void;
}

const initial = (scope: NotificationScope) => ({
  scope,
  items: [] as AppNotification[],
  nextCursor: null as string | null,
  loaded: false,
  loading: false,
  error: null as string | null,
  unreadCount: 0,
  seenIds: new Set<string>(),
});

export function createNotificationStore(
  scope: NotificationScope
): UseBoundStore<StoreApi<NotificationState>> {
  return create<NotificationState>((set, get) => ({
    ...initial(scope),
    setUnreadCount: (n) => set({ unreadCount: Math.max(0, n) }),
    refreshUnreadCount: async () => {
      try {
        set({ unreadCount: await fetchUnreadCount(scope) });
      } catch {
        // 배지는 보조 정보라 조용히 둡니다.
      }
    },
    loadFirstPage: async () => {
      set({ loading: true, error: null });
      try {
        const page = await fetchNotifications(scope, null);
        set((s) => {
          const seen = new Set(s.seenIds);
          page.items.forEach((n) => seen.add(n.id));
          const merged = mergePage(s.items, page.items, false);
          // 더 불러온 오래된 페이지가 남아 있으면 그 다음 커서를 그대로 씁니다.
          const keptOlder = merged.length > page.items.length;
          return {
            items: merged,
            nextCursor: keptOlder ? s.nextCursor : page.nextCursor,
            loaded: true,
            loading: false,
            seenIds: seen,
          };
        });
      } catch {
        set({ loading: false, error: "알림을 불러오지 못했어요." });
      }
    },
    loadMore: async () => {
      const { nextCursor, loading } = get();
      if (!nextCursor || loading) return;
      set({ loading: true, error: null });
      try {
        const page = await fetchNotifications(scope, nextCursor);
        set((s) => {
          const seen = new Set(s.seenIds);
          page.items.forEach((n) => seen.add(n.id));
          return {
            items: mergePage(s.items, page.items, true),
            nextCursor: page.nextCursor,
            loading: false,
            seenIds: seen,
          };
        });
      } catch {
        set({ loading: false, error: "알림을 더 불러오지 못했어요." });
      }
    },
    receive: (n) => {
      const s = get();
      const r = applyIncoming(s.items, s.seenIds, s.unreadCount, n, s.loaded);
      if (!r.isNew) return false;
      const seen = new Set(s.seenIds);
      seen.add(n.id);
      set({ items: r.items, unreadCount: r.unreadCount, seenIds: seen });
      // 목록을 아직 안 받았으면 합쳐진 이전 알림이 있었는지 알 수 없어 서버 값으로 맞춥니다
      if (isChatCollapsible(n) && !s.loaded) void get().refreshUnreadCount();
      return true;
    },
    markRead: async (id) => {
      const target = get().items.find((n) => n.id === id);
      if (target?.read) return;
      const now = new Date().toISOString();
      set((s) => ({
        items: applyRead(s.items, id, now),
        unreadCount: target ? Math.max(0, s.unreadCount - 1) : s.unreadCount,
      }));
      try {
        const r = await markNotificationRead(scope, id);
        set({ unreadCount: r.unreadCount });
      } catch {
        // 실패하면 서버 값으로 되돌립니다.
        void get().refreshUnreadCount();
      }
    },
    markAllRead: async () => {
      const now = new Date().toISOString();
      const before = get().items;
      set((s) => ({ items: applyReadAll(s.items, now), unreadCount: 0 }));
      try {
        const r = await markAllNotificationsRead(scope);
        set({ unreadCount: r.unreadCount });
      } catch {
        set({ items: before });
        void get().refreshUnreadCount();
        throw new Error("모두 읽음 처리에 실패했어요.");
      }
    },
    reset: () => set(initial(scope)),
  }));
}

export const useMemberNotificationStore = createNotificationStore("me");
export const useAdminNotificationStore = createNotificationStore("admin");

export function notificationStoreFor(scope: NotificationScope) {
  return scope === "admin" ? useAdminNotificationStore : useMemberNotificationStore;
}
