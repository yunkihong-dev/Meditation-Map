export const theme = {
  colors: {
    primary50: "#f7f3ff",
    primary100: "#eee8ff",
    primary200: "#daccff",
    primary300: "#c2aaff",
    primary400: "#a980ff",
    primary500: "#8f58ff",
    primary600: "#7a39f0",
    primary700: "#6a2fd1",
    primary800: "#5727a6",
    primary900: "#3f1f73",
    text900: "#1f1f28",
    text700: "#4b4b66",
    border200: "#e5e1f2",
    bg50: "#faf8ff",
    bg100: "#f3efff",
    white: "#ffffff",
  },
  shadow: {
    soft: "0 12px 30px rgba(53, 24, 96, 0.12)",
  },
  radii: {
    pill: "999px",
    md: "12px",
    lg: "16px",
  },
};

export type ThemeType = typeof theme;
