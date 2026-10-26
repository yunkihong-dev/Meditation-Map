import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";
import logoImg from "@/assets/logo.png";
import Icon from "@/components/common/Icon";
import LoginRequired, { useMemberSession } from "@/components/common/LoginRequired";
import NotificationBell from "@/components/notifications/NotificationBell";
import ViewsChart from "@/components/centerManagement/ViewsChart";
import {
  C,
  EASE,
  SHADOW_SM,
  TY,
  a,
  glassPanel70,
  glassPanel70Pc3,
  hideScrollbar,
  shadowLg,
  softShadow,
  tColors,
  tProp,
  twPulse,
} from "@/components/centerManagement/cmKit";
import { useOwnerDesktop } from "@/hooks/useMediaQuery";
import {
  fetchMyPlaces,
  fetchOwnerPlace,
  fetchPlaceStats,
} from "@/services/ownerPlaces/repositories/ownerPlacesRepository";
import {
  STATS_RANGES,
  STATS_RANGE_LABEL,
  changeRateText,
  type MyPlaceItem,
  type OwnerPlaceView,
  type PlaceStats,
  type StatsRange,
} from "@/services/ownerPlaces/types";
import { formatProgramPeriod } from "@/services/meditation/placeProgramStatus";
import { formatDate, formatRelativeTime, notificationIcon, notificationTarget } from "@/services/notifications/format";
import { useMemberNotificationStore } from "@/stores/notificationStore";
import { useCenterChatStore } from "@/stores/centerChatStore";
import { fetchInboxSummary } from "@/services/centerChat/repositories/centerChatRepository";
import type { InboxSummary } from "@/services/centerChat/types";
import type { AppNotification } from "@/services/notifications/types";

/*
 * 내 센터 관리 대시보드 — /profile/places
 * PC(≥1024px): `관리화면 예시/pc_3/code.html` <main> 이식 / 모바일: `_4/code.html` 이식(하단 탭바는 앱 것을 그대로).
 *
 * 데이터 규칙
 * - 조회수·북마크: GET /me/places/{id}/stats(C6). PC 카드는 range=1M = "최근 30일"(달력상 월 아님).
 *   changeRate 가 null(직전 0·ALL)이면 증감 줄을 숨깁니다
 * - 신규 문의: GET /me/center-inbox/summary?placeId= 의 unansweredCount(채팅 계약 C4.2), 보조 문구는 unreadThreadCount 만.
 *   조회 실패면 '집계 준비 중'. 누르면 /center/inquiries?placeId=&unanswered=1
 * - 상세 분석 리포트·예약 인원: 데이터 없음 → "집계 준비 중"(가짜 숫자 금지)
 */

const PENDING = "집계 준비 중";

/** 데이터 없는 값 자리 */
const Pending = styled.p`
  margin: 6px 0 0;
  ${TY.labelMd};
  font-weight: 600;
  color: ${C.outline};
`;

/** 센터가 여러 개일 때만 — 목업에 없는 선택 줄(pc_3 상태 칩과 같은 모양) */
const PlaceTabs = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

const PlaceTab = styled.button<{ $on: boolean }>`
  max-width: 280px;
  padding: 8px 16px;
  border-radius: 9999px;
  border: 0;
  background: ${({ $on }) => ($on ? a(C.primaryContainer, 0.1) : "transparent")};
  color: ${({ $on }) => ($on ? C.primary : C.onSurfaceVariant)};
  ${TY.labelMd};
  font-weight: ${({ $on }) => ($on ? 700 : 500)};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  ${tColors()};

  &:hover {
    background: ${a(C.primary, 0.05)};
  }
`;

const EmptyBox = styled.div`
  ${glassPanel70Pc3};
  border-radius: 24px;
  padding: 32px;
  text-align: center;
  ${TY.bodyMd};
  color: ${C.onSurfaceVariant};

  .actions {
    margin-top: 16px;
    display: flex;
    gap: 8px;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

// ── PC (pc_3) ─────────────────────────────────────────────────────

/** tw: max-w-[1024px] mx-auto space-y-lg pb-xl */
const PcWrap = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding-bottom: 64px;
`;

/** tw: flex justify-between items-end mb-xl / h1 font-headline-lg text-on-surface mb-2 / p font-body-md text-on-surface-variant */
const PcHead = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 64px;

  h1 {
    margin: 0 0 8px;
    ${TY.headlineLg};
    color: ${C.onSurface};
  }

  p {
    margin: 0;
    ${TY.bodyMd};
    color: ${C.onSurfaceVariant};
  }
`;

/** tw: flex items-center gap-2 bg-primary-container/10 px-4 py-2 rounded-full / 점 w-3 h-3 rounded-full bg-primary animate-pulse / font-label-md text-primary font-bold */
const StatusPill = styled.div<{ $on: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${({ $on }) => ($on ? a(C.primaryContainer, 0.1) : a(C.surfaceVariant, 0.5))};
  padding: 8px 16px;
  border-radius: 9999px;

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 9999px;
    background: ${({ $on }) => ($on ? C.primary : C.outline)};
    ${({ $on }) =>
      $on &&
      css`
        animation: ${twPulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      `}
  }

  span:last-child {
    ${TY.labelMd};
    color: ${({ $on }) => ($on ? C.primary : C.onSurfaceVariant)};
    font-weight: 700;
  }
`;

/** tw: grid grid-cols-1 lg:grid-cols-3 gap-gutter mb-xl */
const PcGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-bottom: 64px;
`;

/** tw: glass-panel rounded-[24px] p-6 flex flex-col h-full lg:col-span-1 */
const ProfileCard = styled.div`
  ${glassPanel70Pc3};
  border-radius: 24px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  height: 100%;

  .photo {
    /* tw: w-full h-48 rounded-xl overflow-hidden mb-4 relative */
    position: relative;
    width: 100%;
    height: 192px;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 16px;
    background: ${C.surfaceVariant};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${C.outline};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .tag {
      /* tw: absolute top-2 right-2 bg-surface/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-primary */
      position: absolute;
      top: 8px;
      right: 8px;
      background: ${a(C.surface, 0.8)};
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      padding: 4px 8px;
      border-radius: 4px;
      ${TY.xs};
      font-weight: 700;
      color: ${C.primary};
    }
  }

  h2 {
    /* tw: font-headline-md text-on-surface mb-1 */
    margin: 0 0 4px;
    ${TY.headlineMd};
    color: ${C.onSurface};
    word-break: keep-all;
    overflow-wrap: anywhere;
  }

  .addr {
    /* tw: text-on-surface-variant text-sm flex items-center gap-1 mb-4 */
    margin: 0 0 16px;
    display: flex;
    align-items: center;
    gap: 4px;
    ${TY.sm};
    color: ${C.onSurfaceVariant};
  }

  .actions {
    /* tw: mt-auto flex flex-col gap-2 */
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

/**
 * 주 tw: w-full py-3 bg-primary text-on-primary rounded-xl font-label-md hover:bg-primary-fixed-variant transition-colors shadow-sm
 * 보조 tw: w-full py-3 bg-secondary-container text-on-secondary-container rounded-xl font-label-md hover:bg-secondary-fixed-dim transition-colors
 */
const CardBtn = styled.button<{ $primary?: boolean }>`
  width: 100%;
  padding: 12px 0;
  border: 0;
  border-radius: 12px;
  ${TY.labelMd};
  cursor: pointer;
  ${tColors()};
  ${({ $primary }) =>
    $primary
      ? css`
          background: ${C.primary};
          color: ${C.onPrimary};
          box-shadow: ${SHADOW_SM};

          &:hover {
            background: ${C.onPrimaryFixedVariant};
          }
        `
      : css`
          background: ${C.secondaryContainer};
          color: ${C.onSecondaryContainer};

          &:hover {
            background: ${C.secondaryFixedDim};
          }
        `}
`;

/** tw: lg:col-span-2 grid grid-cols-2 gap-gutter h-full */
const StatGrid = styled.div`
  grid-column: span 2 / span 2;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  height: 100%;
`;

type Tone = "primary" | "tertiary" | "error" | "solid";

/**
 * tw: glass-panel rounded-[24px] p-6 flex flex-col justify-center relative overflow-hidden group hover:shadow-lg transition-shadow
 * 장식 원 tw: absolute -right-4 -top-4 w-24 h-24 bg-(색)/(투명도) rounded-full group-hover:scale-110 transition-transform
 */
const Stat = styled.div<{ $tone: Tone }>`

  /* 문의함으로 가는 글자 버튼 — pc_3 '리포트 보기' 효과(hover:translate-x-1 transition-transform) */
  .go {
    border: 0;
    padding: 0;
    background: none;
    color: inherit;
    font: inherit;
    text-align: left;
    cursor: pointer;
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      transform: translateX(4px);
    }
  }
  ${glassPanel70Pc3};
  border-radius: 24px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  ${tProp("box-shadow")};

  &:hover {
    box-shadow: ${shadowLg()};
  }

  .deco {
    position: absolute;
    right: -16px;
    top: -16px;
    width: 96px;
    height: 96px;
    border-radius: 9999px;
    ${tProp("transform")};
    background: ${({ $tone }) =>
      $tone === "primary"
        ? a(C.primary, 0.05)
        : $tone === "tertiary"
          ? a(C.tertiaryContainer, 0.1)
          : $tone === "error"
            ? a(C.errorContainer, 0.2)
            : "rgba(255, 255, 255, 0.1)"};
  }

  &:hover .deco {
    transform: scale(1.1);
  }

  .ic {
    /* tw: text-3xl mb-2 */
    margin-bottom: 8px;
    color: ${({ $tone }) =>
      $tone === "primary" ? C.primary : $tone === "tertiary" ? C.tertiary : $tone === "error" ? C.error : "inherit"};
  }

  h3 {
    /* tw: text-on-surface-variant text-sm mb-1 */
    margin: 0 0 4px;
    ${TY.sm};
    font-weight: 400;
    color: ${({ $tone }) => ($tone === "solid" ? a(C.onPrimaryContainer, 0.8) : C.onSurfaceVariant)};
  }

  .val {
    /* tw: font-display-lg text-display-lg text-on-surface */
    margin: 0;
    ${TY.displayLg};
    color: ${C.onSurface};
    font-variant-numeric: tabular-nums;
  }

  .sub {
    /* tw: text-xs mt-2 flex items-center gap-1 */
    margin: 8px 0 0;
    display: flex;
    align-items: center;
    gap: 4px;
    ${TY.xs};
  }

  ${({ $tone }) =>
    $tone === "solid" &&
    css`
      /* tw: bg-primary-container text-on-primary-container */
      background: ${C.primaryContainer};
      color: ${C.onPrimaryContainer};

      .desc {
        /* tw: font-body-md mt-2 mb-4 */
        margin: 8px 0 16px;
        ${TY.bodyMd};
      }

      ${Pending} {
        color: ${a(C.onPrimaryContainer, 0.8)};
      }
    `}
`;

/** tw: glass-panel rounded-[24px] p-8 */
const Activity = styled.div`
  ${glassPanel70Pc3};
  border-radius: 24px;
  padding: 32px;

  .head {
    /* tw: flex justify-between items-center mb-6 */
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;

    h2 {
      margin: 0;
      ${TY.headlineMd};
      color: ${C.onSurface};
    }

    button {
      /* tw: text-primary text-sm font-bold hover:underline */
      border: 0;
      background: none;
      padding: 0;
      color: ${C.primary};
      ${TY.sm};
      font-weight: 700;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .list > * + * {
    /* tw: space-y-4 */
    margin-top: 16px;
  }
`;

/**
 * tw: flex items-start gap-4 p-4 rounded-xl hover:bg-surface-variant/30 transition-colors
 * 공지형(광고) tw: … bg-surface-container-low border border-outline-variant/30
 */
const ActivityItem = styled.button<{ $notice: boolean }>`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid ${({ $notice }) => ($notice ? a(C.outlineVariant, 0.3) : "transparent")};
  background: ${({ $notice }) => ($notice ? C.surfaceContainerLow : "transparent")};
  text-align: left;
  cursor: pointer;
  ${tColors()};

  &:hover {
    background: ${({ $notice }) => ($notice ? C.surfaceContainerLow : a(C.surfaceVariant, 0.3))};
  }

  .ic {
    /* tw: w-10 h-10 rounded-full bg-primary-container/20 text-primary (공지형: bg-surface-variant text-on-surface-variant) */
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ $notice }) => ($notice ? C.surfaceVariant : a(C.primaryContainer, 0.2))};
    color: ${({ $notice }) => ($notice ? C.onSurfaceVariant : C.primary)};
  }

  .body {
    flex: 1;
    min-width: 0;
  }

  h4 {
    margin: 0 0 4px;
    ${TY.labelMd};
    color: ${C.onSurface};
  }

  p {
    margin: 0;
    ${TY.sm};
    color: ${C.onSurfaceVariant};
    overflow-wrap: anywhere;
  }

  time {
    flex-shrink: 0;
    ${TY.xs};
    color: ${C.outline};
    white-space: nowrap;
  }
`;

// ── 모바일 (_4) ───────────────────────────────────────────────────

/** _4 body: text-on-background / main pt-24 px-margin-mobile pb-12 flex flex-col gap-lg */
const MPage = styled.div`
  color: ${C.onBackground};
`;

/** tw: bg-surface/70 backdrop-blur-xl flex justify-between items-center w-full px-margin-mobile h-16 fixed top-0 z-50 shadow-sm shadow-primary/5 */
const MHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  height: 64px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${a(C.surface, 0.7)};
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  box-shadow: 0 1px 2px 0 rgba(83, 42, 168, 0.05);

  .logo {
    height: 32px;
    width: auto;
  }
`;

/** tw: text-primary hover:opacity-80 transition-opacity active:scale-95 flex items-center justify-center p-2 rounded-full */
const MIconBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border: 0;
  border-radius: 9999px;
  background: transparent;
  color: ${C.primary};
  cursor: pointer;
  transition: opacity 150ms ${EASE}, transform 150ms ${EASE};

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const MMain = styled.main`
  padding: 32px 20px 48px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

/** tw: flex flex-col gap-xs / h2 font-headline-lg-mobile text-on-surface / p font-body-md text-on-surface-variant */
const MWelcome = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h2 {
    margin: 0;
    ${TY.headlineLgMobile};
    color: ${C.onSurface};
    word-break: keep-all;
    overflow-wrap: anywhere;
  }

  p {
    margin: 0;
    ${TY.bodyMd};
    color: ${C.onSurfaceVariant};
  }
`;

/** tw: grid grid-cols-2 gap-gutter */
const MMetrics = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
`;

/** tw: glass-panel soft-shadow rounded-[24px] p-md border border-primary/5 flex flex-col justify-between */
const MCard = styled.div<{ $wide?: boolean }>`

  /* 문의함으로 가는 글자 버튼 — pc_3 '리포트 보기' 효과(hover:translate-x-1 transition-transform) */
  .go {
    border: 0;
    padding: 0;
    background: none;
    color: inherit;
    font: inherit;
    text-align: left;
    cursor: pointer;
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      transform: translateX(4px);
    }
  }
  ${glassPanel70};
  ${softShadow};
  border-radius: 24px;
  padding: 24px;
  border: 1px solid ${a(C.primary, 0.05)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${({ $wide }) =>
    $wide &&
    css`
      grid-column: span 2 / span 2;
      position: relative;
      overflow: hidden;
    `}

  .blob {
    /* tw: absolute -right-8 -top-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl */
    position: absolute;
    right: -32px;
    top: -32px;
    width: 128px;
    height: 128px;
    border-radius: 9999px;
    background: ${a(C.primary, 0.1)};
    filter: blur(40px);
  }

  .top {
    /* tw: flex justify-between items-start mb-2|mb-3 z-10 */
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 12px;

    span:first-child {
      ${TY.labelMd};
      color: ${C.secondary};
    }

    .material-symbols-outlined {
      color: ${a(C.primary, 0.7)};
    }
  }

  .big {
    /* tw: font-display-lg text-display-lg text-primary leading-none */
    ${TY.displayLg};
    line-height: 1;
    color: ${C.primary};
    font-variant-numeric: tabular-nums;
  }

  .num {
    /* tw: font-headline-md text-headline-md text-on-surface */
    ${TY.headlineMd};
    color: ${C.onSurface};
    font-variant-numeric: tabular-nums;
  }
`;

/** tw: z-10 flex flex-col gap-md */
const MBody = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 24px;

  .row {
    /* tw: flex items-end justify-between */
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  .delta {
    /* tw: flex items-center gap-1 mt-1 / text-green-600 */
    display: flex;
    align-items: center;
    gap: 4px;
    margin-top: 4px;
    ${TY.labelMd};
  }

  .minmax {
    /* tw: flex flex-col items-end text-right / text-[10px] text-secondary uppercase tracking-wider / font-label-md text-on-surface */
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;

    small {
      font-size: 10px;
      color: ${C.secondary};
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    strong {
      ${TY.labelMd};
      color: ${C.onSurface};
      font-variant-numeric: tabular-nums;
    }
  }
`;

/** tw: flex justify-between items-center pt-2 border-t border-primary/5 / 탭 px-2 py-1 rounded-lg text-[10px] font-bold (활성 bg-primary text-on-primary, 비활성 hover:bg-primary/5 text-secondary) */
const MTabs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
  border-top: 1px solid ${a(C.primary, 0.05)};

  .tabs {
    display: flex;
    gap: 8px;
  }

  button {
    padding: 4px 8px;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: ${C.secondary};
    font-size: 10px;
    font-weight: 700;
    cursor: pointer;

    &:hover {
      background: ${a(C.primary, 0.05)};
    }

    &[aria-selected="true"] {
      background: ${C.primary};
      color: ${C.onPrimary};
    }
  }

  .asof {
    font-size: 10px;
    color: ${C.secondary};
  }
`;

/** tw: flex gap-gutter overflow-x-auto hide-scrollbar pb-2 pt-2 -mx-margin-mobile px-margin-mobile */
const MActions = styled.section`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  ${hideScrollbar};
  padding: 8px 20px;
  margin: 0 -20px;
`;

/**
 * 주 tw: flex-none bg-primary text-on-primary rounded-xl px-sm py-3 flex items-center gap-2 shadow-sm hover:opacity-90 transition-opacity
 * 보조 tw: flex-none bg-secondary-container text-on-secondary-container rounded-xl px-sm py-3 … hover:bg-tertiary-fixed transition-colors
 */
const MAction = styled.button<{ $primary?: boolean }>`
  flex: none;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border: 0;
  border-radius: 12px;
  ${TY.labelMd};
  white-space: nowrap;
  cursor: pointer;
  ${({ $primary }) =>
    $primary
      ? css`
          background: ${C.primary};
          color: ${C.onPrimary};
          box-shadow: ${SHADOW_SM};
          ${tProp("opacity")};

          &:hover {
            opacity: 0.9;
          }
        `
      : css`
          background: ${C.secondaryContainer};
          color: ${C.onSecondaryContainer};
          ${tColors()};

          &:hover {
            background: ${C.tertiaryFixed};
          }
        `}
`;

/** tw: flex flex-col gap-md / 머리 flex justify-between items-center / h3 font-headline-md / 버튼 text-primary font-label-md */
const MSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      margin: 0;
      ${TY.headlineMd};
      color: ${C.onSurface};
    }

    button {
      border: 0;
      background: none;
      color: ${C.primary};
      ${TY.labelMd};
      cursor: pointer;
    }
  }

  .list {
    /* tw: flex flex-col gap-sm */
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

/** tw: glass-panel soft-shadow rounded-[24px] p-sm border border-primary/5 flex gap-sm items-center (마감: opacity-80) */
const MProgram = styled.div<{ $past: boolean }>`
  ${glassPanel70};
  ${softShadow};
  border-radius: 24px;
  padding: 16px;
  border: 1px solid ${a(C.primary, 0.05)};
  display: flex;
  gap: 16px;
  align-items: center;
  opacity: ${({ $past }) => ($past ? 0.8 : 1)};

  .thumb {
    /* tw: w-16 h-16 rounded-xl bg-surface-variant overflow-hidden flex-shrink-0 relative */
    flex-shrink: 0;
    width: 64px;
    height: 64px;
    border-radius: 12px;
    background: ${C.surfaceVariant};
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .info {
    flex-grow: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .t {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 8px;

    h4 {
      margin: 0;
      ${TY.labelMd};
      color: ${C.onSurface};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .when {
    /* tw: font-body-md text-[13px] text-on-surface-variant mt-1 line-clamp-1 */
    margin: 4px 0 0;
    font-size: 13px;
    line-height: 1.6;
    color: ${C.onSurfaceVariant};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

/** 진행중 tw: px-2 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded-full text-[10px] font-bold / 마감 tw: bg-surface-variant text-on-surface-variant */
const ProgramChip = styled.span<{ $on: boolean }>`
  flex-shrink: 0;
  padding: 4px 8px;
  border-radius: 9999px;
  font-size: 10px;
  font-weight: 700;
  white-space: nowrap;
  background: ${({ $on }) => ($on ? C.tertiaryFixed : C.surfaceVariant)};
  color: ${({ $on }) => ($on ? C.onTertiaryFixed : C.onSurfaceVariant)};
`;

/** 데이터가 없는 통계 카드(신규 문의·리포트) — 숫자 대신 "집계 준비 중" */
function StatValue() {
  return <Pending data-testid="stat-pending">{PENDING}</Pending>;
}

const fmt = (n: number) => n.toLocaleString("ko-KR");

/** 기간 시계열의 최고/최저(일·월 단위). 점이 2개 미만이면 null */
function seriesMinMax(stats: PlaceStats): { label: string; text: string } | null {
  if (stats.series.length < 2) return null;
  const vs = stats.series.map((s) => s.views);
  return {
    label: stats.granularity === "MONTH" ? "월별 최고/최저" : "일별 최고/최저",
    text: `${fmt(Math.max(...vs))} / ${fmt(Math.min(...vs))}`,
  };
}

export default function MyPlacesPage() {
  const navigate = useNavigate();
  const desktop = useOwnerDesktop();
  const [params, setParams] = useSearchParams();
  const { authReady, isMember } = useMemberSession();
  const [items, setItems] = useState<MyPlaceItem[] | null>(null);
  const [detail, setDetail] = useState<OwnerPlaceView | null>(null);
  const [error, setError] = useState<string | null>(null);
  // PC 카드는 최근 30일(1M) 고정, 모바일 카드는 탭으로 범위를 고릅니다(_4 기본 1D)
  const [range, setRange] = useState<StatsRange>("1D");
  const statsRange: StatsRange = desktop ? "1M" : range;
  const [stats, setStats] = useState<PlaceStats | null>(null);
  const [statsError, setStatsError] = useState(false);
  const notifications = useMemberNotificationStore((s) => s.items);

  useEffect(() => {
    if (!isMember) return;
    let cancelled = false;
    fetchMyPlaces()
      .then((list) => {
        if (!cancelled) setItems(list);
      })
      .catch(() => {
        if (!cancelled) setError("내 장소를 불러오지 못했어요.");
      });
    void useMemberNotificationStore.getState().loadFirstPage();
    return () => {
      cancelled = true;
    };
  }, [isMember]);

  const selectedId = useMemo(() => {
    const q = params.get("place");
    if (items?.some((p) => p.placeId === q)) return q;
    return items?.[0]?.placeId ?? null;
  }, [items, params]);
  const selected = items?.find((p) => p.placeId === selectedId) ?? null;

  useEffect(() => {
    if (!selectedId) return;
    let cancelled = false;
    setDetail(null);
    fetchOwnerPlace(selectedId)
      .then((v) => {
        if (!cancelled) setDetail(v);
      })
      .catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, [selectedId]);

  useEffect(() => {
    if (!selectedId) return;
    let cancelled = false;
    setStats(null);
    setStatsError(false);
    fetchPlaceStats(selectedId, statsRange)
      .then((v) => {
        if (!cancelled) setStats(v);
      })
      .catch(() => {
        if (!cancelled) setStatsError(true);
      });
    return () => {
      cancelled = true;
    };
  }, [selectedId, statsRange]);

  // 신규 문의 = 선택 장소의 미답변 대화 수(채팅 계약 C4.2). 사이드바 배지(전 장소 합계)와 달라 라벨에 '이 센터'를 적는다(QA R2-3)
  const [inbox, setInbox] = useState<InboxSummary | null>(null);
  useEffect(() => {
    if (!selectedId) return;
    let cancelled = false;
    setInbox(null);
    fetchInboxSummary(selectedId)
      .then((v) => {
        if (!cancelled) setInbox(v);
      })
      .catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, [selectedId]);
  // 채팅 SSE·읽음으로 사이드바 배지(summary)가 갱신될 때마다 이 센터 값도 다시 받는다 — 카드는 그대로 둔 채 값만 바꾼다
  const inboxTick = useCenterChatStore((s) => s.inboxTick);
  useEffect(() => {
    if (!selectedId || inboxTick === 0) return;
    let cancelled = false;
    fetchInboxSummary(selectedId)
      .then((v) => {
        if (!cancelled) setInbox(v);
      })
      .catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, [selectedId, inboxTick]);
  const inquiriesPath = `/center/inquiries?${new URLSearchParams({ placeId: selectedId ?? "", unanswered: "1" }).toString()}`;

  const statsFallback = statsError ? <Pending>집계를 불러오지 못했어요</Pending> : <Pending>불러오는 중…</Pending>;

  const detailsPath = selectedId ? `/profile/places/${encodeURIComponent(selectedId)}/details` : "/profile/places";
  const editPath = selectedId ? `/profile/places/${encodeURIComponent(selectedId)}/edit` : "/profile/places";
  const cover = detail?.data.photos?.[0] || detail?.data.thumbnailUrl || selected?.thumbnailUrl || null;
  const programs = detail?.data.programs ?? [];
  const recent = notifications.slice(0, 5);
  const name = detail?.data.name || selected?.name || "";
  const changeText = stats ? changeRateText(stats.range, stats.views.changeRate) : null;
  const rate = stats?.views.changeRate ?? 0;

  const openNotification = (n: AppNotification) => {
    void useMemberNotificationStore.getState().markRead(n.id);
    navigate(notificationTarget(n, "me"));
  };

  const placeTabs =
    items && items.length > 1 ? (
      <PlaceTabs role="tablist" aria-label="내 센터 선택">
        {items.map((p) => (
          <PlaceTab
            key={p.placeId}
            type="button"
            role="tab"
            aria-selected={p.placeId === selectedId}
            title={p.name}
            $on={p.placeId === selectedId}
            onClick={() => setParams({ place: p.placeId }, { replace: true })}
          >
            {p.name || "(이름 없음)"}
          </PlaceTab>
        ))}
      </PlaceTabs>
    ) : null;

  const emptyState = (
    <EmptyBox>
      관리 중인 센터가 없어요.
      <br />
      프로필 &gt; 센터 등록에서 내 센터를 찾아 소유권을 요청할 수 있어요.
      <div className="actions">
        <CardBtn type="button" $primary style={{ width: "auto", padding: "12px 24px" }} onClick={() => navigate("/center/register")}>
          센터 등록으로 가기
        </CardBtn>
        <CardBtn type="button" style={{ width: "auto", padding: "12px 24px" }} onClick={() => navigate("/profile/place-claims")}>
          소유 신청 내역
        </CardBtn>
      </div>
    </EmptyBox>
  );

  if (desktop) {
    return (
      <PcWrap data-testid="my-centers" data-layout="desktop">
        <PcHead>
          <div>
            <h1>내 센터 관리</h1>
            <p>현재 운영 중인 센터의 현황과 통계를 확인하세요.</p>
          </div>
          {selected && (
            <StatusPill $on={!selected.hidden}>
              <span className="dot" aria-hidden />
              <span>{selected.hidden ? "비공개" : "운영 중"}</span>
            </StatusPill>
          )}
        </PcHead>
        {!authReady ? null : !isMember ? (
          <LoginRequired />
        ) : (
          <>
            {error && <Pending role="alert">{error}</Pending>}
            {items && items.length === 0 && emptyState}
            {placeTabs}
            {selected && (
              <PcGrid>
                <ProfileCard>
                  <div className="photo">
                    {cover ? <img src={cover} alt="Center Photo" /> : <Icon name="image" size={36} />}
                    {cover && <span className="tag">대표 사진</span>}
                  </div>
                  <h2>{name}</h2>
                  <p className="addr">
                    <Icon name="location_on" size={14} />
                    {detail?.data.address || "주소 정보 없음"}
                    {detail?.data.addressDetail ? ` ${detail.data.addressDetail}` : ""}
                  </p>
                  <div className="actions">
                    <CardBtn type="button" $primary onClick={() => navigate(editPath)}>
                      센터 정보 수정
                    </CardBtn>
                    <CardBtn type="button" onClick={() => navigate(`${editPath}#owner-photos`)}>
                      사진 관리
                    </CardBtn>
                    <CardBtn type="button" onClick={() => navigate(detailsPath)}>
                      프로그램·상세 정보
                    </CardBtn>
                  </div>
                </ProfileCard>
                <StatGrid>
                  <Stat $tone="primary">
                    <span className="deco" aria-hidden />
                    <span className="ic">
                      <Icon name="visibility" size={30} />
                    </span>
                    <h3>최근 30일 조회수</h3>
                    {stats ? (
                      <>
                        <p className="val" data-testid="views-total">
                          {fmt(stats.views.total)}
                        </p>
                        {changeText && (
                          <p className="sub" data-testid="change-rate" style={{ color: rate < 0 ? C.error : C.primary }}>
                            <Icon name={rate < 0 ? "trending_down" : "trending_up"} size={16} />
                            {changeText}
                          </p>
                        )}
                      </>
                    ) : (
                      statsFallback
                    )}
                  </Stat>
                  <Stat $tone="tertiary">
                    <span className="deco" aria-hidden />
                    <span className="ic">
                      <Icon name="bookmark" size={30} />
                    </span>
                    <h3>총 북마크</h3>
                    {stats ? (
                      <>
                        <p className="val" data-testid="bookmarks-current">
                          {fmt(stats.bookmarks.current)}
                        </p>
                        <p className="sub" style={{ color: C.onSurfaceVariant }}>
                          최근 30일 +{fmt(stats.bookmarks.added)} / −{fmt(stats.bookmarks.removed)}
                        </p>
                      </>
                    ) : (
                      statsFallback
                    )}
                  </Stat>
                  <Stat $tone="error">
                    <span className="deco" aria-hidden />
                    <span className="ic">
                      <Icon name="chat_bubble" size={30} />
                    </span>
                    <h3>이 센터 신규 문의</h3>
                    {inbox ? (
                      <>
                        <p className="val" data-testid="inbox-unanswered">
                          {fmt(inbox.unansweredCount)}
                        </p>
                        <p className="sub" style={{ color: C.error, fontWeight: 700 }}>
                          <button type="button" className="go" onClick={() => navigate(inquiriesPath)}>
                            안 읽은 대화 {fmt(inbox.unreadThreadCount)} · 문의함 열기
                          </button>
                        </p>
                      </>
                    ) : (
                      <StatValue />
                    )}
                  </Stat>
                  <Stat $tone="solid">
                    <span className="deco" aria-hidden />
                    <span className="ic">
                      <Icon name="analytics" size={30} />
                    </span>
                    <h3>상세 분석</h3>
                    <p className="desc">방문자 통계 및 예약 전환율 리포트</p>
                    <StatValue />
                  </Stat>
                </StatGrid>
              </PcGrid>
            )}
            {selected && (
              <Activity>
                <div className="head">
                  <h2>최근 활동 및 알림</h2>
                  <button type="button" onClick={() => navigate("/notifications")}>
                    모두 보기
                  </button>
                </div>
                <div className="list">
                  {recent.length === 0 ? (
                    <Pending>아직 받은 알림이 없어요.</Pending>
                  ) : (
                    recent.map((n) => (
                      <ActivityItem key={n.id} type="button" $notice={n.type === "AD"} onClick={() => openNotification(n)}>
                        <span className="ic">
                          <Icon name={notificationIcon(n.type)} />
                        </span>
                        <span className="body">
                          <h4>{n.title}</h4>
                          <p>{n.body}</p>
                        </span>
                        <time dateTime={n.createdAt}>{formatRelativeTime(n.createdAt)}</time>
                      </ActivityItem>
                    ))
                  )}
                </div>
              </Activity>
            )}
          </>
        )}
      </PcWrap>
    );
  }

  const minmax = stats ? seriesMinMax(stats) : null;
  const delta = stats && stats.views.previousTotal != null ? stats.views.total - stats.views.previousTotal : null;

  return (
    <MPage data-testid="my-centers" data-layout="mobile">
      <MHeader>
        <MIconBtn type="button" aria-label="마이로" onClick={() => navigate("/profile")}>
          <Icon name="self_care" />
        </MIconBtn>
        <img className="logo" src={logoImg} alt="Wellit" />
        <NotificationBell scope="me" variant="m4" />
      </MHeader>
      <MMain>
        {!authReady ? null : !isMember ? (
          <LoginRequired />
        ) : (
          <>
            {error && <Pending role="alert">{error}</Pending>}
            {items && items.length === 0 && emptyState}
            {placeTabs}
            {selected && (
              <>
                <MWelcome>
                  <h2>{name} 관리</h2>
                  <p>이번 달도 평온한 공간을 위해 노력해주셔서 감사합니다.</p>
                </MWelcome>
                <MMetrics>
                  <MCard $wide>
                    <span className="blob" aria-hidden />
                    <div className="top" style={{ marginBottom: 8 }}>
                      <span>{STATS_RANGE_LABEL[range]}</span>
                      <Icon name="monitoring" />
                    </div>
                    <MBody>
                      {stats ? (
                        <>
                          <div className="row">
                            <div>
                              <div className="big" data-testid="views-total">
                                {fmt(stats.views.total)}
                              </div>
                              {changeText && delta != null && (
                                <div
                                  className="delta"
                                  data-testid="change-rate"
                                  style={{ color: rate < 0 ? C.error : C.green600 }}
                                  aria-label={changeText}
                                >
                                  <Icon name={rate < 0 ? "arrow_drop_down" : "arrow_drop_up"} filled size={14} />
                                  <span>
                                    {delta >= 0 ? "+" : "−"}
                                    {fmt(Math.abs(delta))} ({Math.abs(rate).toFixed(1)}%)
                                  </span>
                                </div>
                              )}
                            </div>
                            {minmax && (
                              <div className="minmax">
                                <small>{minmax.label}</small>
                                <strong>{minmax.text}</strong>
                              </div>
                            )}
                          </div>
                          <ViewsChart series={stats.series} label={`${STATS_RANGE_LABEL[range]} 추이`} />
                        </>
                      ) : (
                        statsFallback
                      )}
                      <MTabs>
                        <div className="tabs" role="tablist" aria-label="조회 기간">
                          {STATS_RANGES.map((r) => (
                            <button key={r} type="button" role="tab" aria-selected={r === range} onClick={() => setRange(r)}>
                              {r}
                            </button>
                          ))}
                        </div>
                        {stats && <span className="asof">{formatDate(`${stats.to}T00:00:00+09:00`)} 기준</span>}
                      </MTabs>
                    </MBody>
                  </MCard>
                  <MCard>
                    <div className="top">
                      <span>저장 (북마크)</span>
                      <Icon name="bookmark" />
                    </div>
                    {stats ? (
                      <div className="num" data-testid="bookmarks-current">
                        {fmt(stats.bookmarks.current)}
                      </div>
                    ) : (
                      statsFallback
                    )}
                  </MCard>
                  <MCard>
                    <div className="top">
                      <span>이 센터 신규 문의</span>
                      <Icon name="mail" />
                    </div>
                    {inbox ? (
                      <button type="button" className="go" onClick={() => navigate(inquiriesPath)} aria-label="미답변 문의 보기">
                        <span style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                          <span className="num" data-testid="inbox-unanswered">
                            {fmt(inbox.unansweredCount)}
                          </span>
                          {inbox.unansweredCount > 0 && <span style={{ fontSize: 14, fontWeight: 500, color: C.error }}>답변필요</span>}
                        </span>
                      </button>
                    ) : (
                      <StatValue />
                    )}
                  </MCard>
                </MMetrics>
                <MActions aria-label="빠른 작업">
                  <MAction type="button" $primary onClick={() => navigate(editPath)}>
                    <Icon name="edit_square" />
                    센터 정보 수정
                  </MAction>
                  <MAction type="button" onClick={() => navigate(`${detailsPath}#owner-programs`)}>
                    <Icon name="add_circle" />
                    프로그램 추가
                  </MAction>
                  <MAction type="button" onClick={() => navigate(`${editPath}#owner-photos`)}>
                    <Icon name="photo_library" />
                    사진 관리
                  </MAction>
                </MActions>
                <MSection>
                  <div className="head">
                    <h3>운영 중인 프로그램</h3>
                    <button type="button" onClick={() => navigate(`${detailsPath}#owner-programs`)}>
                      전체보기
                    </button>
                  </div>
                  <div className="list">
                    {detail && programs.length === 0 && <Pending>등록된 프로그램이 없어요.</Pending>}
                    {programs.slice(0, 5).map((p) => (
                      <MProgram key={p.id} $past={p.status === "past"}>
                        <span className="thumb">{p.imageUrl ? <img src={p.imageUrl} alt="" /> : null}</span>
                        <span className="info">
                          <span className="t">
                            <h4>{p.title || "(제목 없음)"}</h4>
                            <ProgramChip $on={p.status !== "past"}>{p.status === "past" ? "종료" : "진행중"}</ProgramChip>
                          </span>
                          <p className="when">
                            {formatProgramPeriod(p.startDate, p.endDate) ?? (p.kind === "event" ? "행사" : "상시 프로그램")}
                          </p>
                        </span>
                      </MProgram>
                    ))}
                  </div>
                </MSection>
              </>
            )}
          </>
        )}
      </MMain>
    </MPage>
  );
}
