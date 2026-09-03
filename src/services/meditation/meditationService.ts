import type {
  MeditationFilters,
  MeditationPlace,
  PaginationResult,
  PlaceProgram,
  Region,
  SortBy,
} from "./types";
import { formatProgramPeriod, normalizePrograms } from "./placeProgramStatus";
import {
  fetchPlaceById,
  fetchPlaces,
  fetchPlacesByRegionId,
  getPlacesRepository,
} from "./repositories/placesRepository";
import { fetchRegions, getRegionsRepository } from "./repositories/regionsRepository";
import { useCatalogStore } from "@/stores/catalogStore";

const ALL_REGION: Region = { id: "all", name: "전체", slug: "all" };

/** 카탈로그 스토어는 부트스트랩 시 API로만 채워집니다. */
export const getRegions = (): Region[] => useCatalogStore.getState().regions;

export const getRegionById = (regionId: string): Region | undefined =>
  regionId === "all"
    ? ALL_REGION
    : useCatalogStore.getState().regions.find((region) => region.id === regionId);

export const getPlaces = (): MeditationPlace[] => useCatalogStore.getState().places;

export const getPlacesByRegion = (regionId: string): MeditationPlace[] => {
  const places = useCatalogStore.getState().places;
  return regionId === "all" ? [...places] : places.filter((place) => place.regionId === regionId);
};

export const computePopularPlaces = (places: MeditationPlace[], limit = 8): MeditationPlace[] =>
  [...places]
    .sort((a, b) => {
      const d = (b.viewCount ?? 0) - (a.viewCount ?? 0);
      return d !== 0 ? d : String(a.id).localeCompare(String(b.id));
    })
    .slice(0, limit);

export const getPopularPlaces = (limit = 8): MeditationPlace[] =>
  computePopularPlaces(useCatalogStore.getState().places, limit);

export const getPlaceById = (placeId: string): MeditationPlace | undefined =>
  useCatalogStore.getState().places.find((place) => place.id === placeId);

/** 홈 배너 한 장에 필요한 값 — 프로그램과 그게 열리는 장소를 함께 들고 다닙니다. */
export interface FeaturedProgram {
  placeId: string;
  placeName: string;
  program: PlaceProgram;
  /** "장소명 · 2026-03-01 ~ 2026-03-07" 형태의 한 줄 설명 */
  caption: string;
}

/**
 * 홈 배너용 — 지금 진행 중인 프로그램·행사를 모읍니다.
 * 조회수가 높은 장소부터 훑되 한 장소가 배너를 독차지하지 않도록 한 곳당 하나만 씁니다.
 * (숨김 처리된 장소·프로그램은 리포지토리에서 이미 걸러져 들어옵니다.)
 */
export const collectFeaturedPrograms = (
  places: MeditationPlace[],
  limit = 4
): FeaturedProgram[] => {
  const featured: FeaturedProgram[] = [];

  for (const place of computePopularPlaces(places, places.length)) {
    if (featured.length >= limit) break;
    const program = normalizePrograms(place.programs).find(
      (item) => item.status === "ongoing" && item.title.trim().length > 0
    );
    if (!program) continue;

    const period = formatProgramPeriod(program.startDate, program.endDate);
    featured.push({
      placeId: place.id,
      placeName: place.name,
      program,
      caption: period ? `${place.name} · ${period}` : place.name,
    });
  }

  return featured;
};

export const collectAvailableTags = (places: MeditationPlace[]): string[] => {
  const tags = new Set<string>();
  places.forEach((place) => {
    place.hashtags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags)
    .filter((tag) => tag !== "템플스테이")
    .sort();
};

export const getAvailableTags = (): string[] =>
  collectAvailableTags(useCatalogStore.getState().places);

/** HTTP 전용 레포 */
export { fetchPlaces, fetchPlaceById, fetchPlacesByRegionId, getPlacesRepository };
export { fetchRegions, getRegionsRepository };

const resolveCategory = (place: MeditationPlace) => {
  if (place.hashtags.some((t) => /프리랜서|코칭|개인지도|1:1/.test(t))) {
    return "프리랜서(공간없음)";
  }
  if (place.hasTempleStay) {
    return "템플스테이";
  }
  if (place.hashtags.includes("요가") || place.name.includes("요가")) {
    return "요가센터";
  }
  return "명상센터";
};

export const applyFilters = (
  items: MeditationPlace[],
  filters: MeditationFilters
): MeditationPlace[] => {
  return items.filter((place) => {
    if (filters.venueKind) {
      // venueKind 를 안 채운 예전 데이터는 화면 곳곳과 같이 "명상지" 로 봅니다.
      const kind = place.venueKind ?? "명상지";
      if (kind !== filters.venueKind) {
        return false;
      }
    }
    if (filters.category && filters.category !== "all") {
      const resolved = resolveCategory(place);
      if (filters.category === "힐링명상") {
        if (resolved === "요가센터") return false;
      } else if (resolved !== filters.category) {
        return false;
      }
    }
    if (filters.tags.length > 0) {
      const hasTag = filters.tags.some((tag) =>
        [...place.hashtags, ...place.themes].includes(tag)
      );
      if (!hasTag) {
        return false;
      }
    }
    if (filters.keyword.trim().length > 0) {
      const terms = filters.keyword
        .trim()
        .toLowerCase()
        .split(/\s+/)
        .filter((t) => t.length > 0);
      const sectionText = (place.detailSections ?? [])
        .map((s) => `${s.title} ${s.body}`)
        .join(" ");
      const programTitles = (place.programs ?? []).map((p) => p.title).join(" ");
      const haystack = [
        place.name,
        place.shortDescription,
        place.description,
        place.address,
        place.organization?.name,
        place.duration,
        place.admissionFee,
        place.venueKind,
        programTitles,
        ...place.hashtags,
        ...place.themes,
        sectionText,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      const allMatch = terms.every((term) => haystack.includes(term));
      if (!allMatch) {
        return false;
      }
    }
    return true;
  });
};

export const sortPlaces = (
  items: MeditationPlace[],
  sortBy: SortBy
): MeditationPlace[] => {
  if (sortBy === "name") {
    return [...items].sort((a, b) => a.name.localeCompare(b.name, "ko"));
  }
  return items;
};

export const paginate = <T>(
  items: T[],
  page: number,
  pageSize: number
): PaginationResult<T> => {
  const totalItems = items.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const safePage = Math.min(Math.max(page, 1), totalPages);
  const start = (safePage - 1) * pageSize;
  const end = start + pageSize;

  return {
    items: items.slice(start, end),
    totalItems,
    totalPages,
    page: safePage,
    pageSize,
  };
};

export { getRegionIdFromCoordinates } from "./regionFromLocation";
