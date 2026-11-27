import { ServiceIcon } from "./ServicesGrid";

type Language = "es" | "en";

const categories = {
  en: [
    { icon: "dining", title: "Dining", items: ["Cafeteria", "Breakfast", "Special diets (vegetarian, vegan, etc.)", "Room service"] },
    { icon: "bath", title: "Jacuzzi & recreation", items: ["Jacuzzis", "Room decoration"] },
    { icon: "meeting", title: "Business and work", items: ["Meeting rooms", "Corporate events", "Weddings", "Birthdays"] },
    { icon: "service", title: "Conveniences", items: ["Free parking", "Free Wi-Fi", "Digital Key", "Connecting rooms", "Air conditioning", "24-hour reception", "Laundry (additional charge)", "Local information", "Airport and local transfers"] },
  ],
  es: [
    { icon: "dining", title: "Gastronomía", items: ["Cafetería", "Desayuno", "Dietas especiales (vegetarianas, veganas, etc.)", "Servicio a la habitación"] },
    { icon: "bath", title: "Jacuzzi y recreación", items: ["Jacuzzis", "Decoración de habitaciones"] },
    { icon: "meeting", title: "Negocios y trabajo", items: ["Salas de reuniones", "Eventos corporativos", "Matrimonios", "Cumpleaños"] },
    { icon: "service", title: "Comodidades", items: ["Estacionamiento gratis", "Wi-Fi gratis", "Llave digital", "Habitaciones comunicadas", "Aire acondicionado", "Recepción 24 horas", "Lavandería (costo aparte)", "Información local", "Traslados al aeropuerto y locales"] },
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
