type Language = "es" | "en";

const iconPaths: Record<string, string[]> = {
  dining: ["M4 3v7a3 3 0 0 0 6 0V3","M7 3v18","M16 3v18","M16 3c4 0 5 5 5 9h-5"],
  jacuzzi: ["M3 12h18v3a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z","M6 12V6a3 3 0 0 1 6 0","M7 20v2","M17 20v2","M16 4c-2 2 2 3 0 5","M20 3c-2 2 2 3 0 5"],
  business: ["M3 7h18v13H3z","M8 7V4h8v3","M3 12h18","M10 12v2h4v-2"],
  conveniences: ["M3 10l9-7 9 7","M5 9v12h14V9","M9 21v-7h6v7"],
};

function AmenityIcon({ name }: { name: string }) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {iconPaths[name].map((d, index) => <path key={index} d={d} />)}
  </svg>;
}

const categories = {
  en: [
    { icon: "dining", title: "Dining", items: ["Cafeteria", "Room service"] },
    { icon: "jacuzzi", title: "Jacuzzi & recreation", items: ["Jacuzzis", "Room decoration for special dates: anniversaries, birthdays, holidays and weddings"] },
    { icon: "business", title: "Business and work", items: ["Meeting rooms"] },
    { icon: "conveniences", title: "Conveniences", items: ["Free parking", "Free Wi-Fi", "Digital Key", "Connecting rooms"] },
  ],
  es: [
    { icon: "dining", title: "Gastronomía", items: ["Cafetería", "Servicio a la habitación"] },
    { icon: "jacuzzi", title: "Jacuzzi y recreación", items: ["Jacuzzis", "Decoración de habitaciones para fechas especiales: aniversarios, cumpleaños, días festivos y bodas"] },
    { icon: "business", title: "Negocios y trabajo", items: ["Salas de reuniones"] },
    { icon: "conveniences", title: "Comodidades", items: ["Estacionamiento gratuito", "Wi-Fi gratuito", "Llave digital", "Habitaciones comunicadas"] },
  ],
};

export default function HotelAmenities({ language }: { language: Language }) {
  const es = language === "es";
  return (
    <section className="hotel-amenities" aria-labelledby="hotel-amenities-heading">
      <h2 id="hotel-amenities-heading">{es ? "Nuestros servicios" : "Our services"}</h2>
      <div className="hotel-amenities-categories">
        {categories[language].map((category) => (
          <div className="hotel-amenities-category" key={category.title}>
            <span className="hotel-amenities-icon" aria-hidden="true"><AmenityIcon name={category.icon} /></span>
            <div>
              <h3>{category.title}</h3>
              <ul>{category.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        ))}
      </div>
      <details className="hotel-accessibility-details">
        <summary>{es ? "Características de accesibilidad" : "Accessible Features"}</summary>
        <p>{es
          ? "Solicita información sobre accesos, habitaciones y servicios adaptados directamente a recepción. "
          : "Contact reception for details about accessible entrances, rooms, and services. "}</p>
      </details>
    </section>
  );
}
