import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { Bird } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Photo } from "@/types/photo";

type Props = {
  photos: Photo[] | null;
  className?: string;
};

export default function PhotoGrid({ photos, className }: Props) {
  const navigate = useNavigate();

  const photoHandler = (id: string) => {
    navigate(`/photo/${id}`);
  };

  const iconRef = useRef<SVGSVGElement>(null);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!iconRef.current) return;

      const rect = iconRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;

      setFlipped(e.clientX < centerX);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-[30px] md:px-[60px] lg:px-[100px] mb-[50px]",
        className
      )}
    >
      {photos === null ? (
        Array.from({ length: 9 }).map((_, i) => (
          <Skeleton key={i} className="w-full h-[400px] rounded-xl" />
        ))
      ) : photos.length === 0 ? (
        <div className="col-span-full flex flex-col justify-center items-center gap-3">
          <Bird
            ref={iconRef}
            className={`w-[80px] h-[80px] transition-transform duration-200 ${
              flipped ? "-scale-x-100" : "scale-x-100"
            }`}
            color="#313131"
          />
          <p className="text-[24px] font-semibold text-[#313131]">
            Results not found.
          </p>
        </div>
      ) : (
        photos.map((photo) => (
          <img
            onClick={() => photoHandler(photo.id)}
            key={photo.id}
            src={photo.urls.small}
            alt={photo.alt_description || ""}
            className="w-full h-[400px] md:h-[300px] lg:h-[400px] object-cover rounded-md transition-transform duration-300 ease-in-out hover:scale-103"
          />
        ))
      )}
    </section>
  );
}
