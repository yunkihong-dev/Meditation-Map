/**
 * 센터 관리 화면의 "앱으로 돌아가기" 목적지 — 마지막으로 본 앱 화면(Layout 아래 경로).
 * sessionStorage 에 두므로 탭을 닫으면 사라지고, 없으면 /profile(마이)로 갑니다.
 */
const KEY = "mm_last_app_path";

export function rememberAppPath(path: string): void {
  try {
    sessionStorage.setItem(KEY, path);
  } catch {
    // 저장소를 못 쓰면 기본값(/profile)으로 갑니다
  }
}

export function lastAppPath(): string {
  try {
    const v = sessionStorage.getItem(KEY);
    if (v && v.startsWith("/") && !v.startsWith("//")) return v;
  } catch {
    // ignore
  }
  return "/profile";
}
