type Language = "es" | "en";

const categories = {
  en: [
    { icon: "01", title: "Dining", items: ["On-site restaurant", "Room service"] },
    { icon: "02", title: "Fitness and recreation", items: ["Indoor pool", "Fitness center"] },
    { icon: "03", title: "Business and work", items: ["Meeting rooms"] },
    { icon: "04", title: "Conveniences", items: ["Free parking", "Free Wi-Fi", "Digital Key", "Connecting rooms"] },
  ],
  es: [
    { icon: "01", title: "Gastronomía", items: ["Restaurante en el hotel", "Servicio a la habitación"] },
    { icon: "02", title: "Actividad física y recreación", items: ["Piscina cubierta", "Gimnasio"] },
    { icon: "03", title: "Negocios y trabajo", items: ["Salas de reuniones"] },
    { icon: "04", title: "Comodidades", items: ["Estacionamiento gratuito", "Wi-Fi gratuito", "Llave digital", "Habitaciones comunicadas"] },
  ],
};

export default function HotelAmenities({ language }: { language: Language }) {
  const es = language === "es";
  return (
    <section className="hotel-amenities" aria-labelledby="hotel-amenities-heading">
      <h2 id="hotel-amenities-heading">{es ? "Nuestros servicios" : "Our amenities"}</h2>
      <div className="hotel-amenities-categories">
        {categories[language].map((category) => (
          <div className="hotel-amenities-category" key={category.title}>
            <span className="hotel-amenities-icon" aria-hidden="true">{category.icon}</span>
            <div>
              <h3>{category.title}</h3>
              <ul>{category.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        ))}
      </div>
      <p className="hotel-amenities-disclaimer">{es
        ? "Catálogo de referencia: algunos servicios pueden no estar disponibles en este establecimiento. Consulta con recepción antes de reservar."
        : "Reference amenities catalog: some services may not be available at this property. Confirm with reception before booking."}</p>
      <details className="hotel-accessibility-details">
        <summary>{es ? "Características de accesibilidad" : "Accessible Features"}</summary>
        <p>{es
          ? "Solicita información sobre accesos, habitaciones y servicios adaptados directamente a recepción. La disponibilidad no ha sido confirmada."
          : "Contact reception for details about accessible entrances, rooms, and services. Availability has not been confirmed."}</p>
      </details>
    </section>
  );
}
