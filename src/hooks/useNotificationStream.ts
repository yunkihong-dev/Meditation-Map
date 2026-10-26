import { useEffect, useRef } from "react";
import type { NotificationScope } from "@/services/notifications/types";
import { parseNotification, parseUnreadCount } from "@/services/notifications/types";
import { notificationStreamUrl } from "@/services/notifications/repositories/notificationsRepository";
import { notificationStoreFor } from "@/stores/notificationStore";
import { toast } from "@/stores/toastStore";
import { useCenterChatStore } from "@/stores/centerChatStore";
import {
  parseChatDeletedEvent,
  parseChatMessageEvent,
  parseChatReadEvent,
  parseChatThreadEvent,
} from "@/services/centerChat/types";

/** DC5 삭제 이벤트 이름 — 계약 부록에 아직 없어 BE 원문 확인 전 가정값 */
export const CHAT_DELETED_EVENT = "chat-message-deleted";

/**
 * 알림 SSE 구독 (계약 2.6). `enabled` 가 true 인 동안만 연결합니다.
 *
 * - `connected`  → 안읽은 수 반영 + 목록을 이미 불러왔다면 첫 페이지 재동기화
 *                  (서버는 Last-Event-ID 를 무시하므로 끊긴 동안의 알림은 이것으로 복구)
 * - `notification` → id 중복 제거 후 목록 앞에 넣고 토스트
 * - `unread-count` → 값 덮어쓰기(다른 탭·기기에서 읽음)
 * - 브라우저가 재연결을 포기(readyState CLOSED, 401 등)하면 지수 백오프로 직접 다시 엽니다.
 *   다시 열기 전에 `checkSession()`으로 세션을 확인해 로그아웃 상태면 멈춥니다.
 */
export interface StreamOptions {
  scope: NotificationScope;
  enabled: boolean;
  /** 세션이 살아 있는지 확인. false 면 재연결을 멈춥니다. */
  checkSession: () => Promise<boolean>;
  /** 새 알림 토스트를 띄울지 (기본 true) */
  toastOnNew?: boolean;
}

export const MAX_BACKOFF_MS = 60_000;

/** 1 → 2 → 4 … 60초 상한 */
export function backoffDelay(attempt: number): number {
  return Math.min(MAX_BACKOFF_MS, 1000 * 2 ** Math.max(0, attempt));
}

/** SSE data 를 JSON 으로. 깨진 데이터면 null. */
export function parseEventData(data: unknown): unknown {
  if (typeof data !== "string") return null;
  try {
    return JSON.parse(data) as unknown;
  } catch {
    return null;
  }
}

export function useNotificationStream({ scope, enabled, checkSession, toastOnNew = true }: StreamOptions) {
  // 콜백·옵션이 바뀌어도 연결을 다시 열지 않도록 ref 로 최신 값만 읽습니다.
  const optsRef = useRef({ checkSession, toastOnNew });
  useEffect(() => {
    optsRef.current = { checkSession, toastOnNew };
  }, [checkSession, toastOnNew]);

  useEffect(() => {
    if (!enabled) return;
    const url = notificationStreamUrl(scope);
    if (!url || typeof EventSource === "undefined") return;

    const store = notificationStoreFor(scope);
    let es: EventSource | null = null;
    let attempt = 0;
    let retryTimer: ReturnType<typeof setTimeout> | null = null;
    let disposed = false;

    const onConnected = (ev: MessageEvent) => {
      attempt = 0;
      const data = parseEventData(ev.data);
      if (data != null) store.getState().setUnreadCount(parseUnreadCount(data));
      if (store.getState().loaded) void store.getState().loadFirstPage();
      // 채팅: 끊긴 동안 놓친 메시지를 열린 대화마다 after 로 따라잡습니다(계약 C7.1)
      if (scope === "me") useCenterChatStore.getState().onReconnect();
    };

    const onNotification = (ev: MessageEvent) => {
      const n = parseNotification(parseEventData(ev.data));
      if (!n) return;
      const isNew = store.getState().receive(n);
      // 지금 보고 있는 대화의 채팅 알림은 토스트를 띄우지 않습니다(대화 화면이 곧바로 읽음 처리 — 계약 C7.1 끝 줄)
      const watching = n.type === "CENTER_CHAT_MESSAGE" && !!n.refId && useCenterChatStore.getState().isOpen(n.refId);
      if (isNew && !watching && optsRef.current.toastOnNew) toast.info(n.title || "새 알림이 도착했어요.");
    };

    const onUnreadCount = (ev: MessageEvent) => {
      const data = parseEventData(ev.data);
      if (data != null) store.getState().setUnreadCount(parseUnreadCount(data));
    };

    const scheduleReopen = () => {
      if (disposed || retryTimer) return;
      const delay = backoffDelay(attempt++);
      retryTimer = setTimeout(async () => {
        retryTimer = null;
        if (disposed) return;
        let alive = false;
        try {
          alive = await optsRef.current.checkSession();
        } catch {
          alive = true; // 네트워크 오류면 세션은 모르는 상태 — 다시 시도합니다.
        }
        if (disposed) return;
        if (alive) open();
      }, delay);
    };

    const onError = () => {
      // CONNECTING 이면 브라우저 자동 재연결(retry: 5000)에 맡깁니다.
      if (es && es.readyState === EventSource.CLOSED) {
        es.close();
        es = null;
        scheduleReopen();
      }
    };

    const chat = useCenterChatStore.getState;
    const onChatMessage = (ev: MessageEvent) => {
      const e = parseChatMessageEvent(parseEventData(ev.data));
      if (e) chat().receiveMessage(e);
    };
    const onChatRead = (ev: MessageEvent) => {
      const e = parseChatReadEvent(parseEventData(ev.data));
      if (e) chat().receiveRead(e);
    };
    const onChatThread = (ev: MessageEvent) => {
      const e = parseChatThreadEvent(parseEventData(ev.data));
      if (e) chat().receiveThread(e);
    };
    const onChatDeleted = (ev: MessageEvent) => {
      const e = parseChatDeletedEvent(parseEventData(ev.data));
      if (e) chat().receiveDeleted(e);
    };

    function open() {
      if (disposed) return;
      es = new EventSource(url!, { withCredentials: true });
      es.addEventListener("connected", onConnected as EventListener);
      es.addEventListener("notification", onNotification as EventListener);
      es.addEventListener("unread-count", onUnreadCount as EventListener);
      if (scope === "me") {
        // 관리자 스트림에는 채팅 이벤트가 없습니다(계약 C7.1)
        es.addEventListener("chat-message", onChatMessage as EventListener);
        es.addEventListener("chat-read", onChatRead as EventListener);
        es.addEventListener("chat-thread", onChatThread as EventListener);
        es.addEventListener(CHAT_DELETED_EVENT, onChatDeleted as EventListener);
      }
      es.onerror = onError;
    }

    open();

    return () => {
      disposed = true;
      if (retryTimer) clearTimeout(retryTimer);
      es?.close();
      es = null;
    };
  }, [scope, enabled]);
}
