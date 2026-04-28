import expertsData from "@/data/meditation/experts.json";
import type { MeditationExpert } from "./types";

const experts = expertsData as MeditationExpert[];

export const getExperts = (): MeditationExpert[] => experts;

export const getExpertById = (id: string): MeditationExpert | undefined =>
  experts.find((e) => e.id === id);

export const getExpertsByRegion = (regionId: string): MeditationExpert[] => {
  if (regionId === "all") {
    return [...experts];
  }
  return experts.filter((e) => e.regionIds.includes(regionId));
};
