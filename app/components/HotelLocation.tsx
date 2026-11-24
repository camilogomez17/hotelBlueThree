import { whatsapp } from "../data/hotel";
import Image from 'next/image'

const address = "Residencial Buena Vista – Las Tres Pirámides, Chancay 15130, Perú";
const mapsUrl = "https://www.google.com/maps/dir/?api=1&destination=-11.5453985,-77.2588947";
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
    <section className="hotel-location-wide">
      <div className="hotel-map-frame"><iframe className="hotel-location-map" title={en ? "Map of Hotel BlueThree Chancay" : "Mapa de Hotel BlueThree Chancay"} src={mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /><a className="hotel-map-brand" href={mapsUrl} target="_blank" rel="noopener noreferrer"><Image src="/logo2.jpeg" alt="" width="48" height="48"/><span><strong>Hotel BlueThree Chancay</strong><br/>{en ? "Get directions ↗" : "Cómo llegar ↗"}</span></a></div>
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
          <h2>{en ? "Airports" : "Aeropuertos"}</h2>
          <div className="hotel-location-panel-body">
            <div className="hotel-location-airport">
              <div className="hotel-location-airport-heading">
                <div className="hotel-location-airport-name">
                  <svg aria-hidden="true" viewBox="0 0 24 24" width="28" height="28" fill="none"><path d="M21 3 3 10l7 3 3 8 8-18Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="m10 13 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  <strong>{en ? "Jorge Chávez International Airport (LIM)" : "Aeropuerto Internacional Jorge Chávez (LIM)"}</strong>
                </div>
              </div>
              <p>{en ? "Airport shuttle" : "Traslado al aeropuerto"}</p>
              <div className="hotel-location-airport-status">
                <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none"><path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <strong>{en ? "Available" : "Disponible"}</strong>
              </div>
              <p className="hotel-location-airport-note">{en ? "Available on request for an additional charge." : "Disponible a solicitud con cargo adicional."}</p>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer">{en ? "Arrange airport transfer ↗" : "Coordinar traslado ↗"}</a>
            </div>
          </div>
        </section>
        <section className="hotel-location-info-panel">
          <h2>{en ? "What's nearby" : "Lugares cercanos"}</h2>
          <div className="hotel-location-panel-body">
            <ul className="hotel-location-facts hotel-location-nearby">
              {[
                ["Castillo de Chancay", 16],
                ["Museo Municipal de Chancay", 13],
                ["Plaza de Armas de Chancay", 13],
                ["Playa Chorrillos", 16],
                ["Plaza de Armas de Huaral", 16],
                ["Eco Truly Park", 26],
              ].map(([name, minutes]) => <li key={name}><strong>{name}</strong><span>{en ? `${minutes} min drive` : `${minutes} min en auto`}</span></li>)}
            </ul>
            <p className="hotel-location-nearby-note">{en ? "Approximate driving times; traffic may affect travel." : "Tiempos aproximados en auto; pueden variar según el tráfico."}</p>
          </div>
        </section>
      </div>
    </section>
  </main>;
}
