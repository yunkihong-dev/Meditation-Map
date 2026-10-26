import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NotificationList from "@/components/notifications/NotificationList";
import { AdminButton, AdminCard, AdminError } from "@/components/admin/adminStyles";
import type { AppNotification } from "@/services/notifications/types";
import { notificationTarget } from "@/services/notifications/format";
import { useAdminNotificationStore } from "@/stores/notificationStore";
import { toast } from "@/stores/toastStore";

/** 관리자 알림함 — /admin/notifications (계약 3절). 수신자는 로그인한 스태프 본인입니다. */
export default function AdminNotificationsPage() {
  const navigate = useNavigate();
  const items = useAdminNotificationStore((s) => s.items);
  const loaded = useAdminNotificationStore((s) => s.loaded);
  const loading = useAdminNotificationStore((s) => s.loading);
  const error = useAdminNotificationStore((s) => s.error);
  const nextCursor = useAdminNotificationStore((s) => s.nextCursor);
  const unreadCount = useAdminNotificationStore((s) => s.unreadCount);

  useEffect(() => {
    void useAdminNotificationStore.getState().loadFirstPage();
  }, []);

  const open = (n: AppNotification) => {
    void useAdminNotificationStore.getState().markRead(n.id);
    navigate(notificationTarget(n, "admin"));
  };

  return (
    <AdminCard>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, marginBottom: 12 }}>
        <h2 style={{ margin: 0, fontSize: 18 }}>알림 {unreadCount > 0 ? `(${unreadCount})` : ""}</h2>
        <AdminButton
          type="button"
          $variant="ghost"
          disabled={unreadCount === 0}
          onClick={() =>
            void useAdminNotificationStore
              .getState()
              .markAllRead()
              .catch(() => toast.error("모두 읽음 처리에 실패했어요."))
          }
        >
          모두 읽음
        </AdminButton>
      </div>
      {error && <AdminError>{error}</AdminError>}
      {loaded && items.length === 0 ? (
        <p style={{ color: "#71717a", fontSize: 13 }}>받은 알림이 없습니다.</p>
      ) : (
        <NotificationList dark items={items} onOpen={open} />
      )}
      {nextCursor && (
        <div style={{ marginTop: 12 }}>
          <AdminButton
            type="button"
            $variant="ghost"
            disabled={loading}
            onClick={() => void useAdminNotificationStore.getState().loadMore()}
          >
            {loading ? "불러오는 중…" : "더 보기"}
          </AdminButton>
        </div>
      )}
    </AdminCard>
  );
}
