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
    <header className="section-wrap">
      <h1 className="py-6 text-center text-[32px] leading-tight font-bold text-[#002b55] sm:py-7 sm:text-[40px]">{en ? "Rooms and suites" : "Habitaciones y suites"}</h1>
      <div className="mb-4 sm:mb-5">
        <h2 className="pb-2 text-center text-lg font-bold text-[#002b55]">{en ? "Your stay includes" : "Tu estadía incluye"}</h2>
        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-base">
          {["Wi-Fi", "No fumar", "Estacionamiento incluido", "Aire acondicionado", "Calefacción", "Minibar"].filter(feature => rooms.length > 0 && rooms.every(room => room.features.includes(feature))).map(feature => (
            <li key={feature} className="flex items-center gap-1">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg>
              {feature === "No fumar" ? (en ? "Non-smoking rooms" : "Habitaciones para no fumadores") : tr(feature)}
            </li>
          ))}
        </ul>
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
