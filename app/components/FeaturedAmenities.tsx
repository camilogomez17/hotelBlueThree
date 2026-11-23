"use client";

import { useEffect, useState } from "react";

export default function FeaturedAmenities({ language }: { language: "es" | "en" }) {
  const [selected, setSelected] = useState<number | null>(null);
  const es = language === "es";
  const items = [
    { title: es ? "Jacuzzi" : "Jacuzzi", image: "/Amenities.jpeg", description: es ? "Disfruta de jacuzzis y vistas panorámicas, transporte privado, eventos corporativos, decoración de habitaciones y el menú de la cafetería. Consulta la disponibilidad de cada servicio con recepción." : "Enjoy jacuzzis and panoramic views, private transport, corporate events, room decorations, and our cafeteria menu. Confirm each service’s availability with reception." },
    { title: es ? "Gastronomía" : "Dining", image: "/FoodMenu.jpeg", description: es ? "Explora las opciones gastronómicas y consulta horarios y disponibilidad con recepción." : "Explore dining options and confirm opening hours and availability with reception." },
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
            <img src={item.image} alt={item.title} loading="lazy" />
            <span className="featured-amenity-shade"><strong>{item.title}</strong></span>
          </button>
        ))}
      </div>
      {selected !== null && (
        <div className="featured-amenity-backdrop" onClick={() => setSelected(null)}>
          <div role="dialog" aria-modal="true" aria-label={items[selected].title} className="featured-amenity-dialog" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="featured-amenity-close" onClick={() => setSelected(null)} aria-label={es ? "Cerrar" : "Close"}>×</button>
            <img src={items[selected].image} alt={items[selected].title} />
            <h3>{items[selected].title}</h3>
            <p>{items[selected].description}</p>
          </div>
        </div>
      )}
    </section>
  );
}
