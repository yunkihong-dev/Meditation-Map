import { SOURCE_LANG, isSupportedLanguage } from "@/services/i18n/googleTranslate";

/**
 * 화면 언어 선택.
 *
 * 랜딩(/welcome) 첫 단계에서 고르고, 그 뒤에는 마이 페이지 설정에서 바꿉니다.
 * 저장은 랜딩 노출 기록과 같은 방식(localStorage + 쿠키)으로 이중화합니다 —
 * 시크릿 모드나 일부 인앱 브라우저는 localStorage 를 막습니다.
 *
 * "고른 적 있는지" 와 "무슨 언어인지" 를 따로 봅니다. 한국어를 고른 사람과
 * 아직 고르지 않은 사람이 같은 값(ko)이 되면, 랜딩에서 언어 단계를 건너뛸지
 * 판단할 수 없기 때문입니다.
 */
const KEY = "mm-language";
const MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

function readCookie(): string | null {
  if (typeof document === "undefined") return null;
  const hit = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${KEY}=`));
  return hit ? decodeURIComponent(hit.slice(KEY.length + 1)) : null;
}

function writeCookie(code: string): void {
  if (typeof document === "undefined") return;
  const secure = typeof location !== "undefined" && location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${KEY}=${encodeURIComponent(code)}; path=/; max-age=${MAX_AGE_SECONDS}; SameSite=Lax${secure}`;
}

/** 고른 적이 없으면 null. */
export function readLanguage(): string | null {
  let stored: string | null = null;
  try {
    stored = localStorage.getItem(KEY);
  } catch {
    /* 저장소 접근 불가 — 쿠키로 넘어갑니다 */
  }
  const code = stored ?? readCookie();
  return code && isSupportedLanguage(code) ? code : null;
}

/** 고른 적이 없으면 한국어로 봅니다. */
export function currentLanguage(): string {
  return readLanguage() ?? SOURCE_LANG;
}

export function hasChosenLanguage(): boolean {
  return readLanguage() !== null;
}

export function saveLanguage(code: string): void {
  if (!isSupportedLanguage(code)) return;
  try {
    localStorage.setItem(KEY, code);
  } catch {
    /* 무시 — 쿠키가 받아줍니다 */
  }
  writeCookie(code);
}
