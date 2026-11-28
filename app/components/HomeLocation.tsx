"use client";
import { useState } from "react";

const mapEmbed = "https://www.google.com/maps?q=-11.5453985,-77.2588947&z=15&output=embed";
const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Hotel%20BlueThree%20Chancay";
// Straight-line distances from the hotel map pin to OpenStreetMap destinations.
const nearby = [
  { name: "Castillo de Chancay", distance: 3.5 },
  { name: "Museo Municipal de Chancay", distance: 2.3 },
  { name: "Plaza de Armas de Chancay", distance: 2.3 },
  { name: "Playa Chorrillos", distance: 3 },
  { name: "Plaza de Armas de Huaral", distance: 7.9 },
  { name: "Eco Truly Park", distance: 11.3 },
];
const airportDistance = 55;

export default function HomeLocation({ language = "es" }: { language?: "es" | "en" }) {
  const [tab, setTab] = useState<"nearby" | "airports">("nearby");
  const en = language === "en";
  const distanceFormat = new Intl.NumberFormat(en ? "en-US" : "es-PE", { style: "unit", unit: "kilometer" });
  return (
    <section className="home-location" aria-labelledby="home-location-heading">
      <div className="home-location-inner">
        <h2 id="home-location-heading">{en ? "Location and transportation" : "Ubicación y transporte"}</h2>
        <p className="home-location-description">{en ? "Hotel BlueThree is located in Chancay, in the Buena Vista residential area near Las Tres Pirámides." : "Hotel BlueThree se encuentra en Chancay, en la zona residencial Buena Vista, cerca de Las Tres Pirámides."}</p>
        <div className="home-location-columns">
          <div className="home-location-details">
            <div className="home-location-tabs" role="tablist" aria-label={en ? "Location information" : "Información de ubicación"}>
              <button type="button" role="tab" id="home-nearby-tab" aria-controls="home-location-panel" aria-selected={tab === "nearby"} className={tab === "nearby" ? "is-active" : ""} onClick={() => setTab("nearby")}>{en ? "What's nearby" : "Lugares cercanos"}</button>
              <button type="button" role="tab" id="home-airports-tab" aria-controls="home-location-panel" aria-selected={tab === "airports"} className={tab === "airports" ? "is-active" : ""} onClick={() => setTab("airports")}>{en ? "Airports" : "Aeropuertos"}</button>
            </div>
            <div id="home-location-panel" role="tabpanel" aria-labelledby={tab === "nearby" ? "home-nearby-tab" : "home-airports-tab"}>
              {tab === "nearby" ? (
                <ul className="home-location-list">
                  {nearby.map(({ name, distance }) => (
                    <li key={name}>
                      <span aria-hidden="true">⌖</span>
                      <strong>{name}</strong>
                      <span className="home-location-distance">{distanceFormat.format(distance)}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="home-location-airport">
                  <div className="home-location-airport-heading">
                    <strong>{en ? "Jorge Chávez International Airport (LIM)" : "Aeropuerto Internacional Jorge Chávez (LIM)"}</strong>
                    <span className="home-location-distance">{distanceFormat.format(airportDistance)}</span>
                  </div>
                  <p>{en ? "Airport transfers may be arranged with the hotel for an additional charge." : "Se pueden coordinar traslados con el hotel por un cargo adicional."}</p>
                  <a href={en ? "/en/contact" : "/contacto"}>{en ? "Ask about airport transfers" : "Consultar traslados al aeropuerto"}</a>
                </div>
              )}
              <p className="home-location-distance-note">{en ? "Approximate straight-line distances from the hotel." : "Distancias aproximadas en línea recta desde el hotel."}</p>
            </div>
          </div>
          <div className="home-location-map-wrap"><iframe title={en ? "Hotel BlueThree Chancay location map" : "Mapa de ubicación de Hotel BlueThree Chancay"} src={mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /><a href={mapsUrl} target="_blank" rel="noopener noreferrer">{en ? "Get directions ↗" : "Cómo llegar ↗"}</a></div>
        </div>
      </div>
    </section>
  );
}
