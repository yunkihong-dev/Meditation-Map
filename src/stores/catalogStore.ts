import { create } from "zustand";
import { getMeditationApiBaseUrl } from "@/services/meditation/repositories/apiConfig";
import { fetchExperts } from "@/services/meditation/repositories/expertsRepository";
import { fetchPlaces } from "@/services/meditation/repositories/placesRepository";
import { fetchRegions } from "@/services/meditation/repositories/regionsRepository";
import {
  fetchInterests,
  type InterestDto,
} from "@/services/meditation/repositories/interestsRepository";
import type { MeditationExpert, MeditationPlace, Region } from "@/services/meditation/types";

interface CatalogState {
  places: MeditationPlace[];
  regions: Region[];
  experts: MeditationExpert[];
  /** 관리자가 관리하는 관심사(주제). 온보딩 카드와 칩 목록이 같이 씁니다. */
  interests: InterestDto[];
  catalogReady: boolean;
  /** API 모드에서 카탈로그 요청 실패 시 안내 문구 */
  catalogError: string | null;
  hydrate: () => Promise<void>;
  clearCatalogError: () => void;
}

async function fetchOrMark<T>(
  fn: () => Promise<T>,
  fallback: T
): Promise<{ ok: true; value: T } | { ok: false }> {
  try {
    return { ok: true, value: await fn() };
  } catch {
    return { ok: false };
  }
}

export const useCatalogStore = create<CatalogState>((set) => ({
  places: [],
  regions: [],
  experts: [],
  interests: [],
  catalogReady: false,
  catalogError: null,
  clearCatalogError: () => set({ catalogError: null }),
  hydrate: async () => {
    if (!getMeditationApiBaseUrl()) {
      set({
        places: [],
        regions: [],
        experts: [],
        interests: [],
        catalogReady: true,
        catalogError: null,
      });
      return;
    }
    set({ catalogReady: false, catalogError: null });
    const [p, r, e, c] = await Promise.all([
      fetchOrMark(() => fetchPlaces(), []),
      fetchOrMark(() => fetchRegions(), []),
      fetchOrMark(() => fetchExperts(), []),
      fetchOrMark(() => fetchInterests(), []),
    ]);
    const hadError = !p.ok || !r.ok || !e.ok || !c.ok;
    set({
      places: p.ok ? p.value : [],
      regions: r.ok ? r.value : [],
      experts: e.ok ? e.value : [],
      interests: c.ok ? c.value : [],
      catalogReady: true,
      catalogError: hadError
        ? "서버에서 정보를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요."
        : null,
    });
  },
}));
