/** 힐링뉴스 명상지도 브랜드 컬러 가이드 */
export const theme = {
  colors: {
    // Primary - Deep Purple #4B0082 (로고, 버튼, 선택 상태)
    primary50: "#f3eef8",
    primary100: "#e6dcf0",
    primary200: "#c9b8e0",
    primary300: "#a88bca",
    primary400: "#7a5aab",
    primary500: "#5c3d8f",
    primary600: "#4B0082",
    primary700: "#3d0069",
    primary800: "#2f0051",
    primary900: "#22003a",
    // Background
    white: "#FFFFFF",
    warmCream: "#FFFAF8",
    buddingPeach: "#F5D8D0",
    // Text
    charcoal: "#3D3D3D",
    warmGray: "#6B6B6B",
    text900: "#3D3D3D",
    text700: "#6B6B6B",
    // UI
    border200: "#9B8A99",
    mutedMauve: "#9B8A99",
    dustyGold: "#C9A962",
    dustyRose: "#C9A090",
    // Legacy aliases
    bg50: "#FFFAF8",
    bg100: "#F5D8D0",
  },
  shadow: {
    soft: "0 12px 30px rgba(75, 0, 130, 0.1)",
  },
  radii: {
    pill: "999px",
    md: "12px",
    lg: "16px",
  },
};

export type ThemeType = typeof theme;
