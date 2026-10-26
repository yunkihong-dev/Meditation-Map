/**
 * 센터 관리 화면 — `관리화면 예시/*.code.html` 의 Tailwind 설정·커스텀 <style> 을 그대로 옮긴 토큰과 조각.
 *
 * 옮길 때 규칙
 * - 목업 tailwind.config 가 borderRadius 를 덮어씁니다: DEFAULT 0.25rem(4px), lg 0.5rem(8px), **xl 0.75rem(12px)**, full.
 *   `rounded-xl` = 12px, 임의값 `rounded-[24px]`·`[16px]`·`[12px]` 는 그 값 그대로입니다.
 * - 목업은 1rem = 16px 기준입니다. 이 앱은 html font-size 10px 이라 rem 대신 px 로 적습니다.
 * - Tailwind 기본 전환: `transition-all|colors|opacity|shadow|transform` = 150ms cubic-bezier(0.4,0,0.2,1),
 *   duration-200/300/500 은 그 값, ease-in-out = cubic-bezier(0.4,0,0.2,1), ease-out = cubic-bezier(0,0,0.2,1).
 * - 각 조각 위 주석의 `tw:` 는 목업 원본 클래스입니다(보고서 체크리스트의 대응 근거).
 */
import { css, keyframes } from "styled-components";

// ── 색(목업 tailwind.config.colors — 기존 theme 과 같은 값) ─────────────────
export const C = {
  primary: "#532aa8",
  onPrimary: "#ffffff",
  primaryContainer: "#6b46c1",
  onPrimaryContainer: "#e1d2ff",
  primaryFixed: "#e9ddff",
  primaryFixedDim: "#d0bcff",
  onPrimaryFixedVariant: "#522aa7",
  secondary: "#665978",
  secondaryContainer: "#ead9fe",
  onSecondaryContainer: "#6a5d7c",
  secondaryFixed: "#ecdcff",
  secondaryFixedDim: "#d0c0e4",
  onSecondaryFixed: "#211631",
  tertiary: "#552f9c",
  tertiaryContainer: "#6e49b6",
  tertiaryFixed: "#eaddff",
  onTertiaryFixed: "#25005a",
  surface: "#f7fafc",
  surfaceContainerLowest: "#ffffff",
  surfaceContainerLow: "#f1f4f6",
  surfaceContainer: "#ebeef0",
  surfaceContainerHigh: "#e5e9eb",
  surfaceContainerHighest: "#e0e3e5",
  surfaceVariant: "#e0e3e5",
  onSurface: "#181c1e",
  onSurfaceVariant: "#494453",
  onBackground: "#181c1e",
  outline: "#7a7484",
  outlineVariant: "#cbc3d5",
  error: "#ba1a1a",
  onError: "#ffffff",
  errorContainer: "#ffdad6",
  green600: "#16a34a",
} as const;

/** `#rrggbb` + 알파 → rgba() — Tailwind `/50` 같은 불투명도 수식어 */
export function a(hex: string, alpha: number): string {
  const n = Number.parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
}

// ── 전환·그림자(Tailwind 기본값) ──────────────────────────────────────
export const EASE = "cubic-bezier(0.4, 0, 0.2, 1)";
export const EASE_OUT = "cubic-bezier(0, 0, 0.2, 1)";
export const T_COLORS = "color, background-color, border-color, text-decoration-color, fill, stroke";
export const tAll = (ms = 150, ease = EASE) => `transition: all ${ms}ms ${ease};`;
export const tColors = (ms = 150, ease = EASE) => `transition-property: ${T_COLORS}; transition-duration: ${ms}ms; transition-timing-function: ${ease};`;
export const tProp = (prop: string, ms = 150, ease = EASE) =>
  `transition-property: ${prop}; transition-duration: ${ms}ms; transition-timing-function: ${ease};`;

export const SHADOW_SM = "0 1px 2px 0 rgba(0, 0, 0, 0.05)";
export const shadowMd = (rgb = "0, 0, 0", alpha = 0.1) =>
  `0 4px 6px -1px rgba(${rgb}, ${alpha}), 0 2px 4px -2px rgba(${rgb}, ${alpha})`;
export const shadowLg = (rgb = "0, 0, 0", alpha = 0.1) =>
  `0 10px 15px -3px rgba(${rgb}, ${alpha}), 0 4px 6px -4px rgba(${rgb}, ${alpha})`;
export const PRIMARY_RGB = "83, 42, 168";

// ── 타이포(목업 fontSize) ─────────────────────────────────────────────
export const TY = {
  displayLg: css`
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    font-weight: 700;
  `,
  headlineLg: css`
    font-size: 32px;
    line-height: 1.3;
    letter-spacing: -0.01em;
    font-weight: 600;
  `,
  headlineLgMobile: css`
    font-size: 28px;
    line-height: 1.3;
    font-weight: 600;
  `,
  headlineMd: css`
    font-size: 24px;
    line-height: 1.4;
    font-weight: 600;
  `,
  bodyLg: css`
    font-size: 18px;
    line-height: 1.6;
    font-weight: 400;
  `,
  bodyMd: css`
    font-size: 16px;
    line-height: 1.6;
    font-weight: 400;
  `,
  labelMd: css`
    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 0.02em;
    font-weight: 500;
  `,
  /** tw: text-sm */
  sm: css`
    font-size: 14px;
    line-height: 20px;
  `,
  /** tw: text-xs */
  xs: css`
    font-size: 12px;
    line-height: 16px;
  `,
};

// ── 목업 커스텀 <style> ──────────────────────────────────────────────
/** pc_1·pc_2·_2 `.glass-panel` */
export const glassPanel85 = css`
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(107, 70, 193, 0.08);
  box-shadow: 0 8px 30px rgba(107, 70, 193, 0.04);
`;
/** pc_1·pc_2 `.soft-elevation` (glass-panel 뒤에 와서 그림자를 덮음) */
export const softElevation = css`
  box-shadow: 0 12px 40px rgba(107, 70, 193, 0.06);
`;
/** pc_3 `.glass-panel` */
export const glassPanel70Pc3 = css`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(107, 70, 193, 0.08);
  box-shadow: 0 10px 30px rgba(107, 70, 193, 0.04);
`;
/** _4 `.glass-panel` + `.soft-shadow` */
export const glassPanel70 = css`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
`;
export const softShadow = css`
  box-shadow: 0 8px 30px rgba(107, 70, 193, 0.04);
`;
/** _6 `.glass-card` */
export const glassCard = css`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(107, 70, 193, 0.08);
  box-shadow: 0 8px 30px rgba(107, 70, 193, 0.04);
`;
/** pc_1·pc_2·_2 `input:focus, textarea:focus` 포커스 글로우 */
export const focusGlow = css`
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(107, 70, 193, 0.15) !important;
    border-color: #6b46c1 !important;
  }
`;
/** _3 `@keyframes pulseGlow` */
export const pulseGlow = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(107, 70, 193, 0.4); transform: scale(1); }
  50% { box-shadow: 0 0 20px 10px rgba(107, 70, 193, 0.1); transform: scale(1.05); }
  100% { box-shadow: 0 0 0 0 rgba(107, 70, 193, 0); transform: scale(1); }
`;
/** _3 진입 스크립트(opacity 0·translateY(20px) → 0.6s cubic-bezier(0.16,1,0.3,1), 100+150·i ms 간격) */
export const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;
/** tw: animate-pulse */
export const twPulse = keyframes`
  50% { opacity: 0.5; }
`;
/** _4 `.hide-scrollbar` */
export const hideScrollbar = css`
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

// ── 입력 칸 ──────────────────────────────────────────────────────────
/** pc_2: `w-full bg-surface-container border border-outline-variant/30 text-on-surface px-4 py-3 rounded-[16px] font-body-md` + focus glow */
export const inputPc2 = css`
  width: 100%;
  background: ${C.surfaceContainer};
  border: 1px solid ${a(C.outlineVariant, 0.3)};
  color: ${C.onSurface};
  padding: 12px 16px;
  border-radius: 16px;
  ${TY.bodyMd};

  &::placeholder {
    color: ${C.outline};
  }

  ${focusGlow};
`;
/** pc_4: `w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3 font-body-md text-on-surface
 *  focus:outline-none focus:ring-2 focus:ring-primary-container/50 focus:border-primary-container transition-all` */
export const inputPc4 = css`
  width: 100%;
  background: ${C.surfaceContainerLow};
  border: 1px solid ${C.outlineVariant};
  border-radius: 12px;
  padding: 12px 16px;
  ${TY.bodyMd};
  color: ${C.onSurface};
  ${tAll()};

  &::placeholder {
    color: ${C.outline};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${a(C.primaryContainer, 0.5)};
    border-color: ${C.primaryContainer};
  }
`;
/** _6: `block w-full pl-10 pr-3 py-3 border-none rounded-[16px] bg-white glass-card font-body-md
 *  focus:ring-2 focus:ring-primary focus:outline-none placeholder-outline-variant` */
export const inputM6 = css`
  display: block;
  width: 100%;
  padding: 12px 12px 12px 40px;
  border-radius: 16px;
  ${glassCard};
  border: none;
  background: #ffffff;
  ${TY.bodyMd};
  color: ${C.onSurface};

  &::placeholder {
    color: ${C.outlineVariant};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${C.primary};
  }
`;
