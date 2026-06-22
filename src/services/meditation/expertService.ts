import type { MeditationExpert } from "./types";
import {
  fetchExpertById,
  fetchExperts,
  fetchExpertsByRegionId,
  getExpertsRepository,
} from "./repositories/expertsRepository";
import { useCatalogStore } from "@/stores/catalogStore";

export const getExperts = (): MeditationExpert[] => useCatalogStore.getState().experts;

export const getExpertById = (id: string): MeditationExpert | undefined =>
  useCatalogStore.getState().experts.find((e) => e.id === id);

export const getExpertsByRegion = (regionId: string): MeditationExpert[] => {
  const experts = useCatalogStore.getState().experts;
  if (regionId === "all") {
    return [...experts];
  }
  return experts.filter((e) => e.regionIds.includes(regionId));
};

export { fetchExperts, fetchExpertById, fetchExpertsByRegionId, getExpertsRepository };
