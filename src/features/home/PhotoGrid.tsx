import type { Photo } from "../../types/photo";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  photos: Photo[] | null;
};

export default function PhotoGrid({ photos }: Props) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[100px] px-[30px] md:px-[60px] lg:px-[100px]">
      {!photos
        ? Array.from({ length: 9 }).map((_, i) => (
            <Skeleton key={i} className="w-full h-[400px] rounded-xl" />
          ))
        : photos.map((photo) => (
            <img
              key={photo.id}
              src={photo.urls.small}
              alt={photo.alt_description || ""}
              className="w-full h-[400px] md:h-[300px] lg:h-[400px] object-cover rounded-md transition-transform duration-300 ease-in-out hover:scale-103"
            />
          ))}
    </section>
  );
}
