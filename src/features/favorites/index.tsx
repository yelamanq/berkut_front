import PhotoGrid from "@/components/shared/PhotoGrid";
import { useFavoriteStore } from "@/store/favoriteStore";

export default function Favorites() {
  const favorites = useFavoriteStore((state) => state.favorites);

  return (
    <section className="">
      <p className="text-[30px] font-semibold mt-[40px] w-full text-center">
        Favorites
      </p>
      <PhotoGrid photos={favorites} className="mt-[60px]" />
    </section>
  );
}
