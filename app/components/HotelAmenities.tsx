import { ServiceIcon } from "./ServicesGrid";

type Language = "es" | "en";

const categories = {
  en: [
    { icon: "dining", title: "Dining", items: ["Cafeteria", "Room service"] },
    { icon: "bath", title: "Jacuzzi & recreation", items: ["Jacuzzis", "Room decoration for special dates: anniversaries, birthdays, holidays and weddings"] },
    { icon: "meeting", title: "Business and work", items: ["Meeting rooms"] },
    { icon: "service", title: "Conveniences", items: ["Free parking", "Free Wi-Fi", "Digital Key", "Connecting rooms"] },
  ],
  es: [
    { icon: "dining", title: "Gastronomía", items: ["Cafetería", "Servicio a la habitación"] },
    { icon: "bath", title: "Jacuzzi y recreación", items: ["Jacuzzis", "Decoración de habitaciones para fechas especiales: aniversarios, cumpleaños, días festivos y bodas"] },
    { icon: "meeting", title: "Negocios y trabajo", items: ["Salas de reuniones"] },
    { icon: "service", title: "Comodidades", items: ["Estacionamiento gratuito", "Wi-Fi gratuito", "Llave digital", "Habitaciones comunicadas"] },
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
            <span className="hotel-amenities-icon" aria-hidden="true"><ServiceIcon icon={category.icon} /></span>
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
