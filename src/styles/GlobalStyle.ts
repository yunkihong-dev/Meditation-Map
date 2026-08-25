import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Noto Sans KR", sans-serif;
  }

  html {
    font-size: 10px;
    height: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    overscroll-behavior: none;
  }

  :root {
    /* 떠 있는 탭바가 화면 아래에서 차지하는 높이 — 바(66) + 아래 여백(16) + 안전영역.
       화면마다 흩어져 있던 56px 대신 이 값 하나를 씁니다. */
    --tabbar-space: calc(66px + 16px + env(safe-area-inset-bottom, 0px));
  }

  body {
    min-height: 100%;
    min-height: 100dvh;
    background: ${({ theme }) => theme.colors.warmCream};
    color: ${({ theme }) => theme.colors.charcoal};
    overflow-x: hidden;
    overscroll-behavior: none;
    -webkit-overflow-scrolling: touch;
    touch-action: manipulation;
  }

  #root {
    min-height: 100%;
    min-height: 100dvh;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font: inherit;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  input[type="checkbox"]:focus,
  input[type="checkbox"]:focus-visible {
    outline: none;
  }

  svg {
    display: block;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.primary100};
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /**
   * 하단 탭바 자리. 컴포넌트는 위치를 정하지 않으므로 여기서 잡습니다.
   * 앱 기둥(최대 480px)과 같은 폭 안에 머물도록 가운데 정렬합니다.
   */
  .app-tabbar {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: calc(16px + env(safe-area-inset-bottom, 0px));
    width: min(calc(100% - 24px), 456px);
    z-index: 100;
  }
`;
