import regionsSeed from "@/data/meditation/regions.json";
import type { Region } from "../types";
import { getMeditationApiBaseUrl } from "./apiConfig";

export type RegionDto = Region;

const REGIONS_SEED = regionsSeed as RegionDto[];

export interface RegionsRepository {
  findAll(): Promise<RegionDto[]>;
}

class LocalRegionsRepository implements RegionsRepository {
  async findAll(): Promise<RegionDto[]> {
    return [...REGIONS_SEED];
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

class HttpRegionsRepository implements RegionsRepository {
  constructor(private readonly baseUrl: string) {}

  private url(path: string): string {
    return `${this.baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
  }

  async findAll(): Promise<RegionDto[]> {
    const res = await fetch(this.url("/regions"));
    if (!res.ok) throw new HttpError(`GET /regions 실패`, res.status);
    return res.json() as Promise<RegionDto[]>;
  }
}

let cached: RegionsRepository | null = null;

export function getRegionsRepository(): RegionsRepository {
  if (!cached) {
    const base = getMeditationApiBaseUrl();
    cached = base ? new HttpRegionsRepository(base) : new LocalRegionsRepository();
  }
  return cached;
}

export function getRegionsTableSnapshot(): RegionDto[] {
  return [...REGIONS_SEED];
}

export const fetchRegions = (): Promise<RegionDto[]> => getRegionsRepository().findAll();
