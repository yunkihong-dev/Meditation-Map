import type { MeditationPlace } from "./types";
import { REGION_BBOXES } from "./regionFromLocation";

const FALLBACK = { minLat: 36.45, maxLat: 37.65, minLng: 126.75, maxLng: 127.15 };

function hashUnit2(seed: string): [number, number] {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const u1 = ((h >>> 0) % 10001) / 10000;
  const u2 = ((Math.imul(h, 7919) >>> 0) % 10001) / 10000;
  return [u1, u2];
}

/** 저장 좌표(관리자 보정)가 있으면 그대로, 없으면 region bbox 안 결정적 근사 좌표 */
export function approximateLatLngForPlace(place: MeditationPlace): { lat: number; lng: number } {
  if (Number.isFinite(place.lat) && Number.isFinite(place.lng)) {
    return { lat: place.lat as number, lng: place.lng as number };
  }
  const bbox = REGION_BBOXES.find((b) => b.id === place.regionId) ?? FALLBACK;
  const [u1, u2] = hashUnit2(`${place.id}\0${place.address}`);
  const pad = 0.1;
  const lat = bbox.minLat + (bbox.maxLat - bbox.minLat) * (pad + (1 - 2 * pad) * u1);
  const lng = bbox.minLng + (bbox.maxLng - bbox.minLng) * (pad + (1 - 2 * pad) * u2);
  return { lat, lng };
}
