import expertsSeed from "@/data/meditation/experts.json";
import type { MeditationExpert } from "../types";
import { getMeditationApiBaseUrl } from "./apiConfig";

export type ExpertDto = MeditationExpert;

const EXPERTS_SEED = expertsSeed as ExpertDto[];

export interface ExpertsRepository {
  findAll(): Promise<ExpertDto[]>;
  findById(id: string): Promise<ExpertDto | null>;
  findByRegionId(regionId: string): Promise<ExpertDto[]>;
}

class LocalExpertsRepository implements ExpertsRepository {
  async findAll(): Promise<ExpertDto[]> {
    return [...EXPERTS_SEED];
  }

  async findById(id: string): Promise<ExpertDto | null> {
    return EXPERTS_SEED.find((e) => e.id === id) ?? null;
  }

  async findByRegionId(regionId: string): Promise<ExpertDto[]> {
    if (regionId === "all") return [...EXPERTS_SEED];
    return EXPERTS_SEED.filter((e) => e.regionIds.includes(regionId));
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
    const base = getMeditationApiBaseUrl();
    cached = base ? new HttpExpertsRepository(base) : new LocalExpertsRepository();
  }
  return cached;
}

export function getExpertsTableSnapshot(): ExpertDto[] {
  return [...EXPERTS_SEED];
}

export const fetchExperts = (): Promise<ExpertDto[]> => getExpertsRepository().findAll();
export const fetchExpertById = (id: string): Promise<ExpertDto | null> =>
  getExpertsRepository().findById(id);
export const fetchExpertsByRegionId = (regionId: string): Promise<ExpertDto[]> =>
  getExpertsRepository().findByRegionId(regionId);
