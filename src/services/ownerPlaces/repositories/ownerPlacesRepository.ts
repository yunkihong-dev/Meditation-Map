/** 오너 장소 API (계약 8절). 회원 쿠키 인증. */
import { apiFetch } from "@/stores/authStore";
import { readJson } from "@/services/http/apiError";
import {
  parseMyPlaces,
  parseOwnerPlace,
  parsePlaceStats,
  type PlaceStats,
  type StatsRange,
  type MyPlaceItem,
  type OwnerPlacePatch,
  type OwnerPlaceView,
} from "@/services/ownerPlaces/types";

export async function fetchMyPlaces(): Promise<MyPlaceItem[]> {
  return parseMyPlaces(await readJson(await apiFetch("/me/places")));
}

export async function fetchOwnerPlace(placeId: string): Promise<OwnerPlaceView> {
  return parseOwnerPlace(await readJson(await apiFetch(`/me/places/${encodeURIComponent(placeId)}`)));
}

export async function patchOwnerPlace(placeId: string, patch: OwnerPlacePatch): Promise<OwnerPlaceView> {
  const res = await apiFetch(`/me/places/${encodeURIComponent(placeId)}`, {
    method: "PATCH",
    body: JSON.stringify(patch),
  });
  return parseOwnerPlace(await readJson(res));
}

/** C6 — 오너 대시보드 통계 */
export async function fetchPlaceStats(placeId: string, range: StatsRange): Promise<PlaceStats> {
  const q = new URLSearchParams({ range });
  return parsePlaceStats(
    await readJson(await apiFetch(`/me/places/${encodeURIComponent(placeId)}/stats?${q.toString()}`))
  );
}
