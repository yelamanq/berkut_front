import { useEffect } from "react";
import Search from "./Search";
import PhotoGrid from "../../components/shared/PhotoGrid";
import { usePhotoStore } from "@/store/photoStore";
import ScrollToTop from "./ScrollToTop";

export default function Home() {
  const { fetchPhotos, photos } = usePhotoStore();

  useEffect(() => {
    if (!photos || photos.length === 0) {
      fetchPhotos();
    }
  }, [photos, fetchPhotos]);

  return (
    <div>
      <ScrollToTop />
      <Search />
      <PhotoGrid photos={photos} className="mt-[100px]" />
    </div>
  );
}
