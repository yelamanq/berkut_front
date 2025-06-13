import type { Photo } from "../../types/photo";

type Props = {
  photos: Photo[] | null;
};

export default function PhotoGrid({ photos }: Props) {
  return (
    <section>
      {photos &&
        photos.map((photo) => (
          <img
            src={photo.urls.small}
            alt={photo.alt_description ? photo.alt_description : ""}
            key={photo.id}
          />
        ))}
    </section>
  );
}
