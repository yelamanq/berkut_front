import { getMockPhoto } from "@/api/mock";
import { getPhotoById } from "@/api/unsplash";
import { Skeleton } from "@/components/ui/skeleton";
import { useIsFavorite } from "@/hooks/useIsFavorite";
import { useFavoriteStore } from "@/store/favoriteStore";
import type { Photo } from "@/types/photo";
import { Maximize, Download, Heart, HeartOff } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PhotoDetail() {
  const { id } = useParams();
  const [photo, setPhoto] = useState<Photo | null>(null);
  const toggleFavorite = useFavoriteStore((state) => state.toggleFavorite);
  const isFavorite = useIsFavorite(photo?.id || "");

  useEffect(() => {
    if (id) {
      // getPhotoById(id).then((data) => setPhoto(data));
      getMockPhoto(id).then((data) => setPhoto(data)); // for test requests
    }
  }, [id]);

  const toggleFavoriteHandler = () => {
    if (photo) toggleFavorite(photo);
  };

  return (
    <div>
      {!photo ? (
        <Skeleton />
      ) : (
        <div className="relative w-full h-[650px] flex flex-col px-[30px] md:px-[60px] lg:px-[100px]">
          <div className="absolute inset-0 bg-white z-0 md:hidden" />

          <div
            className="absolute inset-0 bg-cover bg-center filter grayscale z-0 hidden md:block"
            style={{ backgroundImage: `url(${photo.urls.regular})` }}
          />
          <div className="absolute inset-0 bg-black/60 z-10 hidden md:block" />

          <div className="z-20 flex justify-between mt-[40px]">
            <div className="flex items-center gap-3">
              <img
                src={photo.user.profile_image.small}
                alt=""
                className="rounded-sm border-2 border-white w-[46px] h-[46px]"
              />
              <div className="md:text-white">
                <p className="text-[22px]">{photo.user.name}</p>
                <p className="text-[12px] font-light">@{photo.user.username}</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div
                onClick={toggleFavoriteHandler}
                className="bg-white shadow-sm/20 rounded-md h-[40px] w-[40px] flex items-center justify-center cursor-pointer"
              >
                {isFavorite ? <HeartOff width={20} /> : <Heart width={20} />}
              </div>
              <div className="bg-[#FFF200] flex shadow-sm/20 rounded-md h-[40px] pl-[15px] pr-[15px] sm:pr-[20px] items-center gap-2 cursor-pointer">
                <Download width={20} />
                <p className="text-[18px] hidden sm:inline">Download</p>
              </div>
            </div>
          </div>
          <div className="relative z-30 mt-[40px] flex justify-center">
            <img
              src={photo.urls.regular}
              alt={photo.alt_description || ""}
              className="w-full object-cover h-full max-h-[650px] rounded-md md:shadow-2xl/70"
            />
            <Maximize
              color="white"
              className="absolute right-[30px] bottom-[30px] cursor-pointer"
            />
          </div>
        </div>
      )}
    </div>
  );
}
