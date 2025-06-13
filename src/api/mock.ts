import axios from "axios";
import type { Photo } from "../types/photo";

export const fetchMockPhotos = async (): Promise<Photo[]> => {
  const res = await axios.get("/src/mock/photos.json");
  return res.data;
};
