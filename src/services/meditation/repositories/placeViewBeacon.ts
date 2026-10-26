/**
 * 장소 상세 조회 비콘 — C7 `POST /places/{placeId}/views` (공개, 본문 없음, 항상 204).
 *
 * 상세 화면을 열 때 한 번만 보냅니다. React StrictMode 의 effect 이중 실행·재렌더·같은 상세로의 짧은 재진입으로
 * 여러 번 가지 않도록 같은 장소는 `DEDUPE_MS` 동안 다시 보내지 않습니다(서버도 장소×날짜×조회자 1회로 거름).
 * 회원 쿠키가 같이 가야 회원 단위 중복 제거·오너 본인 제외가 되므로 apiFetch(credentials include)를 씁니다.
 * 실패는 조용히 무시합니다(통계 보조 기능이 화면을 막으면 안 됨).
 */
import { apiFetch } from "@/stores/authStore";

export const DEDUPE_MS = 30_000;
const lastSent = new Map<string, number>();

export function sendPlaceView(placeId: string, now: number = Date.now()): boolean {
  if (!placeId) return false;
  const prev = lastSent.get(placeId);
  if (prev != null && now - prev < DEDUPE_MS) return false;
  lastSent.set(placeId, now);
  try {
    void apiFetch(`/places/${encodeURIComponent(placeId)}/views`, { method: "POST", keepalive: true }).catch(
      () => undefined
    );
  } catch {
    // VITE_API_BASE_URL 미설정 등 — 무시
  }
  return true;
}

/** 테스트 전용 */
export function resetPlaceViewBeacon() {
  lastSent.clear();
}
