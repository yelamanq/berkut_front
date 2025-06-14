import { useEffect, useRef } from "react";
import Search from "./Search";
import PhotoGrid from "../../components/shared/PhotoGrid";
import { usePhotoStore } from "@/store/photoStore";
import ScrollToTop from "./ScrollToTop";

export default function Home() {
  const { fetchPhotos, photos } = usePhotoStore();

  const hasFetched = useRef(false);

  useEffect(() => {
    if (!hasFetched.current && (!photos || photos.length === 0)) {
      fetchPhotos();
      hasFetched.current = true;
    }
  }, []);

  return (
    <div>
      <ScrollToTop />
      <Search />
      <PhotoGrid photos={photos} className="mt-[100px]" />
    </div>
  );
}
