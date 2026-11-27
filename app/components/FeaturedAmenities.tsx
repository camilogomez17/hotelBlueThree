"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function FeaturedAmenities({ language }: { language: "es" | "en" }) {
  const es = language === "es";
  const [active, setActive] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [open, setOpen] = useState(false);
  const items = [
    { title: "Jacuzzi", image: "/organized_photos/bathrooms/whirlpool-tub-and-glass-shower-booking-775018766.jpg", href: es ? "/habitaciones" : "/en/rooms" },
    { title: es ? "Decoración de habitaciones" : "Room decoration", image: "/organized_photos/rooms/bed-with-decorative-petal-arrangement-tripadvisor-23-7f-e9-57.jpg", href: es ? "/eventos" : "/en/events" },
    { title: es ? "Cafetería" : "Cafeteria", image: "/organized_photos/dining/FoodMenu.jpeg", href: es ? "/gastronomia" : "/en/dining" },
    { title: es ? "Transporte privado" : "Private transport", image: null, href: es ? "/contacto" : "/en/contact" },
    { title: es ? "Salón de eventos" : "Event hall", image: "/organized_photos/events/CorporateEvents.jpeg", href: es ? "/eventos" : "/en/events" },
  ];
  const move = (offset: number) => setActive(current => (current + offset + items.length) % items.length);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  const item = items[active];
  return (
    <section className="featured-amenities featured-service-gallery" aria-labelledby="featured-amenities-title">
      <h2 id="featured-amenities-title">{es ? "Servicios destacados" : "Featured amenities"}</h2>
      <div className="filmstrip-frame" id="featured-amenities">
        <div className="filmstrip-track">
          {[-1, 0, 1].map(offset => {
            const photo = items[(active + offset + items.length) % items.length];
            return <button key={offset} type="button" className={offset === 0 ? "filmstrip-slide is-current" : "filmstrip-slide"} onClick={() => offset === 0 ? setOpen(true) : move(offset)} aria-label={photo.title}>
              {photo.image ? <Image src={photo.image} alt={photo.title} width={1200} height={800} /> : <span className="featured-service-placeholder"><svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m5 11 2-6h10l2 6M3 11h18v7H3zM5 18v2m14-2v2M6 14h2m8 0h2"/></svg></span>}
              <span className="featured-amenity-shade"><strong>{photo.title}</strong></span>
            </button>;
          })}
        </div>
        <button className="filmstrip-arrow filmstrip-prev" type="button" onClick={() => move(-1)} aria-label={es ? "Anterior" : "Previous"}>‹</button>
        <button className="filmstrip-arrow filmstrip-next" type="button" onClick={() => move(1)} aria-label={es ? "Siguiente" : "Next"}>›</button>
        <button className="filmstrip-count" type="button" onClick={() => setShowAll(!showAll)} aria-expanded={showAll}>{active + 1}/{items.length}</button>
      </div>
      {showAll && <div className="filmstrip-thumbnails">{items.map((photo, index) => <button key={photo.title} type="button" className={active === index ? "filmstrip-thumb is-active" : "filmstrip-thumb"} onClick={() => setActive(index)} aria-label={photo.title}>{photo.image ? <Image src={photo.image} alt={photo.title} width={1200} height={800} /> : photo.title}</button>)}</div>}
      {open && <div className="featured-amenity-backdrop" onClick={() => setOpen(false)}>
        <div role="dialog" aria-modal="true" aria-label={item.title} className={`featured-amenity-dialog${active === 2 || active === 4 ? " featured-amenity-dialog--menu" : ""}`} onClick={event => event.stopPropagation()}>
          <button type="button" className="featured-amenity-close" onClick={() => setOpen(false)} aria-label={es ? "Cerrar" : "Close"}>×</button>
          {item.image && <Image src={item.image} alt={item.title} width={active === 2 || active === 4 ? 800 : 1200} height={active === 2 || active === 4 ? 1200 : 800} />}
          <h3>{item.title}</h3><a className="button button-dark" href={item.href}>{es ? "Ver más" : "Learn more"}</a>
        </div>
      </div>}
    </section>
  );
}
