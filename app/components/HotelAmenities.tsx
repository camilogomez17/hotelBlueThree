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

const unavailableFeatures = {
  "es": [
    "Habitaciones accesibles para personas con discapacidades motrices, con puertas de entrada o paso que ofrecen un ancho libre de 32 pulgadas",
    "Rampa de acceso desde la entrada del hotel hasta las habitaciones accesibles para personas con discapacidades",
    "Rampa de acceso desde la entrada del hotel hasta el área de reuniones/el salón de fiestas",
    "Rampa de acceso desde la entrada del hotel hasta al menos un restaurante",
    "Rampa de acceso desde la entrada del hotel hasta el spa",
    "Rampa de acceso desde la entrada del hotel hasta la piscina",
    "Transporte accesible para personas con discapacidades disponible con previo aviso",
    "Dispositivos de audición asistida para reuniones, disponibles a solicitud",
    "Teletipo (TTY) para uso de los huéspedes"
  ],
  "en": [
    "Mobility-accessible rooms with entry or passage doors providing 32 inches of clear width",
    "Ramp access from the hotel entrance to accessible guest rooms",
    "Ramp access from the hotel entrance to the meeting area or ballroom",
    "Ramp access from the hotel entrance to at least one restaurant",
    "Ramp access from the hotel entrance to the spa",
    "Ramp access from the hotel entrance to the pool",
    "Accessible transportation with advance notice",
    "Assistive listening devices for meetings, available upon request",
    "Teletypewriter (TTY) for guest use"
  ]
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

    </section>
  );
}

export function HotelAccessibility({ language }: { language: Language }) {
  const es = language === "es";
  return (
      <details className="hotel-accessibility-details">
        <summary>{es ? "Características no accesibles para personas con discapacidades" : "Features not accessible to people with disabilities"}</summary>
        <p>{es
          ? "Solicita información sobre accesos, habitaciones y servicios adaptados directamente a recepción. "
          : "Contact reception for details about accessible entrances, rooms, and services. "}</p>
        <div className="hotel-accessibility-unavailable">
          <h3>{es ? "Las siguientes características no están disponibles:" : "The following features are not available:"}</h3>
          <ul>{unavailableFeatures[language].map((feature) => <li key={feature}>{feature}</li>)}</ul>
        </div>
      </details>
  );
}
