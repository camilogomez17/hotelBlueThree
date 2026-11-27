import { whatsapp } from "../data/hotel";

type Language = "es" | "en";

const information = {
  en: [
    { icon: "P", title: "Parking", rows: [["Self-parking", "Complimentary"], ["Valet parking", "Not available"], ["EV charging", "Not available"], ["Secured", "Available"], ["Covered", "Not available"], ["In/Out privileges", "Not available"]] },
    { icon: "↗", title: "Airport shuttle", rows: [["Jorge Chávez International Airport", "Private transport by request; confirm price and availability"]] },
    { icon: "♧", title: "Kids services", rows: [["Cribs", "By request"], ["Childcare", "Not available"], ["Kids menu", "Ask the cafeteria"], ["Connecting rooms", "Confirm availability"]] },
    { icon: "⊘", title: "Smoke-free", rows: [["Smoking rooms available", "No"], ["Smoking policy", "A penalty may apply for smoking in non-smoking rooms"]] },
    { icon: "☕", title: "Breakfast", rows: [["Availability", "Ask reception"], ["Type", "Cafeteria menu; confirm options and pricing"]] },
    { icon: "♢", title: "Pets", rows: [["Pets", "Not allowed"]] },
  ],
  es: [
    { icon: "P", title: "Estacionamiento", rows: [["Estacionamiento propio", "Gratuito"], ["Servicio de valet", "No disponible"], ["Carga de vehículos eléctricos", "No disponible"], ["Vigilado", "Disponible"], ["Techado", "No disponible"], ["Entradas y salidas", "No disponibles"]] },
    { icon: "↗", title: "Traslado al aeropuerto", rows: [["Aeropuerto Internacional Jorge Chávez", "Transporte privado previa solicitud; confirmar precio y disponibilidad"]] },
    { icon: "♧", title: "Servicios para niños", rows: [["Cunas", "Previa solicitud"], ["Cuidado infantil", "No disponible"], ["Menú infantil", "Consultar con cafetería"], ["Habitaciones comunicadas", "Confirmar disponibilidad"]] },
    { icon: "⊘", title: "Espacios libres de humo", rows: [["Habitaciones para fumadores", "No"], ["Política de fumadores", "Puede aplicarse una penalidad por fumar en habitaciones para no fumadores"]] },
    { icon: "☕", title: "Desayuno", rows: [["Disponibilidad", "Consultar con recepción"], ["Tipo", "Menú de cafetería; confirmar opciones y precios"]] },
    { icon: "♢", title: "Mascotas", rows: [["Mascotas", "No permitidas"]] },
  ],
} as const;

export default function ForYourStay({ language, showTitle = true }: { language: Language; showTitle?: boolean }) {
  const es = language === "es";
  return (
    <section className="for-your-stay" aria-labelledby={showTitle ? "for-your-stay-title" : undefined} aria-label={showTitle ? undefined : es ? "Información de estadía" : "Stay information"}>
      <div className="for-your-stay-top">
        {showTitle && <h2 id="for-your-stay-title">{es ? "Para tu estadía" : "For your stay"}</h2>}
        <a className="button button-dark" href={whatsapp} target="_blank" rel="noopener noreferrer">{es ? "Consultar habitaciones" : "Find a Room"}</a>
      </div>
      <div className="for-your-stay-contact">
        <p>{es ? "Entrada" : "Check-in"} <strong>2:00 p. m.</strong> <span aria-hidden="true">→</span> {es ? "Salida" : "Check-out"} <strong>11:00 a. m.</strong></p>
        <div className="for-your-stay-links">
          <a href="https://www.google.com/maps/search/?api=1&query=Hotel+BlueThree+Chancay+Peru" target="_blank" rel="noopener noreferrer">⌖ {es ? "Cómo llegar" : "Directions"}</a>
          <a href={whatsapp} target="_blank" rel="noopener noreferrer">✉ {es ? "Contactar recepción" : "Contact reception"}</a>
        </div>
      </div>
      <p className="for-your-stay-address">Residencial Buena Vista – Las Tres Pirámides, Chancay 15130, Perú</p>
      <div className="for-your-stay-grid">
        {information[language].map((tile) => (
          <article className="for-your-stay-tile" key={tile.title}>
            <span className="for-your-stay-icon" aria-hidden="true">{tile.icon}</span>
            <div>
              <h3>{tile.title}</h3>
              <dl>{tile.rows.map(([label, value]) => (
                <div key={label}><dt>{label}:</dt><dd>{value}</dd></div>
              ))}</dl>
              {tile.title === (es ? "Servicios para niños" : "Kids services") && (
                <details className="for-your-stay-more">
                  <summary>{es ? "Información para familias" : "Family-friendly details"}</summary>
                  <p>{es ? "Consulta la capacidad de la habitación y las opciones para familias antes de reservar." : "Confirm room capacity and family options before booking."}</p>
                </details>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
