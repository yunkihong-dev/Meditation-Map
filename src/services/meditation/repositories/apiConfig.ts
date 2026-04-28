/**
 * 백엔드 베이스 URL (예: https://api.example.com).
 * 설정 시 places/experts/regions 는 HTTP 레포지토리로 조회합니다.
 */
export function getMeditationApiBaseUrl(): string | undefined {
  const raw = import.meta.env.VITE_API_BASE_URL;
  if (raw == null || String(raw).trim() === "") return undefined;
  return String(raw).replace(/\/$/, "");
}
