/**
 * 랜딩 페이지 노출 제어.
 * - 비로그인 사용자는 홈 진입 시 랜딩(/welcome)을 먼저 보여줍니다.
 * - "둘러볼래요"를 누르면 이번 세션 동안은 바로 앱을 둘러볼 수 있도록 표시합니다.
 * - sessionStorage 사용: 새 방문(새 세션)마다 랜딩을 다시 보여줘 홍보 노출을 유지합니다.
 */
const LANDING_DISMISSED_KEY = "mm-landing-dismissed";

export function hasDismissedLanding(): boolean {
  try {
    return sessionStorage.getItem(LANDING_DISMISSED_KEY) === "1";
  } catch {
    return false;
  }
}

export function dismissLanding(): void {
  try {
    sessionStorage.setItem(LANDING_DISMISSED_KEY, "1");
  } catch {
    /* 저장 불가 환경은 무시 — 랜딩이 한 번 더 노출될 뿐 기능엔 영향 없음 */
  }
}
