import Link from "next/link";

export const services = [
  { name: "Wi-Fi", icon: "wifi", detail: "Connexion Internet pendant votre séjour." },
  { name: "Parking", icon: "parking", detail: "Renseignez-vous sur les conditions de stationnement." },
  { name: "Climatisation", icon: "air", detail: "Confort dans certaines chambres." },
  { name: "Restaurant et café", icon: "dining", detail: "Restauration et boissons." },
  { name: "Petit-déjeuner", icon: "breakfast", detail: "Renseignez-vous sur les horaires et les options disponibles." },
  { name: "Réception ouverte 24 h/24", icon: "clock", detail: "Accueil et assistance pendant votre visite." },
  { name: "Service en chambre", icon: "service", detail: "Renseignez-vous sur le service en chambre." },
  { name: "Jardin", icon: "garden", detail: "Espaces extérieurs pour se détendre." },
  { name: "Chambres avec jacuzzi", icon: "bath", detail: "Disponibles dans certaines catégories de chambres." },
  { name: "Blanchisserie", icon: "laundry", detail: "Renseignez-vous sur la disponibilité et les frais de service." },
  { name: "Événements et réunions", icon: "meeting", detail: "Espaces et services pour les occasions spéciales." },
  { name: "Assistance touristique", icon: "map", detail: "Informations pour découvrir Chancay et ses environs." },
];

const paths: Record<string, string[]> = {
  wifi: ["M2 8.8a15 15 0 0 1 20 0","M5 12a10 10 0 0 1 14 0","M8.5 15.5a5 5 0 0 1 7 0","M12 19h.01"],
  parking: ["M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z","M9 17V7h4a3 3 0 0 1 0 6H9"],
  air: ["M12 2v20","m8 5 4-3 4 3","m-8 14 4 3 4-3","M2 12h20","m5-4-3 4 3 4","m12-8 3 4-3 4"],
  dining: ["M4 3v8a3 3 0 0 0 6 0V3","M7 3v18","M15 3v18","M15 3c6 0 7 9 0 10"],
  breakfast: ["M4 11h16","M6 11a6 6 0 0 1 12 0","M3 15h18","M8 19h8"],
  clock: ["M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z","M12 7v5l3 2"],
  service: ["M3 18h18","M5 15a7 7 0 0 1 14 0","M12 8V6","M10 6h4"],
  garden: ["M12 21v-9","M12 14C4 14 3 8 5 4c6 0 7 4 7 10Z","M12 17c0-7 3-11 8-11 1 6-1 11-8 11Z"],
  bath: ["M3 12h18v3a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5v-3Z","M6 12V6a3 3 0 0 1 6 0","M7 20v2","M17 20v2"],
  laundry: ["M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z","M5 8h14","M12 11a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z","M8 5h.01","M11 5h.01"],
  meeting: ["M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z","M17 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z","M2 20v-3a5 5 0 0 1 10 0v3","M13 20v-3a5 5 0 0 1 9 0v3"],
  map: ["m3 5 6-2 6 2 6-2v16l-6 2-6-2-6 2V5Z","M9 3v16","M15 5v16"],
};

export function ServiceIcon({ icon }: { icon: string }) {
  return <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {(paths[icon] || paths.service).map((d, index) => <path key={index} d={d} />)}
  </svg>;
}

export function ServicesGrid({ full = false }: { full?: boolean }) {
  return <div className={full ? "amenities-content amenities-full" : "amenities-content"}>
    <h2 className="amenities-heading">{full ? "Services de l’Hôtel BlueThree" : "Nos services"}</h2>
    <ul className="hilton-amenity-grid">
      {services.map((service) => <li key={service.name} className="hilton-amenity-item">
        <ServiceIcon icon={service.icon} />
        <span>{service.name}</span>
        {full && <p>{service.detail}</p>}
      </li>)}
    </ul>
    {!full && <div className="amenities-action"><Link href="/fr/servicios" className="amenities-all-button">Tous les services</Link></div>}
    <p className="amenities-disclaimer">Les services peuvent varier selon la chambre, la date et la disponibilité. Confirmez les conditions directement auprès de l’hôtel.</p>
  </div>;
}
