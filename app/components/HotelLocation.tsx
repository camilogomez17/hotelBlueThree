import { whatsapp } from "../data/hotel";

const address = "Residencial Buena Vista – Las Tres Pirámides, Chancay 15130, Perú";
const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Hotel%20BlueThree%20Chancay";
const mapEmbed = "https://www.google.com/maps?q=-11.5453985,-77.2588947&z=15&output=embed";

export default function HotelLocation({ language = "es" }: { language?: "es" | "en" }) {
  const en = language === "en";
  return <main className="hotel-location-page">
    <section className="section-wrap hotel-location-intro">
      <p className="eyebrow">HOTEL BLUETHREE CHANCAY</p>
      <h1>{en ? "Location and transportation" : "Ubicación y transporte"}</h1>
      <p>{address}</p>
      <a href={mapsUrl} target="_blank" rel="noopener noreferrer">{en ? "Get directions ↗" : "Cómo llegar ↗"}</a>
    </section>
    <section className="section-wrap">
      <iframe className="hotel-location-map" title={en ? "Map of Hotel BlueThree Chancay" : "Mapa de Hotel BlueThree Chancay"} src={mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
      <p className="hotel-location-description">{en ? "Hotel BlueThree is located in Chancay, in the Buena Vista residential area near Las Tres Pirámides." : "Hotel BlueThree se encuentra en Chancay, en la zona residencial Buena Vista, cerca de Las Tres Pirámides."}</p>
      <div className="hotel-location-info">
        <section><h2>{en ? "Parking" : "Estacionamiento"}</h2><dl><div><dt>{en ? "Self-parking" : "Estacionamiento"}</dt><dd>{en ? "Included with the room" : "Incluido con la habitación"}</dd></div></dl></section>
        <section><h2>{en ? "Transportation" : "Transporte"}</h2><dl><div><dt>{en ? "Airport transfers" : "Traslados al aeropuerto"}</dt><dd>{en ? "Available for an additional charge" : "Disponible con cargo adicional"}</dd></div><div><dt>{en ? "Local transfers" : "Traslados por la zona"}</dt><dd>{en ? "Available for an additional charge" : "Disponible con cargo adicional"}</dd></div></dl><a href={whatsapp} target="_blank" rel="noopener noreferrer">{en ? "Arrange transportation ↗" : "Coordinar transporte ↗"}</a></section>
        <section><h2>{en ? "Nearby attractions" : "Lugares cercanos"}</h2><ul><li>Castillo de Chancay</li><li>Museo Municipal de Chancay</li><li>Eco Truly Park</li><li>Reserva Nacional de Lachay</li></ul></section>
      </div>
    </section>
  </main>;
}
