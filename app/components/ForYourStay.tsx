import { whatsapp } from "../data/hotel";

type Language = "es" | "en";

const information = {
  en: [
    { icon: "P", title: "Parking", rows: [["Self-parking", "Complimentary"], ["Valet parking", "Not available"], ["EV charging", "Not available"], ["Secured", "Available"], ["Covered", "Not available"], ["In/Out privileges", "Not available"]] },
    { icon: "↗", title: "Airport shuttle", rows: [["Jorge Chávez International Airport", "Private transport by request; confirm price and availability"]] },
    { icon: "♧", title: "Kids services", rows: [["Cribs", "By request"], ["Childcare", "Not available"], ["Kids menu", "Ask the cafeteria"], ["Connecting rooms", "Confirm availability"]] },
    { icon: "⊘", title: "Smoke-free", rows: [["Smoking rooms available", "No"], ["Smoking policy", "A penalty may apply for smoking in non-smoking rooms"]] },
    { icon: "☕", title: "Breakfast", rows: [["Availability", "Ask reception"], ["Type", "Cafeteria menu; confirm options and pricing"]] },
    { icon: "♢", title: "Pets", rows: [["Pets", "Pet-friendly"]] },
  ],
  es: [
    { icon: "P", title: "Estacionamiento", rows: [["Estacionamiento propio", "Gratuito"], ["Servicio de valet", "No disponible"], ["Carga de vehículos eléctricos", "No disponible"], ["Vigilado", "Disponible"], ["Techado", "No disponible"], ["Entradas y salidas", "No disponibles"]] },
    { icon: "↗", title: "Traslado al aeropuerto", rows: [["Aeropuerto Internacional Jorge Chávez", "Transporte privado previa solicitud; confirmar precio y disponibilidad"]] },
    { icon: "♧", title: "Servicios para niños", rows: [["Cunas", "Previa solicitud"], ["Cuidado infantil", "No disponible"], ["Menú infantil", "Consultar con cafetería"], ["Habitaciones comunicadas", "Confirmar disponibilidad"]] },
    { icon: "⊘", title: "Espacios libres de humo", rows: [["Habitaciones para fumadores", "No"], ["Política de fumadores", "Puede aplicarse una penalidad por fumar en habitaciones para no fumadores"]] },
    { icon: "☕", title: "Desayuno", rows: [["Disponibilidad", "Consultar con recepción"], ["Tipo", "Menú de cafetería; confirmar opciones y precios"]] },
    { icon: "♢", title: "Mascotas", rows: [["Mascotas", "Permitidas"]] },
  ],
} as const;

export default function ForYourStay({ language, showTitle = true }: { language: Language; showTitle?: boolean }) {
  const es = language === "es";
  return (
    <section className="for-your-stay" aria-labelledby="for-your-stay-title">
      <div className="for-your-stay-top">
        <h2 id="for-your-stay-title">{es ? (showTitle ? "Para tu estadía" : "Para su estadía") : "For your stay"}</h2>
        <a className="button button-dark" href={whatsapp} target="_blank" rel="noopener noreferrer">{es ? "Consultar habitaciones" : "Find a Room"}</a>
      </div>
      <div className="for-your-stay-contact">
        <p>{es ? "Entrada" : "Check-in"} <strong>2:00 p. m.</strong> <span aria-hidden="true">→</span> {es ? "Salida" : "Check-out"} <strong>11:00 a. m.</strong></p>
        <div className="for-your-stay-links">
          <a href="https://www.google.com/maps/search/?api=1&query=Hotel+BlueThree+Chancay+Peru" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true"><path d="m12 3.5c-3.58 0-6.5 2.92-6.5 6.5 0 1.4.46 2.74 1.31 3.88l4.79 6.42c.09.13.24.2.4.2.16 0 .31-.07.4-.2l4.8-6.4c.85-1.13 1.3-2.48 1.3-3.9 0-3.58-2.92-6.5-6.5-6.5zm4.4 9.8-4.4 5.87-4.39-5.88c-.73-.97-1.11-2.11-1.11-3.28 0-3.03 2.47-5.5 5.5-5.5s5.5 2.47 5.5 5.5c0 1.2-.38 2.34-1.1 3.3z" /><path d="m12 6.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zm0 6c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg><span>{es ? "Ubicación" : "Location"}</span><svg className="stay-external-icon" viewBox="0 0 10 10" width="14" height="14" fill="none" stroke="currentColor" aria-hidden="true"><path d="M3.6 1.3h5.3v5.3H3.6zM1.3 8.8V4.6h2.3v2h1.9v2.2z" /></svg></a>
          <a href="mailto:bluethreechancay@gmail.com"><svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true"><path d="m19.04 6.5s0 0-.01 0-.02 0-.03 0h-14s-.02 0-.03 0c0 0-.01 0-.02 0-.8.03-1.45.68-1.45 1.5v8c0 .83.67 1.5 1.5 1.5h14c.83 0 1.5-.67 1.5-1.5v-8c0-.81-.65-1.47-1.46-1.5zm-1.4 1-5.65 4.84-5.64-4.84h11.3zm1.85 8.5c0 .21-.14.39-.33.47l-3.32-3.32c-.2-.2-.51-.2-.71 0s-.2.51 0 .71l2.65 2.65h-11.57l2.65-2.65c.2-.2.2-.51 0-.71s-.51-.2-.71 0l-3.32 3.32c-.19-.07-.33-.25-.33-.47v-8c0-.22.15-.41.35-.47l6.82 5.85c.09.08.21.12.33.12s.23-.04.33-.12l6.82-5.85c.2.06.35.25.35.47v8z" /></svg><span>bluethreechancay@gmail.com</span></a>
          <a href="tel:+51914046710"><svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true"><path d="M9.056 14.944c3.592 3.591 6.729 4.304 6.861 4.332.121.026.249.039.38.039.636 0 1.34-.299 1.728-.764l1.219-1.463c.264-.315.375-.716.306-1.099a1.34 1.34 0 0 0-.669-.921l-1.764-1.008c-.649-.369-1.621-.309-2.217.139l-.399.301a.69.69 0 0 1-.854-.062l-4.086-4.086a.693.693 0 0 1-.062-.853l.302-.4c.446-.596.507-1.569.138-2.216L8.931 5.12a1.34 1.34 0 0 0-.921-.669 1.342 1.342 0 0 0-1.099.305c-.317.263-1.463 1.22-1.463 1.22-.561.467-.88 1.393-.725 2.108.028.132.74 3.27 4.332 6.861l.001-.001ZM6.089 6.743l1.463-1.219c.089-.075.186-.108.28-.089a.342.342 0 0 1 .229.181l1.008 1.763c.175.306.142.84-.068 1.12l-.302.4a1.685 1.685 0 0 0 .154 2.161l4.086 4.086c.57.57 1.519.638 2.161.153l.399-.301c.282-.21.814-.243 1.12-.068l1.764 1.008a.344.344 0 0 1 .181.229.344.344 0 0 1-.089.28l-1.219 1.463c-.234.28-.771.466-1.128.389-.03-.007-2.98-.678-6.366-4.062C6.395 10.87 5.706 7.9 5.7 7.872c-.077-.357.108-.896.389-1.129Z" /></svg><span>+51 914 046 710</span></a>
        </div>
      </div>
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
