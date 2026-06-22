import { create } from "zustand";
import { apiFetch, useAuthStore } from "@/stores/authStore";
import { getMeditationApiBaseUrl } from "@/services/meditation/repositories/apiConfig";

const STORAGE_KEY = "meditation-favorites";

const loadFavorites = (): string[] => {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const saveFavorites = (ids: string[]) => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  } catch {
    // ignore
  }
};

interface FavoritesStoreState {
  favorites: string[];
  toggleFavorite: (placeId: string) => void;
  isFavorite: (placeId: string) => boolean;
  replaceAll: (placeIds: string[]) => void;
  pullFromServer: () => Promise<void>;
  pushToServer: (placeIds: string[]) => Promise<void>;
}

export const useFavoritesStore = create<FavoritesStoreState>((set, get) => ({
  favorites: loadFavorites(),
  replaceAll: (placeIds) => {
    const next = [...new Set(placeIds)];
    saveFavorites(next);
    set({ favorites: next });
  },
  pullFromServer: async () => {
    if (!getMeditationApiBaseUrl() || !useAuthStore.getState().isAuthenticated()) return;
    try {
      const res = await apiFetch("/me/favorites");
      if (!res.ok) return;
      const data = (await res.json()) as { placeIds: string[] };
      const next = Array.isArray(data.placeIds) ? data.placeIds : [];
      saveFavorites(next);
      set({ favorites: next });
    } catch {
      // ignore
    }
  },
  pushToServer: async (placeIds) => {
    if (!getMeditationApiBaseUrl() || !useAuthStore.getState().isAuthenticated()) return;
    try {
      const res = await apiFetch("/me/favorites", {
        method: "PUT",
        body: JSON.stringify({ placeIds }),
      });
      if (!res.ok) return;
      const data = (await res.json()) as { placeIds: string[] };
      const next = Array.isArray(data.placeIds) ? data.placeIds : placeIds;
      saveFavorites(next);
      set({ favorites: next });
    } catch {
      // ignore
    }
  },
  toggleFavorite: (placeId) => {
    const state = get();
    const exists = state.favorites.includes(placeId);
    const next = exists
      ? state.favorites.filter((id) => id !== placeId)
      : [...state.favorites, placeId];
    saveFavorites(next);
    set({ favorites: next });
    if (getMeditationApiBaseUrl() && useAuthStore.getState().isAuthenticated()) {
      void get().pushToServer(next);
    }
  },
  isFavorite: (placeId) => get().favorites.includes(placeId),
}));
