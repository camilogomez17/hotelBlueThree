import { rooms, tripAdvisor, whatsapp } from "../data/hotel";

const translations: Record<string, string> = {
  "Habitación estándar": "Standard room", "Suite junior": "Junior suite", "Junior suite deluxe": "Deluxe junior suite",
  "Suite deluxe": "Deluxe suite", "Jacuzzi con dos camas, balcón y vista panorámica": "Two-bed room with jacuzzi, balcony and panoramic view",
  "Jacuzzi tántrica con vista al jardín": "Garden-view jacuzzi room",
  "Jacuzzi y balcón con vista al jardín": "Jacuzzi room with garden-view balcony",
  "Jacuzzi y balcón con vista panorámica": "Jacuzzi room with panoramic balcony",
  "2 personas": "2 guests", "1 cama de 2 plazas": "1 double bed", "1 cama de 2½ plazas": "1 large double bed",
  "1 cama de 1½ plazas": "1 single bed", "Smart TV 32 pulgadas": "32-inch Smart TV", "Smart TV 42 pulgadas": "42-inch Smart TV",
  "Aire acondicionado": "Air conditioning", "Calefacción": "Heating", "Minibar": "Minibar",
  "Intercomunicador": "Intercom", "Plancha": "Iron", "Jarra eléctrica": "Electric kettle",
  "Secadora de pelo": "Hair dryer", "Champú y jabón": "Shampoo and soap", "Toallas": "Towels",
  "No fumar": "Non-smoking", "Estacionamiento incluido": "Parking included", "Escritorio": "Desk",
  "Caja fuerte": "Safe", "Silla tántrica": "Tantric chair", "Vista al jardín": "Garden view",
  "Balcón y vista panorámica": "Balcony and panoramic view", "Balcón con vista al jardín": "Garden-view balcony",
  "Toallas y batas": "Towels and robes"
};

export default function RoomsCatalog({ language = "es" }: { language?: "es" | "en" }) {
  const en = language === "en";
  const tr = (s: string) => en ? (translations[s] ?? s) : s;
  return <main className="blue-rooms-page">
    <header className="blue-rooms-header section-wrap">
      <p className="eyebrow">HOTEL BLUETHREE CHANCAY</p>
      <h1>{en ? "Rooms & suites" : "Habitaciones y suites"}</h1>
      <p>{en ? "Find the right space for your stay. Explore room features and inquire about available rates." : "Encuentra el espacio ideal para tu estadía. Explora las características y consulta las tarifas disponibles."}</p>
      <div className="blue-rooms-rate">
        <div><span>{en ? "Tripadvisor standard-room reference" : "Referencia Tripadvisor: habitación estándar"}</span><strong>US$33–$41 <small>{en ? "/ night" : "/ noche"}</small></strong><small>{en ? "Historical average range; not a guaranteed rate. Taxes may be additional." : "Rango promedio de referencia; no es una tarifa garantizada. Impuestos no incluidos."}</small></div>
        <a href={tripAdvisor} target="_blank" rel="noopener noreferrer">{en ? "Check prices for your dates ↗" : "Consultar precios para tus fechas ↗"}</a>
      </div>
    </header>
    <section className="section-wrap blue-rooms-list" aria-label={en ? "Room categories" : "Categorías de habitaciones"}>
      {rooms.map((room, index) => {
        const highlights = room.features.filter(f => /cama|personas|Jacuzzi|Balcón|Vista|Smart TV/.test(f)).slice(0, 4);
        return <article className="blue-room" key={room.src}>
          <div className="blue-room-image"><img src={room.src} alt={tr(room.name)} loading={index < 2 ? "eager" : "lazy"}/><span>{String(index + 1).padStart(2,"0")} / {String(rooms.length).padStart(2,"0")}</span></div>
          <div className="blue-room-body">
            <p className="blue-room-kicker">{en ? "ROOM & SUITE" : "HABITACIÓN Y SUITE"}</p>
            <h2>{tr(room.name)}</h2>
            <p className="blue-room-description">{en ? tr(room.name) + ". " + highlights.map(tr).join(" · ") + "." : room.description}</p>
            <ul className="blue-room-highlights">{highlights.map(f => <li key={f}>{tr(f)}</li>)}</ul>
            <details className="blue-room-details"><summary>{en ? "View room details" : "Ver detalles de la habitación"} <span aria-hidden="true">⌄</span></summary>
              <div className="blue-room-detail-content"><h3>{en ? "Room amenities" : "Características de la habitación"}</h3><ul>{room.features.map(f => <li key={f}>{tr(f)}</li>)}</ul></div>
            </details>
            <div className="blue-room-bottom">
              <div><span>{en ? "Rate for your dates" : "Tarifa para tus fechas"}</span><strong>{en ? "Request rate" : "Consultar tarifa"}</strong></div>
              <a className="button button-dark" href={whatsapp} target="_blank" rel="noopener noreferrer">{en ? "Check availability ↗" : "Consultar disponibilidad ↗"}</a>
            </div>
          </div>
        </article>;
      })}
    </section>
    <footer className="section-wrap blue-rooms-footer"><p>{en ? "Rates vary by date and room category. Confirm final pricing and availability before booking." : "Las tarifas varían según la fecha y categoría. Confirma el precio final y la disponibilidad antes de reservar."}</p><a href={tripAdvisor} target="_blank" rel="noopener noreferrer">{en ? "View Hotel BlueThree on Tripadvisor ↗" : "Ver Hotel BlueThree en Tripadvisor ↗"}</a></footer>
  </main>;
}
