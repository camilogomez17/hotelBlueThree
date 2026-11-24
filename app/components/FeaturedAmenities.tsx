"use client";

import { useEffect, useState } from "react";
import Image from 'next/image'

export default function FeaturedAmenities({ language }: { language: "es" | "en" }) {
  const [selected, setSelected] = useState<number | null>(null);
  const es = language === "es";
  const items = [
    { title: es ? "Salón de eventos" : "Event hall", image: "/CorporateEvents.jpeg", description: es ? "Consulta las opciones para reuniones y celebraciones." : "Ask about meeting and celebration options.", href: es ? "/eventos" : "/en/events" },
    { title: es ? "Menú de la cafetería" : "Food menu", image: "/FoodMenu.jpeg", description: es ? "Explora el menú de la cafetería." : "Explore the cafeteria menu.", href: es ? "/gastronomia" : "/en/dining" },
  ];
  useEffect(() => {
    if (selected === null) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);
  return (
    <section className="featured-amenities" aria-labelledby="featured-amenities-title">
      <h2 id="featured-amenities-title">{es ? "Servicios destacados" : "Featured amenities"}</h2>
      <div className="featured-amenities-grid" id="featured-amenities">
        {items.map((item, index) => (
          <button key={item.title} type="button" className="featured-amenity-tile" aria-label={item.title} aria-haspopup="dialog" onClick={() => setSelected(index)}>
            <Image src={item.image} alt={item.title} loading="lazy" />
            <span className="featured-amenity-shade"><strong>{item.title}</strong></span>
          </button>
        ))}
      </div>
      {selected !== null && (
        <div className="featured-amenity-backdrop" onClick={() => setSelected(null)}>
          <div role="dialog" aria-modal="true" aria-label={items[selected].title} className="featured-amenity-dialog" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="featured-amenity-close" onClick={() => setSelected(null)} aria-label={es ? "Cerrar" : "Close"}>×</button>
            <Image src={items[selected].image} alt={items[selected].title} />
            <h3>{items[selected].title}</h3>
            <p>{items[selected].description}</p><a className="button button-dark" href={items[selected].href}>{es ? "Ver más" : "Learn more"}</a>
          </div>
        </div>
      )}
    </section>
  );
}
