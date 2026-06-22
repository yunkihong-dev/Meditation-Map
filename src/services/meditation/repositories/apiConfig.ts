/**
 * 백엔드 베이스 URL (예: http://localhost:8080).
 * 프런트 카탈로그·공지 등은 모두 이 URL로만 조회합니다 (로컬 JSON 시드 없음).
 */
export function getMeditationApiBaseUrl(): string | undefined {
  const raw = import.meta.env.VITE_API_BASE_URL;
  if (raw == null || String(raw).trim() === "") return undefined;
  return String(raw).replace(/\/$/, "");
}

/** 프런트는 로컬 시드 없이 API만 사용합니다. */
export function requireMeditationApiBaseUrl(): string {
  const base = getMeditationApiBaseUrl();
  if (!base) {
    throw new Error("VITE_API_BASE_URL이 필요합니다. .env에 백엔드 주소를 설정하세요.");
  }
  return base;
}
