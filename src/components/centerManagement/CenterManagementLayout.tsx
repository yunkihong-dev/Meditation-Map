import { useEffect } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useCenterChatStore } from "@/stores/centerChatStore";
import { useAuthStore } from "@/stores/authStore";
import styled, { css } from "styled-components";
import Icon from "@/components/common/Icon";
import BottomNav from "@/components/layout/BottomNav";
import { MemberNotificationBridge } from "@/components/notifications/NotificationBridges";
import NotificationBell from "@/components/notifications/NotificationBell";
import { useOwnerDesktop } from "@/hooks/useMediaQuery";
import { lastAppPath } from "@/services/navigation/lastAppPath";
import { C, SHADOW_SM, TY, a, shadowLg, shadowMd, tAll, tColors, PRIMARY_RGB } from "@/components/centerManagement/cmKit";

/*
 * 센터 관리 레이아웃 — /center/register, /profile/places, /profile/places/:placeId/(edit|details)
 *
 * PC(≥1024px): `관리화면 예시/pc_2` 의 SideNavBar 를 그대로 옮긴 좌측 사이드바만 둡니다(사용자 지시로 상단 글로벌 내비 없음).
 *   사이드바 머리 줄에 알림 종(패널은 오른쪽으로 펼침), 탭은 내 센터 관리·1:1 문의(/center/inquiries, 준비 중), 하단은 [+ 센터 등록]·"앱으로 돌아가기"(직전 앱 화면, 없으면 /profile).
 * 모바일: 앱의 480px 기둥. 하단 탭바는 목업이 탭바를 숨기는 화면(_6 등록 위저드·_3 완료, pc_4 고정 저장 바를 쓰는 편집)에서만 숨깁니다.
 *
 * 폭이 바뀌어도 입력값이 남도록 트리 구조를 유지합니다(조건부 자리는 null, Outlet 위치 고정).
 */

const SIDEBAR_W = 256; // tw: w-64

const Shell = styled.div<{ $desktop: boolean }>`
  position: relative;
  width: 100%;
  min-height: 100dvh;
  margin: 0 auto;
  background: ${C.surface};
  color: ${C.onSurface};

  ${({ $desktop, theme }) =>
    $desktop
      ? css`
          max-width: none;
        `
      : css`
          max-width: 480px;

          @media (min-width: 520px) {
            border-left: ${theme.hairline};
            border-right: ${theme.hairline};
          }
        `}
`;

/** tw: hidden md:flex flex-col fixed left-0 top-0 h-screen w-64 bg-surface-container-low shadow-lg shadow-primary/5 py-6 z-40 */
const Side = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 40;
  height: 100vh;
  width: ${SIDEBAR_W}px;
  display: flex;
  flex-direction: column;
  padding: 24px 0;
  background: ${C.surfaceContainerLow};
  box-shadow: ${shadowLg(PRIMARY_RGB, 0.05)};
`;

/** tw: px-6 mb-8 flex items-center gap-3 */
const SideHead = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 24px;
  margin-bottom: 32px;

  .mark {
    /* tw: w-10 h-10 rounded-[12px] bg-primary-container flex items-center justify-center text-on-primary-container */
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    border-radius: 12px;
    background: ${C.primaryContainer};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${C.onPrimaryContainer};
  }

  .titles {
    flex: 1;
    min-width: 0;
  }

  h1 {
    /* tw: font-headline-md text-headline-md text-primary m-0 */
    margin: 0;
    ${TY.headlineMd};
    color: ${C.primary};
    white-space: nowrap;
  }

  p {
    /* tw: font-label-md text-label-md text-on-surface-variant opacity-80 mt-1 */
    margin: 4px 0 0;
    ${TY.labelMd};
    color: ${C.onSurfaceVariant};
    opacity: 0.8;
    white-space: nowrap;
  }
`;

/**
 * '+ 센터 등록' CTA(사용자 결정: 내비 탭 대신 버튼) — 목업 주 버튼 언어 그대로
 * tw(pc_2 등록 신청하기): bg-primary hover:bg-primary/90 text-on-primary rounded-[24px] font-label-md font-bold transition-all shadow-md shadow-primary/20
 * + tw(pc_4 버튼): active:scale-98
 */
const RegisterCta = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 0;
  border: 0;
  border-radius: 24px;
  background: ${C.primary};
  color: ${C.onPrimary};
  ${TY.labelMd};
  font-weight: 700;
  box-shadow: ${shadowMd(PRIMARY_RGB, 0.2)};
  cursor: pointer;
  ${tAll()};

  &:hover {
    background: ${a(C.primary, 0.9)};
  }

  &:active {
    transform: scale(0.98);
  }
`;

/** tw: flex flex-col gap-2 flex-1 mt-4 */
const SideList = styled.ul`
  list-style: none;
  margin: 16px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

/**
 * 활성 tw: flex items-center gap-3 px-4 py-3 mx-2 rounded-xl bg-primary-container text-on-primary-container transition-all duration-300 ease-in-out
 * 비활성 tw: … text-on-surface-variant hover:bg-surface-variant/50 hover:translate-x-1 transition-all duration-300 ease-in-out
 */
const SideLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  margin: 0 8px;
  border-radius: 12px;
  color: ${C.onSurfaceVariant};
  text-decoration: none;
  ${TY.labelMd};
  white-space: nowrap;
  ${tAll(300)};

  &:hover {
    background: ${a(C.surfaceVariant, 0.5)};
    transform: translateX(4px);
  }

  &.active {
    background: ${C.primaryContainer};
    color: ${C.onPrimaryContainer};
    transform: none;
  }
`;

/** 미답변 배지 — 알림 배지와 같은 빨간 원(목업에 없는 배지라 기존 알림 배지 언어를 따름) */
const TabBadge = styled.span`
  margin-left: auto;
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  border-radius: 9999px;
  background: ${C.error};
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/** tw: mt-auto px-4 w-full */
const SideFoot = styled.div`
  margin-top: auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

/**
 * tw(고객 센터): w-full flex items-center justify-center gap-2 bg-surface-variant/30 hover:bg-surface-variant/50
 *  text-on-surface-variant py-3 rounded-[24px] transition-colors font-label-md — "앱으로 돌아가기"도 같은 모양
 */
const FootButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 0;
  border: 0;
  border-radius: 24px;
  background: ${a(C.surfaceVariant, 0.3)};
  color: ${C.onSurfaceVariant};
  ${TY.labelMd};
  cursor: pointer;
  ${tColors()};

  &:hover {
    background: ${a(C.surfaceVariant, 0.5)};
  }

  .material-symbols-outlined {
    /* tw: text-sm */
    font-size: 14px !important;
    width: 14px !important;
    height: 14px !important;
  }
`;

/** tw: flex-1 md:ml-64 p-margin-mobile md:p-margin-desktop min-h-screen */
const Main = styled.main<{ $desktop: boolean; $hideTab: boolean }>`
  ${({ $desktop, $hideTab }) =>
    $desktop
      ? css`
          --content-pad: 64px;
          margin-left: ${SIDEBAR_W}px;
          padding: 64px;
          min-height: 100vh;
        `
      : css`
          --content-pad: 20px;
          padding: 0 0 ${$hideTab ? "0" : "calc(var(--tabbar-space) + 20px)"};
        `}
`;

/** 목업에서 하단 탭바가 없는 모바일 화면(_6 위저드·_3 완료·pc_4 고정 저장 바) */
function hidesTabBar(pathname: string): boolean {
  return (
    pathname.startsWith("/center/register") ||
    /^\/profile\/places\/[^/]+\/(edit|details)/.test(pathname) ||
    // 오너 대화 화면(모바일) — 입력창이 아래에 붙음
    /^\/center\/inquiries\/[^/]+/.test(pathname)
  );
}

export default function CenterManagementLayout() {
  const desktop = useOwnerDesktop();
  // 사이드바 '1:1 문의' 미답변 배지 = /me/center-inbox/summary unansweredCount(전 장소 합계, 계약 C4.2)
  const unanswered = useCenterChatStore((s) => s.inbox?.unansweredCount ?? 0);
  const isMember = useAuthStore((s) => !!s.accessToken && !s.isStaff());
  useEffect(() => {
    if (isMember) void useCenterChatStore.getState().refreshSummary();
  }, [isMember]);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const hideTab = !desktop && hidesTabBar(pathname);

  return (
    <Shell $desktop={desktop} data-layout={desktop ? "desktop" : "mobile"}>
      <MemberNotificationBridge />
      {desktop ? (
        <Side aria-label="센터 관리 메뉴">
          <SideHead>
            <span className="mark">
              <Icon name="admin_panel_settings" filled />
            </span>
            <div className="titles">
              <h1>관리</h1>
              <p>센터 운영</p>
            </div>
            <NotificationBell scope="me" variant="plain" placement="side" />
          </SideHead>
          <SideList>
            <li>
              <SideLink to="/profile/places">
                <Icon name="location_on" />
                내 센터 관리
              </SideLink>
            </li>
            <li>
              <SideLink to="/center/inquiries">
                <Icon name="forum" />
                1:1 문의
                {unanswered > 0 && (
                  <TabBadge aria-label={`미답변 ${unanswered}건`}>{unanswered > 99 ? "99+" : unanswered}</TabBadge>
                )}
              </SideLink>
            </li>
          </SideList>
          <SideFoot>
            {/* 사용자 결정: 하단 묶음 — [+ 센터 등록] → 앱으로 돌아가기 (고객 센터는 1:1 문의 탭과 중복이라 뺌) */}
            <RegisterCta type="button" onClick={() => navigate("/center/register")}>
              <Icon name="add" />
              센터 등록
            </RegisterCta>
            <FootButton type="button" onClick={() => navigate(lastAppPath())}>
              <Icon name="arrow_back" />
              앱으로 돌아가기
            </FootButton>
          </SideFoot>
        </Side>
      ) : null}
      <Main $desktop={desktop} $hideTab={hideTab}>
        <Outlet />
      </Main>
      {desktop || hideTab ? null : <BottomNav />}
    </Shell>
  );
}

export { SIDEBAR_W, SHADOW_SM };
