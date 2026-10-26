import { useCallback, useEffect, useId, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import Icon from "@/components/common/Icon";
import NotificationList from "@/components/notifications/NotificationList";
import type { AppNotification, NotificationScope } from "@/services/notifications/types";
import { badgeText, notificationTarget } from "@/services/notifications/format";
import { notificationStoreFor } from "@/stores/notificationStore";
import { toast } from "@/stores/toastStore";
import { typography } from "@/styles/typography";

/*
 * 헤더 종 + 알림 패널(드롭다운).
 * 종을 누르면 페이지를 옮기지 않고 종 바로 아래에 알림 목록을 엽니다. 회원 홈 헤더와 관리자 상단바가 함께 씁니다.
 * - 바깥 클릭·ESC·종 다시 누르기로 닫힘. ESC 로 닫으면 포커스를 종으로 돌려줍니다
 * - 열면 패널로 포커스를 옮기고 첫 페이지를 다시 받습니다(SSE 로 들어온 새 알림은 스토어에서 바로 맨 위에 붙음)
 * - 항목을 누르면 읽음 처리 → linkUrl 이동 → 닫힘
 * - 전체 화면(/notifications)은 FCM 클릭 착지점이라 남겨 두고, 패널 하단 "전체 보기"로만 연결합니다
 */

/**
 * app: 홈 헤더(흰 원형 버튼) / admin: 관리자 상단바(어두움)
 * plain: 센터 관리 사이드바 — pc_3 상단 내비 종 `p-2 text-on-surface-variant hover:bg-primary/5 rounded-full transition-colors`
 * m4: 모바일 대시보드 헤더(_4) — `text-primary hover:opacity-80 transition-opacity active:scale-95 p-2 rounded-full` + 빨간 점
 */
type Variant = "app" | "admin" | "plain" | "m4";

const Wrap = styled.div`
  position: relative;
  display: inline-flex;
`;

const BellBtn = styled.button<{ $variant: Variant }>`
  position: relative;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  cursor: pointer;

  ${({ $variant, theme }) =>
    $variant === "plain"
      ? css`
          padding: 8px;
          border: 0;
          border-radius: 9999px;
          background: transparent;
          color: #494453;
          transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
          transition-duration: 150ms;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

          &:hover {
            background: rgba(83, 42, 168, 0.05);
          }
        `
      : $variant === "m4"
        ? css`
            padding: 8px;
            border: 0;
            border-radius: 9999px;
            background: transparent;
            color: #532aa8;
            transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);

            &:hover {
              opacity: 0.8;
            }

            &:active {
              transform: scale(0.95);
            }
          `
        : $variant === "app"
      ? css`
          width: 48px;
          height: 48px;
          border: 0;
          border-radius: ${theme.radii.lg};
          background: ${theme.colors.white};
          box-shadow: 0 4px 20px rgba(107, 70, 193, 0.04);
          color: ${theme.colors.primary600};
        `
      : css`
          width: 38px;
          height: 34px;
          border: 1px solid #3f3f46;
          border-radius: ${theme.radii.md};
          background: transparent;
          color: #fff;
        `}

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary300};
    outline-offset: 2px;
  }
`;

/** _4: `absolute top-2 right-2 w-2 h-2 bg-error rounded-full` */
const Dot = styled.span`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  background: #ba1a1a;
`;

const Badge = styled.span`
  position: absolute;
  top: 4px;
  right: 2px;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.error};
  color: #fff;
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1;
  box-shadow: 0 0 0 2px #fff;
`;

const Panel = styled.div<{ $variant: Variant; $side: boolean }>`
  position: absolute;
  ${({ $side }) =>
    $side
      ? css`
          top: -8px;
          left: calc(100% + 14px);
        `
      : css`
          top: calc(100% + 10px);
          right: 0;
        `}
  z-index: 700;
  width: min(360px, calc(100vw - 32px));
  max-height: min(70vh, 520px);
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  overflow: hidden;
  outline: none;

  ${({ $variant, theme }) =>
    $variant !== "admin"
      ? css`
          background: ${theme.colors.surface};
          border: ${theme.hairline};
          box-shadow: ${theme.shadow.float};
          color: ${theme.colors.text900};
        `
      : css`
          background: #18181b;
          border: 1px solid #2a2a30;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45);
          color: #f4f4f5;
        `}
`;

/** 종 쪽을 가리키는 꼬리. 패널이 overflow:hidden 이라 패널 바깥(Wrap)에 그립니다. */
const Arrow = styled.span<{ $variant: Variant; $side: boolean }>`
  position: absolute;
  ${({ $side, $variant }) =>
    $side
      ? css`
          display: none;
        `
      : css`
          top: calc(100% + 4px);
          right: ${$variant === "app" ? "18px" : $variant === "admin" ? "13px" : "14px"};
        `}
  z-index: 701;
  width: 12px;
  height: 12px;
  transform: rotate(45deg);
  background: ${({ $variant, theme }) => ($variant !== "admin" ? theme.colors.surface : "#18181b")};
  border-left: ${({ $variant, theme }) => ($variant !== "admin" ? theme.hairline : "1px solid #2a2a30")};
  border-top: ${({ $variant, theme }) => ($variant !== "admin" ? theme.hairline : "1px solid #2a2a30")};
`;

const Head = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 14px 16px 10px;

  h2 {
    margin: 0;
    ${typography.body1};
    font-weight: 700;
  }
`;

const LinkBtn = styled.button`
  border: 0;
  background: transparent;
  padding: 4px 6px;
  ${typography.caption};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary500};
  cursor: pointer;

  &:disabled {
    opacity: 0.45;
    cursor: default;
  }
`;

const Body = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: 0 12px 12px;
`;

const Empty = styled.p`
  margin: 24px 0;
  text-align: center;
  ${typography.body2};
  opacity: 0.7;
`;

const Foot = styled.div<{ $variant: Variant }>`
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 10px;
  border-top: ${({ $variant, theme }) => ($variant !== "admin" ? theme.hairline : "1px solid #27272a")};
`;

interface Props {
  scope: NotificationScope;
  variant?: Variant;
  /** "side": 버튼 오른쪽으로 펼침(센터 관리 사이드바 안에서) */
  placement?: "below" | "side";
}

export default function NotificationBell({
  scope,
  variant = scope === "admin" ? "admin" : "app",
  placement = "below",
}: Props) {
  const side = placement === "side";
  const store = notificationStoreFor(scope);
  const navigate = useNavigate();
  const unreadCount = store((s) => s.unreadCount);
  const items = store((s) => s.items);
  const loaded = store((s) => s.loaded);
  const loading = store((s) => s.loading);
  const error = store((s) => s.error);
  const nextCursor = store((s) => s.nextCursor);
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const panelId = useId();
  const badge = badgeText(unreadCount);
  const allPath = scope === "admin" ? "/admin/notifications" : "/notifications";

  const close = useCallback((restoreFocus: boolean) => {
    setOpen(false);
    if (restoreFocus) buttonRef.current?.focus();
  }, []);

  // 열 때: 포커스 이동 + 첫 페이지 재동기화
  useEffect(() => {
    if (!open) return;
    panelRef.current?.focus();
    void store.getState().loadFirstPage();
  }, [open, store]);

  // 바깥 클릭·ESC 로 닫기
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent | MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) close(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close(true);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  // 패널 안 무한 스크롤 — 목록 끝이 보이면 다음 페이지
  useEffect(() => {
    if (!open || !nextCursor || typeof IntersectionObserver === "undefined") return;
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((en) => en.isIntersecting)) void store.getState().loadMore();
      },
      { root: el.parentElement }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [open, nextCursor, store]);

  const openItem = (n: AppNotification) => {
    void store.getState().markRead(n.id);
    setOpen(false);
    navigate(notificationTarget(n, scope));
  };

  const goto = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <Wrap ref={wrapRef}>
      <BellBtn
        ref={buttonRef}
        type="button"
        $variant={variant}
        aria-label={badge ? `알림, 읽지 않은 알림 ${badge}개` : "알림"}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <Icon name="notifications" size={variant === "admin" ? 20 : 24} />
        {badge && (variant === "m4" ? <Dot aria-hidden /> : <Badge aria-hidden>{badge}</Badge>)}
      </BellBtn>

      {open && (
        <>
          <Arrow $variant={variant} $side={side} aria-hidden />
          <Panel
            ref={panelRef}
            id={panelId}
            role="dialog"
            aria-label="알림"
            tabIndex={-1}
            $variant={variant}
            $side={side}
          >
            <Head>
              <h2>알림</h2>
              <LinkBtn
                type="button"
                disabled={unreadCount === 0}
                onClick={() =>
                  void store
                    .getState()
                    .markAllRead()
                    .catch(() => toast.error("모두 읽음 처리에 실패했어요."))
                }
              >
                모두 읽음
              </LinkBtn>
            </Head>
            <Body>
              {loaded && items.length === 0 ? (
                <Empty>아직 받은 알림이 없어요.</Empty>
              ) : !loaded && loading ? (
                <Empty>불러오는 중…</Empty>
              ) : (
                <NotificationList dark={variant === "admin"} items={items} onOpen={openItem} />
              )}
              {error && <Empty role="alert">{error}</Empty>}
              {nextCursor && (
                <div ref={sentinelRef} style={{ display: "flex", justifyContent: "center", paddingTop: 8 }}>
                  <LinkBtn type="button" disabled={loading} onClick={() => void store.getState().loadMore()}>
                    {loading ? "불러오는 중…" : "더 보기"}
                  </LinkBtn>
                </div>
              )}
            </Body>
            <Foot $variant={variant}>
              <LinkBtn type="button" onClick={() => goto(allPath)}>
                전체 보기
              </LinkBtn>
              {scope === "me" && (
                <LinkBtn type="button" onClick={() => goto("/notifications#settings")}>
                  알림 설정
                </LinkBtn>
              )}
            </Foot>
          </Panel>
        </>
      )}
    </Wrap>
  );
}
