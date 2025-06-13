import { useEffect } from "react";
import Search from "./Search";
import PhotoGrid from "./PhotoGrid";
import { usePhotoStore } from "@/store/photoStore";

export default function Home() {
  const { photos, fetchPhotos } = usePhotoStore();

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div>
      <Search />
      <PhotoGrid photos={photos} />
    </div>
  );
}
