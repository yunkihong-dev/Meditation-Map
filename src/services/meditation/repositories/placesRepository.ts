import placesSeed from "@/data/meditation/places.json";
import type { MeditationPlace } from "../types";
import { getMeditationApiBaseUrl } from "./apiConfig";

/**
 * DB/API `places` 1행과 동일한 형태의 DTO (중첩 programs·instructors 는 JSON 컬럼 등으로 매핑 가정).
 */
export type PlaceDto = MeditationPlace;

const PLACES_SEED = placesSeed as PlaceDto[];

export interface PlacesRepository {
  findAll(): Promise<PlaceDto[]>;
  findById(id: string): Promise<PlaceDto | null>;
  findByRegionId(regionId: string): Promise<PlaceDto[]>;
}

class LocalPlacesRepository implements PlacesRepository {
  async findAll(): Promise<PlaceDto[]> {
    return [...PLACES_SEED];
  }

  async findById(id: string): Promise<PlaceDto | null> {
    return PLACES_SEED.find((p) => p.id === id) ?? null;
  }

  async findByRegionId(regionId: string): Promise<PlaceDto[]> {
    if (regionId === "all") return [...PLACES_SEED];
    return PLACES_SEED.filter((p) => p.regionId === regionId);
  }
}

class HttpError extends Error {
  constructor(
    message: string,
    readonly status: number
  ) {
    super(message);
    this.name = "HttpError";
  }
}

class HttpPlacesRepository implements PlacesRepository {
  constructor(private readonly baseUrl: string) {}

  private url(path: string): string {
    return `${this.baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
  }

  async findAll(): Promise<PlaceDto[]> {
    const res = await fetch(this.url("/places"));
    if (!res.ok) throw new HttpError(`GET /places 실패`, res.status);
    return res.json() as Promise<PlaceDto[]>;
  }

  async findById(id: string): Promise<PlaceDto | null> {
    const res = await fetch(this.url(`/places/${encodeURIComponent(id)}`));
    if (res.status === 404) return null;
    if (!res.ok) throw new HttpError(`GET /places/:id 실패`, res.status);
    return res.json() as Promise<PlaceDto>;
  }

  async findByRegionId(regionId: string): Promise<PlaceDto[]> {
    const q = regionId === "all" ? "" : `?regionId=${encodeURIComponent(regionId)}`;
    const res = await fetch(this.url(`/places${q}`));
    if (!res.ok) throw new HttpError(`GET /places?regionId 실패`, res.status);
    return res.json() as Promise<PlaceDto[]>;
  }
}

let cached: PlacesRepository | null = null;

export function getPlacesRepository(): PlacesRepository {
  if (!cached) {
    const base = getMeditationApiBaseUrl();
    cached = base ? new HttpPlacesRepository(base) : new LocalPlacesRepository();
  }
  return cached;
}

/**
 * 개발·레거시 동기 코드용: 번들에 포함된 로컬 시드 테이블 복사.
 * API만 쓸 때는 fetchPlaces() / findAll() 로 통일하는 것을 권장합니다.
 */
export function getPlacesTableSnapshot(): PlaceDto[] {
  return [...PLACES_SEED];
}

export const fetchPlaces = (): Promise<PlaceDto[]> => getPlacesRepository().findAll();
export const fetchPlaceById = (id: string): Promise<PlaceDto | null> =>
  getPlacesRepository().findById(id);
export const fetchPlacesByRegionId = (regionId: string): Promise<PlaceDto[]> =>
  getPlacesRepository().findByRegionId(regionId);
