import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { applySavedLanguage } from "./services/i18n/googleTranslate";
import { currentLanguage } from "./stores/languagePreference";
import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./styles/theme";

/*
 * 번역 위젯은 React 가 그리기 전에 붙여 둡니다.
 * 위젯은 뜰 때 페이지 전체를 한 번 훑기 때문에, 화면이 다 그려진 뒤에 붙으면
 * 이미 지나간 부분이 원문으로 남습니다. (한국어면 아무 일도 하지 않습니다.)
 */
applySavedLanguage(currentLanguage());

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
