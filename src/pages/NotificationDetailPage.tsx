import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Icon from "@/components/common/Icon";
import LoginRequired, { useMemberSession } from "@/components/common/LoginRequired";
import {
  BackButton,
  Card,
  GhostButton,
  MemberPage,
  Muted,
  PageHead,
  PageTitle,
} from "@/components/common/memberPageStyles";
import { AdminButton, AdminCard } from "@/components/admin/adminStyles";
import type { AppNotification, NotificationScope } from "@/services/notifications/types";
import { formatDateTime } from "@/services/notifications/format";
import { findNotificationById } from "@/services/notifications/repositories/notificationsRepository";
import { notificationStoreFor } from "@/stores/notificationStore";

/**
 * 알림 자체 상세 — `/notifications/:notificationId`, `/admin/notifications/:notificationId`.
 * linkUrl 이 없는 알림(광고 등)을 눌렀을 때 오는 곳입니다(계약 9절 밖, FE 전용 — 라운드 4).
 * BE 에 단건 조회 API 가 없어 스토어 캐시 → 목록 API 훑기 순으로 찾고, 없으면 알림 목록으로 돌아갑니다.
 */
export default function NotificationDetailPage({ scope = "me" }: { scope?: NotificationScope }) {
  const navigate = useNavigate();
  const { notificationId = "" } = useParams();
  const { authReady, isMember } = useMemberSession();
  const store = notificationStoreFor(scope);
  const cached = store((s) => s.items.find((n) => n.id === notificationId) ?? null);
  const [fetched, setFetched] = useState<AppNotification | null>(null);
  const [missing, setMissing] = useState(false);
  const allowed = scope === "admin" || isMember;
  const item = cached ?? fetched;

  useEffect(() => {
    if (!allowed || cached || !notificationId) return;
    let cancelled = false;
    findNotificationById(scope, notificationId)
      .then((n) => {
        if (cancelled) return;
        if (n) setFetched(n);
        else setMissing(true);
      })
      .catch(() => {
        if (!cancelled) setMissing(true);
      });
    return () => {
      cancelled = true;
    };
  }, [allowed, cached, notificationId, scope]);

  // 열어 본 알림은 읽음 처리
  useEffect(() => {
    if (item && !item.read) void store.getState().markRead(item.id);
  }, [item, store]);

  const listPath = scope === "admin" ? "/admin/notifications" : "/notifications";
  if (missing) return <Navigate to={listPath} replace />;

  if (scope === "admin") {
    return (
      <AdminCard>
        <AdminButton type="button" $variant="ghost" onClick={() => navigate(listPath)}>
          ← 알림 목록
        </AdminButton>
        {!item ? (
          <p style={{ color: "#71717a", fontSize: 13 }}>불러오는 중…</p>
        ) : (
          <article style={{ marginTop: 12 }}>
            <h2 style={{ margin: "0 0 6px", fontSize: 18, overflowWrap: "anywhere" }}>{item.title || "알림"}</h2>
            <p style={{ margin: "0 0 12px", fontSize: 12, color: "#a1a1aa" }}>{formatDateTime(item.createdAt)}</p>
            <p style={{ margin: 0, fontSize: 14, whiteSpace: "pre-line", overflowWrap: "anywhere" }}>{item.body}</p>
          </article>
        )}
      </AdminCard>
    );
  }

  return (
    <MemberPage>
      <PageHead>
        <BackButton type="button" aria-label="뒤로" onClick={() => navigate(-1)}>
          <Icon name="arrow_back" size={22} />
        </BackButton>
        <PageTitle>알림</PageTitle>
      </PageHead>
      {!authReady ? null : !isMember ? (
        <LoginRequired />
      ) : !item ? (
        <Muted>불러오는 중…</Muted>
      ) : (
        <Card as="article">
          <h2 style={{ margin: "0 0 6px", fontSize: "1.8rem", overflowWrap: "anywhere" }}>{item.title || "알림"}</h2>
          <Muted style={{ marginBottom: 14 }}>{formatDateTime(item.createdAt)}</Muted>
          <p style={{ margin: 0, fontSize: "1.5rem", lineHeight: 1.6, whiteSpace: "pre-line", overflowWrap: "anywhere" }}>
            {item.body}
          </p>
        </Card>
      )}
      <div style={{ marginTop: 16, display: "flex" }}>
        <GhostButton type="button" style={{ flex: 1 }} onClick={() => navigate(listPath)}>
          알림 전체 보기
        </GhostButton>
      </div>
    </MemberPage>
  );
}
