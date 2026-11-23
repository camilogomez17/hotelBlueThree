"use client";

import { useEffect, useState } from "react";
import { rooms, whatsapp } from "../data/hotel";

export default function HomeRoomCards() {
  const [selected, setSelected] = useState<number | null>(null);
  useEffect(() => {
    if (selected === null) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [selected]);

  return (
    <section className="home-room-showcase section-wrap" id="habitaciones" aria-labelledby="home-room-heading">
      <h2 id="home-room-heading">Habitaciones y suites</h2>
      <div className="home-room-cards" aria-label="Habitaciones y suites">
        {rooms.slice(0, 4).map((room, index) => (
          <article className="home-room-card" key={room.src}>
            <div className="home-room-image"><img src={room.src} alt={room.name} loading="lazy" /></div>
            <div className="home-room-card-body">
              <h3>{room.name}</h3>
              <button type="button" className="home-room-details" onClick={() => setSelected(index)}>Ver detalles de la habitación</button>
              <div className="home-room-highlights">
                <strong>{room.name.toLowerCase().includes("suite") ? "Suite" : "Habitación"}</strong>
                <ul>
                  <li>{room.name.toLowerCase().includes("jacuzzi") ? "Jacuzzi" : "Estadía cómoda"}</li>
                  {room.name.toLowerCase().includes("dos camas") && <li>Dos camas</li>}
                  {room.name.toLowerCase().includes("vista") && <li>Vistas</li>}
                </ul>
              </div>
              <a className="home-room-book" href={whatsapp} target="_blank" rel="noopener noreferrer">Consultar tarifas</a>
            </div>
          </article>
        ))}
      </div>
      <div className="home-room-all"><a href="/habitaciones">Explorar todas las habitaciones</a></div>
      {selected !== null && (
        <div className="home-room-modal-backdrop" onClick={() => setSelected(null)}>
          <div className="home-room-modal" role="dialog" aria-modal="true" aria-label={rooms[selected].name} onClick={(event) => event.stopPropagation()}>
            <button type="button" className="home-room-modal-close" onClick={() => setSelected(null)} aria-label="Cerrar">×</button>
            <img src={rooms[selected].src} alt={rooms[selected].name} />
            <h3>{rooms[selected].name}</h3>
            <p>{rooms[selected].description}</p>
            <a className="home-room-book" href={whatsapp} target="_blank" rel="noopener noreferrer">Consultar disponibilidad y tarifas</a>
          </div>
        </div>
      )}
    </section>
  );
}
