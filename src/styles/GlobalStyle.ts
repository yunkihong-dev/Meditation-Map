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
  }

  body {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.text900};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font: inherit;
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
`;
