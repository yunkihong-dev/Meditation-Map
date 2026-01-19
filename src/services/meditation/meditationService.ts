import regionsData from "@/data/meditation/regions.json";
import placesData from "@/data/meditation/places.json";
import type {
  MeditationFilters,
  MeditationPlace,
  PaginationResult,
  Region,
  SortBy,
} from "./types";

const regions = regionsData as Region[];
const places = placesData as MeditationPlace[];

export const getRegions = (): Region[] => regions;

export const getRegionById = (regionId: string): Region | undefined =>
  regions.find((region) => region.id === regionId);

export const getPlaces = (): MeditationPlace[] => places;

export const getPlacesByRegion = (regionId: string): MeditationPlace[] =>
  places.filter((place) => place.regionId === regionId);

export const getPlaceById = (placeId: string): MeditationPlace | undefined =>
  places.find((place) => place.id === placeId);

export const getAvailableTags = (): string[] => {
  const tags = new Set<string>();
  places.forEach((place) => {
    place.hashtags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
};

export const applyFilters = (
  items: MeditationPlace[],
  filters: MeditationFilters
): MeditationPlace[] => {
  return items.filter((place) => {
    if (filters.tags.length > 0) {
      const hasTag = filters.tags.some((tag) =>
        [...place.hashtags, ...place.themes].includes(tag)
      );
      if (!hasTag) {
        return false;
      }
    }
    if (filters.keyword.trim().length > 0) {
      const keyword = filters.keyword.trim().toLowerCase();
      const haystack = `${place.name} ${place.shortDescription} ${place.address}`.toLowerCase();
      if (!haystack.includes(keyword)) {
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
