import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Noto Sans", "Noto Sans KR", -apple-system, BlinkMacSystemFont, sans-serif;
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
    /* 앱을 모바일 폭 기둥으로 세운 뒤로, 어딘가 하나만 삐져나와도 화면이 옆으로 밀립니다. */
    overflow-x: hidden;
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

  /**
   * 시안이 쓰는 Material Symbols. 글자("forest")가 합자(ligature)로 아이콘이 되므로,
   * 위의 * { font-family } 를 덮어써야 하고 글자가 잘리거나 번역되면 안 됩니다.
   */
  .material-symbols-outlined {
    font-family: "Material Symbols Outlined", sans-serif;
    font-weight: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    user-select: none;
    -webkit-font-smoothing: antialiased;
    /* 글자를 아이콘으로 바꾸는 합자를 켭니다. */
    font-feature-settings: "liga";
    -webkit-font-feature-settings: "liga";
    /*
     * FILL·wght 는 여기서 정하지 않습니다. 아이콘마다 달라야 하는데
     * 여기에 두면 Icon 컴포넌트와 특이도가 같아 주입 순서 싸움이 됩니다.
     * 값을 비워 두면 가변 폰트의 기본축(FILL 0 / wght 400)이 그대로 쓰입니다.
     */
  }

  /*
   * Google 번역 위젯이 얹는 것들.
   * 언어는 우리 화면(랜딩 첫 단계 · 마이 설정)에서 고르므로 위젯 자체 UI 는 감춥니다.
   * 위젯은 상단 배너를 넣으며 body 에 top: 40px 을 직접 박는데, 그러면 붙박이 요소가
   * 전부 내려앉습니다. 그래서 top 을 되돌려 놓습니다.
   */
  /* 위젯이 얹는 상단 배너·풍선·툴팁은 감춥니다. */
  .goog-te-banner-frame,
  .goog-te-balloon-frame,
  iframe.skiptranslate,
  .goog-tooltip,
  .goog-tooltip:hover {
    display: none !important;
  }

  /*
   * 언어 선택 상자는 화면 밖으로 치웁니다. display:none 으로 지우면 위젯이
   * 상자를 아예 만들지 않는 경우가 있어, 코드로 몰 대상이 사라집니다.
   */
  #google_translate_element {
    position: absolute !important;
    left: -9999px !important;
    top: 0 !important;
    width: 1px !important;
    height: 1px !important;
    overflow: hidden !important;
  }

  /*
   * 위젯은 배너를 넣으며 body 에 top: 40px 을 인라인으로 박습니다.
   * 그대로 두면 붙박이 요소가 전부 내려앉습니다. !important 라야 인라인을 이깁니다.
   */
  body {
    top: 0 !important;
  }

  /* 번역된 글자에 칠해지는 형광색·그림자를 지웁니다. */
  .goog-text-highlight {
    background: none !important;
    box-shadow: none !important;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.primary100};
    color: ${({ theme }) => theme.colors.primary900};
  }

  /* 시안의 "부드러운 부양" — 카드가 배경에서 살짝 떠 보이게 합니다. */
  .soft-elevation {
    box-shadow: ${({ theme }) => theme.shadow.card};
    border: ${({ theme }) => theme.hairline};
  }

  /* 가로 스크롤 줄(칩·배너)에서 스크롤바를 숨깁니다. */
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
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
    /*
     * transform 으로 가운데 맞추지 않습니다. 컴포넌트가 누르는 동안
     * .lgtb[data-pressed="true"] { transform: scale(1.035) } 를 걸어 덮어쓰는데,
     * 그러면 translateX(-50%) 가 사라져 바가 자기 폭의 절반만큼 오른쪽으로 튑니다.
     * 좌우를 0 으로 열고 margin 으로 가운데를 잡으면 transform 을 비워 둘 수 있습니다.
     */
    left: 0;
    right: 0;
    margin-inline: auto;
    bottom: calc(16px + env(safe-area-inset-bottom, 0px));
    width: min(calc(100% - 24px), 456px);
    z-index: 100;
  }
`;
