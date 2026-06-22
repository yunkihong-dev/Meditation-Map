import type { Region } from "@/services/meditation/types";

/** 대한민국 시·도 (지도 SVG `KR-*` ID와 동일) */
const KOREA_REGIONS_RAW: Region[] = [
  { id: "KR-11", name: "서울", slug: "seoul" },
  { id: "KR-26", name: "부산", slug: "busan" },
  { id: "KR-27", name: "대구", slug: "daegu" },
  { id: "KR-28", name: "인천", slug: "incheon" },
  { id: "KR-29", name: "광주", slug: "gwangju" },
  { id: "KR-30", name: "대전", slug: "daejeon" },
  { id: "KR-31", name: "울산", slug: "ulsan" },
  { id: "KR-41", name: "경기", slug: "gyeonggi" },
  { id: "KR-42", name: "강원", slug: "gangwon" },
  { id: "KR-43", name: "충북", slug: "chungbuk" },
  { id: "KR-44", name: "충남", slug: "chungnam" },
  { id: "KR-45", name: "전북", slug: "jeonbuk" },
  { id: "KR-46", name: "전남", slug: "jeonnam" },
  { id: "KR-47", name: "경북", slug: "gyeongbuk" },
  { id: "KR-48", name: "경남", slug: "gyeongnam" },
  { id: "KR-49", name: "제주", slug: "jeju" },
  { id: "KR-50", name: "세종", slug: "sejong" },
];

export const KOREA_REGIONS: Region[] = [...KOREA_REGIONS_RAW].sort((a, b) =>
  a.name.localeCompare(b.name, "ko")
);

export const KOREA_REGION_COUNT = KOREA_REGIONS.length;

export function regionNameById(regionId: string): string {
  return KOREA_REGIONS.find((r) => r.id === regionId)?.name ?? regionId;
}

export function resolveDefaultRegionId(): string {
  return KOREA_REGIONS.find((r) => r.id === "KR-11")?.id ?? KOREA_REGIONS[0]?.id ?? "KR-11";
}
