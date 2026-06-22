import type { MeditationExpert } from "../types";
import { requireMeditationApiBaseUrl } from "./apiConfig";

export type ExpertDto = MeditationExpert;

export interface ExpertsRepository {
  findAll(): Promise<ExpertDto[]>;
  findById(id: string): Promise<ExpertDto | null>;
  findByRegionId(regionId: string): Promise<ExpertDto[]>;
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

class HttpExpertsRepository implements ExpertsRepository {
  constructor(private readonly baseUrl: string) {}

  private url(path: string): string {
    return `${this.baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
  }

  async findAll(): Promise<ExpertDto[]> {
    const res = await fetch(this.url("/experts"));
    if (!res.ok) throw new HttpError(`GET /experts 실패`, res.status);
    return res.json() as Promise<ExpertDto[]>;
  }

  async findById(id: string): Promise<ExpertDto | null> {
    const res = await fetch(this.url(`/experts/${encodeURIComponent(id)}`));
    if (res.status === 404) return null;
    if (!res.ok) throw new HttpError(`GET /experts/:id 실패`, res.status);
    return res.json() as Promise<ExpertDto>;
  }

  async findByRegionId(regionId: string): Promise<ExpertDto[]> {
    const q = regionId === "all" ? "" : `?regionId=${encodeURIComponent(regionId)}`;
    const res = await fetch(this.url(`/experts${q}`));
    if (!res.ok) throw new HttpError(`GET /experts?regionId 실패`, res.status);
    return res.json() as Promise<ExpertDto[]>;
  }
}

let cached: ExpertsRepository | null = null;

export function getExpertsRepository(): ExpertsRepository {
  if (!cached) {
    cached = new HttpExpertsRepository(requireMeditationApiBaseUrl());
  }
  return cached;
}

export const fetchExperts = (): Promise<ExpertDto[]> => getExpertsRepository().findAll();
export const fetchExpertById = (id: string): Promise<ExpertDto | null> =>
  getExpertsRepository().findById(id);
export const fetchExpertsByRegionId = (regionId: string): Promise<ExpertDto[]> =>
  getExpertsRepository().findByRegionId(regionId);
