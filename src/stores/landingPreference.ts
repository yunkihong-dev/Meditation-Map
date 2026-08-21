/**
 * 랜딩 페이지(/welcome) 노출 제어.
 * - 비로그인 사용자가 홈에 처음 들어오면 랜딩을 먼저 보여줍니다.
 * - "나가기"·"둘러볼래요"를 누르거나 로그인에 성공하면 그 뒤로는 다시 띄우지 않습니다.
 *
 * 저장은 localStorage + 쿠키 이중으로 합니다.
 *  - localStorage: 기본 경로. 시크릿 모드·일부 인앱 브라우저에서 막힐 수 있습니다.
 *  - 쿠키(1년): localStorage 가 막힌 환경의 대비책.
 * 둘 중 하나만 남아 있어도 "이미 봤음"으로 칩니다.
 *
 * 한계: 기기가 아니라 "브라우저" 단위입니다. 카카오톡 인앱 브라우저로 링크를 열면
 * 기본 브라우저와 저장소가 분리돼 있어 그 브라우저에서는 한 번 더 보게 됩니다.
 * 그것까지 없애려면 로그인 계정에 기록해야 합니다(서버 플래그).
 */
const KEY = "mm-landing-dismissed";
const LEGACY_SESSION_KEY = "mm-landing-dismissed"; // 예전 sessionStorage 키(동일 이름)
const MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

function readCookie(): boolean {
  if (typeof document === "undefined") return false;
  return document.cookie.split("; ").some((c) => c === `${KEY}=1` || c.startsWith(`${KEY}=1;`));
}

function writeCookie(): void {
  if (typeof document === "undefined") return;
  const secure = typeof location !== "undefined" && location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${KEY}=1; path=/; max-age=${MAX_AGE_SECONDS}; SameSite=Lax${secure}`;
}

export function hasDismissedLanding(): boolean {
  try {
    if (localStorage.getItem(KEY) === "1") return true;
    // 예전 버전에서 이번 세션에만 눌러둔 사용자는 영구 저장으로 승격시킵니다.
    if (sessionStorage.getItem(LEGACY_SESSION_KEY) === "1") {
      dismissLanding();
      return true;
    }
  } catch {
    /* 저장소 접근 불가 환경 — 쿠키로 넘어갑니다 */
  }
  return readCookie();
}

export function dismissLanding(): void {
  try {
    localStorage.setItem(KEY, "1");
  } catch {
    /* 무시 — 쿠키가 받아줍니다 */
  }
  writeCookie();
}
