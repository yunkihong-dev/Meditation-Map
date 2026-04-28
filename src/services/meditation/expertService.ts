import type { MeditationExpert } from "./types";
import {
  fetchExpertById,
  fetchExperts,
  fetchExpertsByRegionId,
  getExpertsRepository,
  getExpertsTableSnapshot,
} from "./repositories/expertsRepository";

const experts = getExpertsTableSnapshot();

/** @deprecated 레거시 동기 — 백엔드 연동 시 fetchExperts() 사용 권장 */
export const getExperts = (): MeditationExpert[] => experts;

/** @deprecated 레거시 동기 — 백엔드 연동 시 fetchExpertById() 사용 권장 */
export const getExpertById = (id: string): MeditationExpert | undefined =>
  experts.find((e) => e.id === id);

/** @deprecated 레거시 동기 — 백엔드 연동 시 fetchExpertsByRegionId() 사용 권장 */
export const getExpertsByRegion = (regionId: string): MeditationExpert[] => {
  if (regionId === "all") {
    return [...experts];
  }
  return experts.filter((e) => e.regionIds.includes(regionId));
};

export { fetchExperts, fetchExpertById, fetchExpertsByRegionId, getExpertsRepository };
