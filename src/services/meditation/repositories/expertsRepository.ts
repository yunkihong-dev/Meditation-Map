import type { MeditationExpert } from "../types";
import { requireMeditationApiBaseUrl } from "./apiConfig";

export type ExpertDto = MeditationExpert;

/** 숨김 처리된 전문가는 공개 목록에서 제외 */
const visibleExperts = (list: ExpertDto[]): ExpertDto[] => list.filter((expert) => !expert.hidden);

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
    return visibleExperts((await res.json()) as ExpertDto[]);
  }

  async findById(id: string): Promise<ExpertDto | null> {
    const res = await fetch(this.url(`/experts/${encodeURIComponent(id)}`));
    if (res.status === 404) return null;
    if (!res.ok) throw new HttpError(`GET /experts/:id 실패`, res.status);
    const dto = (await res.json()) as ExpertDto;
    // 숨김 처리된 전문가는 상세 직접 접근도 비공개
    if (dto.hidden) return null;
    return dto;
  }

  async findByRegionId(regionId: string): Promise<ExpertDto[]> {
    const q = regionId === "all" ? "" : `?regionId=${encodeURIComponent(regionId)}`;
    const res = await fetch(this.url(`/experts${q}`));
    if (!res.ok) throw new HttpError(`GET /experts?regionId 실패`, res.status);
    return visibleExperts((await res.json()) as ExpertDto[]);
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
