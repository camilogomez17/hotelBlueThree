import Link from "next/link";

export const services = [
  { name: "Wi-Fi", icon: "wifi", detail: "Ask about connectivity during your stay." },
  { name: "Parking", icon: "parking", detail: "Confirm availability and parking conditions." },
  { name: "Air conditioning", icon: "air", detail: "Available in selected room categories." },
  { name: "Café", icon: "dining", detail: "Food and drinks from the hotel's café menu." },
  { name: "Breakfast", icon: "breakfast", detail: "Ask about included options and serving hours." },
  { name: "24-hour reception", icon: "clock", detail: "Reception assistance during your stay." },
  { name: "Room service", icon: "service", detail: "Confirm available options with reception." },
  { name: "Garden", icon: "garden", detail: "Outdoor space to enjoy." },
  { name: "Rooms with jacuzzi", icon: "bath", detail: "Available in selected room categories." },
  { name: "Laundry", icon: "laundry", detail: "Ask about availability and possible charges." },
  { name: "Events and meetings", icon: "meeting", detail: "Ask about spaces and arrangements." },
  { name: "Local information", icon: "map", detail: "Ask for information about Chancay." },
  { name: "Airport and local transfers", icon: "map", detail: "Available on request for an additional charge; confirm routes and pricing." },
  { name: "Special occasion decorations", icon: "meeting", detail: "Ask about decoration packages, availability and pricing." },
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
    <h2 className="amenities-heading">{full ? "Hotel BlueThree amenities" : "Our amenities"}</h2>
    <ul className="hotel-amenity-grid">
      {services.map((service) => <li key={service.name} className="hotel-amenity-item">
        <ServiceIcon icon={service.icon} />
        <span>{service.name}</span>
        {full && <p>{service.detail}</p>}
      </li>)}
    </ul>
    {!full && <div className="amenities-action"><Link href="/en/servicios" className="amenities-all-button">All services</Link></div>}
    <p className="amenities-disclaimer">Amenities may vary by room, date and availability. Confirm conditions directly with the hotel.</p>
  </div>;
}
