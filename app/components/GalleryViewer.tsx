"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { GalleryCategory, GalleryPhoto } from "../data/gallery";

const labels = {
  es: {
    categories: {
      all: "Todas",
      hotel: "Hotel",
      rooms: "Habitaciones",
      dining: "Gastronomía",
      amenities: "Comodidades",
      events: "Eventos",
    },
    filters: "Categorías de la galería",
    viewer: "Visor de fotografías",
    open: "Ampliar",
    close: "Cerrar galería",
    previous: "Foto anterior",
    next: "Foto siguiente",
    of: "de",
  },
  en: {
    categories: {
      all: "All",
      hotel: "Hotel",
      rooms: "Rooms",
      dining: "Dining",
      amenities: "Amenities",
      events: "Events",
    },
    filters: "Gallery categories",
    viewer: "Photo viewer",
    open: "Enlarge",
    close: "Close gallery",
    previous: "Previous photo",
    next: "Next photo",
    of: "of",
  },
};

const categories = [
  "all", "hotel", "rooms", "dining", "amenities", "events",
] as const;

export function GalleryViewer({
  photos: allPhotos,
  locale,
}: {
  photos: GalleryPhoto[];
  locale: keyof typeof labels;
}) {
  const [category, setCategory] = useState<GalleryCategory | "all">("all");
  const [selected, setSelected] = useState<number | null>(null);
  const copy = labels[locale];
  const photos = category === "all"
    ? allPhotos
    : allPhotos.filter((photo) => photo.category === category);
  const selectedPhoto = selected === null ? undefined : photos[selected];

  useEffect(() => {
    if (selected === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowRight") {
        setSelected((index) => index === null ? null : (index + 1) % photos.length);
      }
      if (event.key === "ArrowLeft") {
        setSelected((index) => index === null ? null : (index - 1 + photos.length) % photos.length);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected, photos.length]);

  return (
    <>
      <div className="content-gallery-filters" role="group" aria-label={copy.filters}>
        {categories.map((id) => (
          <button
            key={id}
            type="button"
            aria-pressed={category === id}
            onClick={() => {
              setSelected(null);
              setCategory(id);
            }}
            className="content-gallery-filter"
          >
            {copy.categories[id]}
          </button>
        ))}
      </div>
      <div className="content-gallery-grid">
        {photos.map((photo, index) => (
          <button
            className="content-gallery-item"
            key={photo.src}
            type="button"
            onClick={() => setSelected(index)}
            aria-label={`${copy.open}: ${photo.name}`}
          >
            <Image
              width={1200}
              height={800}
              sizes="(min-width: 1200px) 33vw, 50vw"
              src={photo.src}
              alt={photo.name}
            />
          </button>
        ))}
      </div>
      {selected !== null && selectedPhoto && (
        <div
          className="content-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={copy.viewer}
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelected(null);
          }}
        >
          <button type="button" className="content-lightbox-close" onClick={() => setSelected(null)} aria-label={copy.close}>×</button>
          <button
            type="button"
            className="content-lightbox-arrow"
            onClick={() => setSelected((selected - 1 + photos.length) % photos.length)}
            aria-label={copy.previous}
          >‹</button>
          <figure>
            <Image width={1200} height={800} src={selectedPhoto.src} alt={selectedPhoto.name} />
            <figcaption>{selectedPhoto.name} · {selected + 1} {copy.of} {photos.length}</figcaption>
          </figure>
          <button
            type="button"
            className="content-lightbox-arrow"
            onClick={() => setSelected((selected + 1) % photos.length)}
            aria-label={copy.next}
          >›</button>
        </div>
      )}
    </>
  );
}
