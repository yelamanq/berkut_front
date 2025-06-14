import { useEffect, useState } from "react";
import { useFavoriteStore } from "../store/favoriteStore";

export function useIsFavorite(photoId: string) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const favorites = useFavoriteStore((state) => state.favorites);
  const isFavoriteFn = useFavoriteStore((state) => state.isFavorite);

  useEffect(() => {
    setIsFavorite(isFavoriteFn(photoId));
  }, [favorites, photoId, isFavoriteFn]);

  return isFavorite;
}
