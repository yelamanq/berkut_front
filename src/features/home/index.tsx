import { useEffect } from "react";
import Search from "./Search";
import PhotoGrid from "./PhotoGrid";
import { usePhotoStore } from "@/store/photoStore";
import ScrollToTop from "./ScrollToTop";

export default function Home() {
  const { fetchPhotos } = usePhotoStore();

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div>
      <ScrollToTop />
      <Search />
      <PhotoGrid />
    </div>
  );
}
