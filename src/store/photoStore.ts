import { fetchMockPhotos, searchMockPhotos } from "@/api/mock";
import { fetchRandomPhotos, searchPhotos } from "@/api/unsplash";
import type { Photo } from "@/types/photo";
import { create } from "zustand";

type PhotoStore = {
  photos: Photo[] | null;
  loading: boolean;
  fetchPhotos: () => Promise<void>;
  searchPhotos: (query: string) => Promise<void>;
};

export const usePhotoStore = create<PhotoStore>((set) => ({
  photos: null,
  loading: false,

  fetchPhotos: async () => {
    set({ loading: true });
    try {
      // const data = await fetchMockPhotos(); // for test requests
      const data = await fetchRandomPhotos();
      set({ photos: data, loading: false });
    } catch (e) {
      console.error("Fetch photos error:", e);
      set({ loading: false });
    }
  },

  searchPhotos: async (query: string) => {
    set({ loading: true });
    try {
      // const data = await searchMockPhotos(query); // for test requests
      const data = await searchPhotos(query);
      set({ photos: data, loading: false });
    } catch (e) {
      console.error("Search photos error:", e);
      set({ loading: false });
    }
  },
}));
