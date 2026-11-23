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
        <section className="hotel-location-info-panel">
          <h2>{en ? "Parking" : "Estacionamiento"}</h2>
          <div className="hotel-location-panel-body">
            <dl className="hotel-location-facts">
              <div><dt>{en ? "Self-parking:" : "Estacionamiento propio:"}</dt><dd>{en ? "Complimentary" : "Gratuito"}</dd></div>
              <div><dt>{en ? "Valet parking:" : "Servicio de valet:"}</dt><dd>{en ? "Confirm with hotel" : "Consultar al hotel"}</dd></div>
              <div><dt>{en ? "EV charging:" : "Carga de vehículos eléctricos:"}</dt><dd>{en ? "Confirm with hotel" : "Consultar al hotel"}</dd></div>
              <div><dt>{en ? "Secured:" : "Seguridad:"}</dt><dd>{en ? "Confirm with hotel" : "Consultar al hotel"}</dd></div>
              <div><dt>{en ? "Covered:" : "Estacionamiento techado:"}</dt><dd>{en ? "Confirm with hotel" : "Consultar al hotel"}</dd></div>
              <div><dt>{en ? "In/out privileges:" : "Entradas y salidas:"}</dt><dd>{en ? "Confirm with hotel" : "Consultar al hotel"}</dd></div>
            </dl>
          </div>
        </section>
        <section className="hotel-location-info-panel hotel-location-info-panel--base">
          <h2>{en ? "Transportation" : "Transporte"}</h2>
          <div className="hotel-location-panel-body">
            <div className="hotel-location-transport-title"><span aria-hidden="true">✈</span><strong>{en ? "Airport transfers" : "Traslados al aeropuerto"}</strong></div>
            <dl className="hotel-location-facts">
              <div><dt>{en ? "Service:" : "Servicio:"}</dt><dd>{en ? "Available on request" : "Disponible a solicitud"}</dd></div>
              <div><dt>{en ? "Cost:" : "Costo:"}</dt><dd>{en ? "Additional charge" : "Cargo adicional"}</dd></div>
              <div><dt>{en ? "Local transfers:" : "Traslados locales:"}</dt><dd>{en ? "Available for an additional charge" : "Disponibles con cargo adicional"}</dd></div>
            </dl>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer">{en ? "Arrange transportation ↗" : "Coordinar transporte ↗"}</a>
          </div>
        </section>
        <section className="hotel-location-info-panel">
          <h2>{en ? "What's nearby" : "Lugares cercanos"}</h2>
          <div className="hotel-location-panel-body">
            <ul className="hotel-location-facts hotel-location-nearby">
              {["Castillo de Chancay", "Museo Municipal de Chancay", "Eco Truly Park", "Reserva Nacional de Lachay"].map(name => <li key={name}><strong>{name}</strong><span>{en ? "Distance on request" : "Consultar distancia"}</span></li>)}
            </ul>
          </div>
        </section>
      </div>
    </section>
  </main>;
}
