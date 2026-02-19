import { create } from "zustand";

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
}

export const useFavoritesStore = create<FavoritesStoreState>((set, get) => ({
  favorites: loadFavorites(),
  toggleFavorite: (placeId) => {
    set((state) => {
      const exists = state.favorites.includes(placeId);
      const next = exists
        ? state.favorites.filter((id) => id !== placeId)
        : [...state.favorites, placeId];
      saveFavorites(next);
      return { favorites: next };
    });
  },
  isFavorite: (placeId) => get().favorites.includes(placeId),
}));
