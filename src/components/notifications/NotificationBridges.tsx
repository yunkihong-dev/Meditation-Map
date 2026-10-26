import { useCallback, useEffect } from "react";
import { useNotificationStream } from "@/hooks/useNotificationStream";
import { sessionAlive, useAuthStore } from "@/stores/authStore";
import { useAdminAuthStore } from "@/stores/adminAuthStore";
import { useAdminNotificationStore, useMemberNotificationStore } from "@/stores/notificationStore";
import { syncPushIfGranted } from "@/services/notifications/firebasePush";
import { useCenterChatStore } from "@/stores/centerChatStore";

/**
 * 회원 앱(Layout) 쪽 알림 연결. 화면을 그리지 않습니다.
 * - 로그인한 회원(비스태프)일 때만 SSE 를 엽니다(스태프 쿠키는 /me/** 에서 401)
 * - 로그인 직후 안읽은 수를 받고, 푸시 권한이 이미 허용돼 있으면 FCM 토큰을 조용히 갱신합니다
 * - 로그아웃되면 스토어를 비웁니다(다음 사용자의 배지에 남지 않게)
 */
export function MemberNotificationBridge() {
  const isAuthed = useAuthStore((s) => !!s.accessToken);
  const isStaff = useAuthStore((s) => s.isStaff());
  const enabled = isAuthed && !isStaff;

  const checkSession = useCallback(async () => {
    const alive = await sessionAlive("/me");
    if (!alive) await useAuthStore.getState().bootstrapAuth();
    return alive;
  }, []);

  useNotificationStream({ scope: "me", enabled, checkSession });

  useEffect(() => {
    if (!enabled) {
      useMemberNotificationStore.getState().reset();
      useCenterChatStore.getState().reset();
      return;
    }
    void useMemberNotificationStore.getState().refreshUnreadCount();
    void useCenterChatStore.getState().refreshCustomerUnread();
    void syncPushIfGranted().catch(() => undefined);
  }, [enabled]);

  return null;
}

/** 관리자(AdminLayout) 쪽 알림 연결 — /admin/notifications/** 스트림. */
export function AdminNotificationBridge() {
  const enabled = useAdminAuthStore((s) => s.authenticated);

  const checkSession = useCallback(() => sessionAlive("/admin/auth/me"), []);

  useNotificationStream({ scope: "admin", enabled, checkSession });

  useEffect(() => {
    if (!enabled) {
      useAdminNotificationStore.getState().reset();
      return;
    }
    void useAdminNotificationStore.getState().refreshUnreadCount();
  }, [enabled]);

  return null;
}
