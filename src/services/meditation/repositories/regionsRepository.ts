import type { Region } from "../types";
import { requireMeditationApiBaseUrl } from "./apiConfig";

export type RegionDto = Region;

export interface RegionsRepository {
  findAll(): Promise<RegionDto[]>;
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
    cached = new HttpRegionsRepository(requireMeditationApiBaseUrl());
  }
  return cached;
}

export const fetchRegions = (): Promise<RegionDto[]> => getRegionsRepository().findAll();
