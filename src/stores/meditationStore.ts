import { create } from "zustand";
import type { MeditationFilters, SortBy } from "@/services/meditation/types";

interface MeditationStoreState {
  selectedRegionId?: string;
  filters: MeditationFilters;
  page: number;
  pageSize: number;
  isFilterOpen: boolean;
  setRegion: (regionId?: string) => void;
  setPage: (page: number) => void;
  setPageSize: (pageSize: number) => void;
  setKeyword: (keyword: string) => void;
  toggleTag: (tag: string) => void;
  clearTags: () => void;
  setSortBy: (sortBy: SortBy) => void;
  resetFilters: () => void;
  setFilterOpen: (open: boolean) => void;
}

const defaultFilters: MeditationFilters = {
  tags: [],
  keyword: "",
  sortBy: "recommend",
};

export const useMeditationStore = create<MeditationStoreState>((set) => ({
  selectedRegionId: undefined,
  filters: defaultFilters,
  page: 1,
  pageSize: 10,
  isFilterOpen: false,
  setRegion: (regionId) => set({ selectedRegionId: regionId, page: 1 }),
  setPage: (page) => set({ page }),
  setPageSize: (pageSize) => set({ pageSize, page: 1 }),
  setKeyword: (keyword) =>
    set((state) => ({ filters: { ...state.filters, keyword }, page: 1 })),
  toggleTag: (tag) =>
    set((state) => {
      const exists = state.filters.tags.includes(tag);
      const tags = exists
        ? state.filters.tags.filter((item) => item !== tag)
        : [...state.filters.tags, tag];
      return { filters: { ...state.filters, tags }, page: 1 };
    }),
  clearTags: () =>
    set((state) => ({ filters: { ...state.filters, tags: [] }, page: 1 })),
  setSortBy: (sortBy) =>
    set((state) => ({ filters: { ...state.filters, sortBy }, page: 1 })),
  resetFilters: () => set({ filters: defaultFilters, page: 1 }),
  setFilterOpen: (open) => set({ isFilterOpen: open }),
}));
