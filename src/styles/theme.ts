/**
 * Aetheric Calm — 프론트 시안(DESIGN.md)의 디자인 토큰.
 *
 * 시안은 Material 계열 이름(surface / on-surface / primary-container …)을 쓰고,
 * 이 앱은 예전부터 primary600·warmCream 같은 이름을 써 왔습니다.
 * 여기서 두 이름을 한 값으로 묶어 둡니다. 화면마다 손대지 않아도
 * 예전 이름이 그대로 새 팔레트를 가리키게 하려는 것입니다.
 */
export const theme = {
  colors: {
    // ── Primary (Deep Purple) ──────────────────────────────
    // 시안 primary #532aa8, 브랜드 틴트 #6b46c1
    primary50: "#f5f1fd",
    primary100: "#e9ddff", // primary-fixed
    primary200: "#d0bcff", // primary-fixed-dim
    primary300: "#b79bf0",
    primary400: "#8f66d8",
    primary500: "#6b46c1", // surface-tint / primary-container
    primary600: "#532aa8", // primary
    primary700: "#452293",
    primary800: "#33176f",
    primary900: "#23005c", // on-primary-fixed

    // ── Surface / Background ───────────────────────────────
    surface: "#f7fafc",
    surfaceDim: "#d7dadc",
    surfaceBright: "#f7fafc",
    surfaceLowest: "#ffffff",
    surfaceLow: "#f1f4f6",
    surfaceContainer: "#ebeef0",
    surfaceHigh: "#e5e9eb",
    surfaceHighest: "#e0e3e5",
    surfaceVariant: "#e0e3e5",
    inverseSurface: "#2d3133",
    inverseOnSurface: "#eef1f3",
    white: "#FFFFFF",

    // ── Secondary / Tertiary ───────────────────────────────
    secondary: "#665978",
    secondaryContainer: "#ead9fe",
    onSecondaryContainer: "#6a5d7c",
    secondaryFixed: "#ecdcff",
    secondaryFixedDim: "#d0c0e4",
    onSecondaryFixed: "#211631",
    onSecondaryFixedVariant: "#4d415f",
    tertiary: "#552f9c",
    tertiaryContainer: "#6e49b6",
    onTertiaryContainer: "#e3d2ff",

    // ── Text ───────────────────────────────────────────────
    charcoal: "#181c1e", // on-surface
    warmGray: "#494453", // on-surface-variant
    text900: "#181c1e",
    text700: "#494453",

    // ── Line / Accent ──────────────────────────────────────
    border200: "#cbc3d5", // outline-variant
    outline: "#7a7484",
    mutedMauve: "#7a7484",
    dustyGold: "#C9A962",
    dustyRose: "#C9A090",

    // ── Error ──────────────────────────────────────────────
    error: "#ba1a1a",
    errorContainer: "#ffdad6",
    onErrorContainer: "#93000a",

    // ── 예전 이름(화면 전반에서 아직 이 이름으로 부릅니다) ──
    warmCream: "#f7fafc", // = surface
    buddingPeach: "#ead9fe", // = secondary-container
    bg50: "#f7fafc",
    bg100: "#ead9fe",
  },
  /**
   * 시안의 깊이 표현은 진한 그림자가 아니라 브랜드 보라로 옅게 물든
   * 큰 반경 그림자입니다. soft 를 그대로 쓰면 화면 전체가 함께 바뀝니다.
   */
  shadow: {
    soft: "0 8px 30px rgba(107, 70, 193, 0.08)",
    card: "0 12px 40px rgba(107, 70, 193, 0.04)",
    float: "0 12px 40px rgba(107, 70, 193, 0.15)",
    press: "0 8px 30px rgba(107, 70, 193, 0.15)",
  },
  radii: {
    pill: "999px",
    sm: "8px",
    md: "16px", // 입력 필드 등 작은 요소
    lg: "24px", // 카드·모달
    xl: "32px",
  },
  /** 유리 표면(글래스모피즘). 배경 위에 떠 있는 바·시트에 씁니다. */
  glass: {
    bar: "rgba(247, 250, 252, 0.7)",
    card: "rgba(255, 255, 255, 0.85)",
    blur: "blur(20px)",
  },
  /** 카드 테두리 — 시안의 1px rgba(107,70,193,0.08) */
  hairline: "1px solid rgba(107, 70, 193, 0.08)",
};

export type ThemeType = typeof theme;
