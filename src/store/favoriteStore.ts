import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Photo } from "../types/photo";

type FavoriteStore = {
  favorites: Photo[];
  toggleFavorite: (photo: Photo) => void;
  isFavorite: (id: string) => boolean;
};

export const useFavoriteStore = create<FavoriteStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (photo) => {
        const { favorites } = get();
        const exists = favorites.find((item) => item.id === photo.id);

        if (exists) {
          set({ favorites: favorites.filter((item) => item.id !== photo.id) });
        } else {
          set({ favorites: [...favorites, photo] });
        }
      },
      isFavorite: (id) => {
        return get().favorites.some((item) => item.id === id);
      },
    }),
    {
      name: "favorites-storage",
    }
  )
);
