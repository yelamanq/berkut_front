import { useEffect, useState } from "react";
import type { Photo } from "../../types/photo";
import { fetchMockPhotos } from "../../api/mock";
import Search from "./Search";
import PhotoGrid from "./PhotoGrid";

export default function Home() {
  const [photos, setPhotos] = useState<Photo[] | null>(null);

  useEffect(() => {
    fetchMockPhotos().then((data) => setPhotos(data));
  }, []);

  return (
    <div>
      <Search />
      <PhotoGrid photos={photos} />
    </div>
  );
}
