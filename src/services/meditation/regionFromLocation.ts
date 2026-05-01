/**
 * WGS84 좌표(위도, 경도) → 시·도 `regionId` (예: KR-11).
 * 대략적인 경계(bounding box) + 우선순위(광역시·특례·제주 먼저)로 판정합니다.
 * 실제 경계와 다를 수 있으므로, 필요 시 백엔드 역지오코딩으로 교체·보완하는 것이 좋습니다.
 */

type BBox = {
  id: string;
  minLat: number;
  maxLat: number;
  minLng: number;
  maxLng: number;
};

/** 앞에 올수록 먼저 매칭 (작은 광역·기초 먼저) */
export const REGION_BBOXES: BBox[] = [
  { id: "KR-11", minLat: 37.41, maxLat: 37.7, minLng: 126.75, maxLng: 127.2 },
  { id: "KR-50", minLat: 36.4, maxLat: 36.62, minLng: 127.18, maxLng: 127.32 },
  { id: "KR-30", minLat: 36.2, maxLat: 36.55, minLng: 127.2, maxLng: 127.55 },
  { id: "KR-27", minLat: 35.7, maxLat: 36.04, minLng: 128.2, maxLng: 128.78 },
  { id: "KR-26", minLat: 34.88, maxLat: 35.32, minLng: 128.8, maxLng: 129.3 },
  { id: "KR-31", minLat: 35.38, maxLat: 35.78, minLng: 128.9, maxLng: 129.5 },
  { id: "KR-29", minLat: 35.0, maxLat: 35.3, minLng: 126.5, maxLng: 127.0 },
  { id: "KR-28", minLat: 37.2, maxLat: 37.7, minLng: 126.2, maxLng: 126.9 },
  { id: "KR-49", minLat: 33.0, maxLat: 33.6, minLng: 126.0, maxLng: 127.0 },
  { id: "KR-41", minLat: 36.9, maxLat: 38.0, minLng: 126.5, maxLng: 127.5 },
  { id: "KR-42", minLat: 37.0, maxLat: 38.5, minLng: 127.0, maxLng: 131.0 },
  { id: "KR-43", minLat: 36.0, maxLat: 37.1, minLng: 127.0, maxLng: 128.4 },
  { id: "KR-44", minLat: 35.7, maxLat: 36.6, minLng: 125.5, maxLng: 127.1 },
  { id: "KR-45", minLat: 35.0, maxLat: 36.0, minLng: 126.4, maxLng: 128.0 },
  { id: "KR-46", minLat: 33.0, maxLat: 35.2, minLng: 125.0, maxLng: 128.0 },
  { id: "KR-47", minLat: 35.5, maxLat: 38.0, minLng: 127.0, maxLng: 130.0 },
  { id: "KR-48", minLat: 34.4, maxLat: 35.5, minLng: 127.4, maxLng: 130.0 },
];

export const getRegionIdFromCoordinates = (lat: number, lng: number): string | null => {
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null;
  if (lat < 32.5 || lat > 38.8 || lng < 123.0 || lng > 132.0) {
    return null;
  }
  for (const b of REGION_BBOXES) {
    if (lat >= b.minLat && lat <= b.maxLat && lng >= b.minLng && lng <= b.maxLng) {
      return b.id;
    }
  }
  return null;
};
