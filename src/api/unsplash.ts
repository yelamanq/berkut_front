import axios from "axios";

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_KEY;

export const unsplashApi = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
});

export const fetchRandomPhotos = async () => {
  const res = await unsplashApi.get("/photos/random", {
    params: {
      count: 9,
    },
  });

  return res.data;
};

export const searchPhotos = async (query: string) => {
  const res = await unsplashApi.get("search/photos", {
    params: {
      query,
      per_page: 9,
    },
  });
  console.log(res);
  return res.data.results;
};

export const getPhotoById = async (id: string) => {
  const res = await unsplashApi.get(`/photos/${id}`);
  return res.data;
};
