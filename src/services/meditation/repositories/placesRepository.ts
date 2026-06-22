import type { MeditationPlace } from "../types";
import { normalizePlacePrograms } from "../placeProgramStatus";
import { requireMeditationApiBaseUrl } from "./apiConfig";

/**
 * DB/API `places` 1행과 동일한 형태의 DTO (중첩 programs·instructors 는 JSON 컬럼 등으로 매핑 가정).
 */
export type PlaceDto = MeditationPlace;

function mapPlace(dto: PlaceDto): PlaceDto {
  return normalizePlacePrograms(dto);
}

function mapPlaces(list: PlaceDto[]): PlaceDto[] {
  return list.map(mapPlace);
}

export interface PlacesRepository {
  findAll(): Promise<PlaceDto[]>;
  findById(id: string): Promise<PlaceDto | null>;
  findByRegionId(regionId: string): Promise<PlaceDto[]>;
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
    return mapPlaces((await res.json()) as PlaceDto[]);
  }

  async findById(id: string): Promise<PlaceDto | null> {
    const res = await fetch(this.url(`/places/${encodeURIComponent(id)}`));
    if (res.status === 404) return null;
    if (!res.ok) throw new HttpError(`GET /places/:id 실패`, res.status);
    return mapPlace((await res.json()) as PlaceDto);
  }

  async findByRegionId(regionId: string): Promise<PlaceDto[]> {
    const q = regionId === "all" ? "" : `?regionId=${encodeURIComponent(regionId)}`;
    const res = await fetch(this.url(`/places${q}`));
    if (!res.ok) throw new HttpError(`GET /places?regionId 실패`, res.status);
    return mapPlaces((await res.json()) as PlaceDto[]);
  }
}

let cached: PlacesRepository | null = null;

export function getPlacesRepository(): PlacesRepository {
  if (!cached) {
    cached = new HttpPlacesRepository(requireMeditationApiBaseUrl());
  }
  return cached;
}

export const fetchPlaces = (): Promise<PlaceDto[]> => getPlacesRepository().findAll();
export const fetchPlaceById = (id: string): Promise<PlaceDto | null> =>
  getPlacesRepository().findById(id);
export const fetchPlacesByRegionId = (regionId: string): Promise<PlaceDto[]> =>
  getPlacesRepository().findByRegionId(regionId);
