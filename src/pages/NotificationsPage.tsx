import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Icon from "@/components/common/Icon";
import NotificationList from "@/components/notifications/NotificationList";
import LoginRequired, { useMemberSession } from "@/components/common/LoginRequired";
import {
  BackButton,
  Card,
  CardTitle,
  Empty,
  ErrorText,
  GhostButton,
  MemberPage,
  Muted,
  PageHead,
  PageTitle,
  SmallButton,
} from "@/components/common/memberPageStyles";
import type { AppNotification } from "@/services/notifications/types";
import { currentPushStatus, enablePush, type PushStatus } from "@/services/notifications/firebasePush";
import { useMemberNotificationStore } from "@/stores/notificationStore";
import {
  fetchMarketingConsent,
  updateMarketingConsent,
  type MarketingConsent,
} from "@/services/notifications/repositories/marketingConsentRepository";
import { formatDate, notificationTarget } from "@/services/notifications/format";
import { toast } from "@/stores/toastStore";

const PUSH_MESSAGE: Record<PushStatus, string> = {
  unconfigured: "",
  unsupported:
    "이 브라우저에서는 푸시 알림을 받을 수 없어요. iPhone은 홈 화면에 추가한 앱(iOS 16.4 이상)에서만 받을 수 있어요.",
  default: "앱을 닫아 두어도 새 알림을 푸시로 받아 보세요.",
  denied: "브라우저 설정에서 알림이 차단되어 있어요. 사이트 설정에서 알림을 허용해 주세요.",
  enabled: "이 기기에서 푸시 알림을 받고 있어요.",
  error: "푸시 알림을 켜지 못했어요. 잠시 후 다시 시도해 주세요.",
};

/** 회원 알림함 — /notifications (계약 9절) */
export default function NotificationsPage() {
  const navigate = useNavigate();
  const { authReady, isMember } = useMemberSession();
  const items = useMemberNotificationStore((s) => s.items);
  const loaded = useMemberNotificationStore((s) => s.loaded);
  const loading = useMemberNotificationStore((s) => s.loading);
  const error = useMemberNotificationStore((s) => s.error);
  const nextCursor = useMemberNotificationStore((s) => s.nextCursor);
  const unreadCount = useMemberNotificationStore((s) => s.unreadCount);
  const [pushStatus, setPushStatus] = useState<PushStatus>(() => currentPushStatus());
  const [pushBusy, setPushBusy] = useState(false);
  const [consent, setConsent] = useState<MarketingConsent | null>(null);
  const [consentBusy, setConsentBusy] = useState(false);

  useEffect(() => {
    if (!isMember) return;
    let cancelled = false;
    fetchMarketingConsent()
      .then((c) => {
        if (!cancelled) setConsent(c);
      })
      .catch(() => undefined); // 실패하면 토글을 숨깁니다.
    return () => {
      cancelled = true;
    };
  }, [isMember]);

  // 알림 패널 하단 "알림 설정"(#settings)으로 들어오면 동의 카드로 스크롤합니다.
  const location = useLocation();
  useEffect(() => {
    if (location.hash !== "#settings" || !consent) return;
    document.getElementById("settings")?.scrollIntoView({ block: "start" });
  }, [location.hash, consent]);

  const toggleConsent = async () => {
    if (!consent) return;
    setConsentBusy(true);
    try {
      const next = await updateMarketingConsent(!consent.pushAgreed);
      setConsent(next);
      toast.success(next.pushAgreed ? "광고성 알림 수신에 동의했어요." : "광고성 알림 수신을 철회했어요.");
    } catch {
      toast.error("설정을 바꾸지 못했어요. 잠시 후 다시 시도해 주세요.");
    } finally {
      setConsentBusy(false);
    }
  };

  useEffect(() => {
    if (!isMember) return;
    const st = useMemberNotificationStore.getState();
    void st.loadFirstPage();
    void st.refreshUnreadCount();
  }, [isMember]);

  const open = (n: AppNotification) => {
    void useMemberNotificationStore.getState().markRead(n.id);
    navigate(notificationTarget(n, "me"));
  };

  const readAll = async () => {
    try {
      await useMemberNotificationStore.getState().markAllRead();
    } catch {
      toast.error("모두 읽음 처리에 실패했어요.");
    }
  };

  const turnOnPush = async () => {
    setPushBusy(true);
    const st = await enablePush(true);
    setPushStatus(st);
    setPushBusy(false);
    if (st === "enabled") toast.success("푸시 알림을 켰어요.");
  };

  return (
    <MemberPage>
      <PageHead>
        <BackButton type="button" aria-label="뒤로" onClick={() => navigate(-1)}>
          <Icon name="arrow_back" size={22} />
        </BackButton>
        <PageTitle>알림</PageTitle>
        {isMember && unreadCount > 0 && (
          <SmallButton type="button" onClick={() => void readAll()}>
            모두 읽음
          </SmallButton>
        )}
      </PageHead>

      {!authReady ? null : !isMember ? (
        <LoginRequired message="로그인하면 소유 신청 결과와 소식을 알림으로 받아 볼 수 있어요." />
      ) : (
        <>
          {pushStatus !== "unconfigured" && (
            <Card>
              <CardTitle>푸시 알림</CardTitle>
              <Muted>{PUSH_MESSAGE[pushStatus]}</Muted>
              {(pushStatus === "default" || pushStatus === "error") && (
                <div style={{ marginTop: 12 }}>
                  <SmallButton type="button" disabled={pushBusy} onClick={() => void turnOnPush()}>
                    {pushBusy ? "켜는 중…" : "푸시 알림 받기"}
                  </SmallButton>
                </div>
              )}
            </Card>
          )}

          {consent && (
            <Card id="settings">
              <CardTitle>광고성 알림 받기 (선택)</CardTitle>
              <Muted>
                이벤트·혜택 소식을 알림으로 받아요. 제목에 "(광고)"가 붙고, 21시~8시에는 보내지 않아요.
                {consent.pushAgreed && consent.agreedAt ? ` ${formatDate(consent.agreedAt)} 동의함.` : ""}
                {!consent.pushAgreed && consent.revokedAt ? ` ${formatDate(consent.revokedAt)} 철회함.` : ""}
              </Muted>
              <div style={{ marginTop: 12 }}>
                <SmallButton
                  type="button"
                  role="switch"
                  aria-checked={consent.pushAgreed}
                  disabled={consentBusy}
                  onClick={() => void toggleConsent()}
                >
                  {consent.pushAgreed ? "받는 중 · 끄기" : "받기"}
                </SmallButton>
              </div>
            </Card>
          )}

          {loaded && items.length === 0 ? (
            <Empty>아직 받은 알림이 없어요.</Empty>
          ) : (
            <NotificationList items={items} onOpen={open} />
          )}

          {error && <ErrorText role="alert">{error}</ErrorText>}
          {nextCursor && (
            <div style={{ marginTop: 14, display: "flex" }}>
              <GhostButton
                type="button"
                style={{ flex: 1 }}
                disabled={loading}
                onClick={() => void useMemberNotificationStore.getState().loadMore()}
              >
                {loading ? "불러오는 중…" : "더 보기"}
              </GhostButton>
            </div>
          )}
        </>
      )}

      <div style={{ marginTop: 20, display: "flex" }}>
        <GhostButton type="button" style={{ flex: 1 }} onClick={() => navigate("/notice")}>
          공지사항 보기
        </GhostButton>
      </div>
    </MemberPage>
  );
}
