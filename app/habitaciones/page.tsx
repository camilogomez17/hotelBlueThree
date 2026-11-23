import type { Metadata } from "next";
import { rooms, whatsapp, tripAdvisor } from "../data/hotel";

export const metadata: Metadata = {
  title: "Habitaciones y suites | Hotel BlueThree Chancay",
  description: "Explora las habitaciones y suites de Hotel BlueThree y consulta disponibilidad.",
};

export default function Habitaciones() {
  return <main className="template-page rooms-catalog">
    <section className="template-page-hero">
      <p className="eyebrow">HOTEL BLUETHREE CHANCAY</p>
      <h1>Habitaciones y suites</h1>
      <p>Descubre nuestras opciones de alojamiento. Abre cada habitación para ver sus características y consultar disponibilidad.</p>
    </section>
    <section className="section-wrap content-page-section">
      <div className="rooms-catalog-grid">
        {rooms.map((room, index) => <article className="rooms-catalog-card" key={room.src}>
          <div className="rooms-catalog-photo"><img src={room.src} alt={room.name} loading={index < 2 ? "eager" : "lazy"} /></div>
          <div className="rooms-catalog-content">
            <p className="rooms-catalog-number">HABITACIÓN {String(index + 1).padStart(2, "0")}</p>
            <h2>{room.name}</h2>
            <p>{room.description}</p>
            <details className="rooms-catalog-details">
              <summary>Ver detalles de la habitación</summary>
              <div className="rooms-catalog-expanded">
                <p>La fotografía corresponde a la categoría indicada. La distribución, capacidad, servicios incluidos y tarifas deben confirmarse directamente con recepción.</p>
                <p>Consulta las opciones para tus fechas antes de reservar.</p>
              </div>
            </details>
            <div className="rooms-catalog-actions">
              <a className="button button-dark" href={whatsapp} target="_blank" rel="noopener noreferrer">Consultar disponibilidad ↗</a>
            </div>
          </div>
        </article>)}
      </div>
      <div className="content-page-note">
        <p>Los nombres, las características y la disponibilidad están sujetos a confirmación del hotel.</p>
        <a href={tripAdvisor} target="_blank" rel="noopener noreferrer">Ver opciones en Tripadvisor ↗</a>
      </div>
    </section>
  </main>;
}
