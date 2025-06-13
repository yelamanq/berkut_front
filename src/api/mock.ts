import axios from "axios";
import type { Photo } from "../types/photo";

export const fetchMockPhotos = async (): Promise<Photo[]> => {
  const res = await axios.get("/src/mock/photos.json");
  return res.data;
};

export const searchMockPhotos = async (query: string): Promise<Photo[]> => {
  const allPhotos = await fetchMockPhotos();
  const data = allPhotos.filter((p) =>
    p.alt_description?.toLowerCase().includes(query.toLowerCase())
  );
  return data;
};

export const getMockPhoto = async (id: string): Promise<Photo | undefined> => {
  const allPhotos = await fetchMockPhotos();
  const data = allPhotos.find((p) => p.id === id);
  return data;
};
