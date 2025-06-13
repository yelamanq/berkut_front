import { getPhotoById } from "@/api/unsplash";
import type { Photo } from "@/types/photo";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PhotoDetail() {
  const { id } = useParams();
  const [photo, setPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    if (id) {
      getPhotoById(id).then((data) => setPhoto(data));
    }
  }, [id]);

  return <div></div>;
}
