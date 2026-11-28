import { whatsapp } from "../data/hotel";

const phoneHref = "tel:+51914046710";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/hotelbluethreechancay/",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </g>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/Hotelesenchancayhuaral/",
    icon: <path d="M14 22v-9h3l.5-3.5H14V7.3c0-1 .3-1.8 1.8-1.8H18V2.3a22 22 0 0 0-3-.3c-3 0-5 1.8-5 5v2.5H7V13h3v9z" />,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@hotelbluethreechancay",
    icon: <path d="M16 2h-3.5v13.4a2.8 2.8 0 1 1-2-2.7V9.1a6.3 6.3 0 1 0 5.5 6.3V8.6a8.4 8.4 0 0 0 4.8 1.5V6.6A4.8 4.8 0 0 1 16 2z" />,
  },
];

export default function HotelInformationContact({ language }: { language: "es" | "en" }) {
  const es = language === "es";

  return (
    <section className="services-page-contact" aria-label={es ? "Contacto del hotel" : "Hotel contact"}>
      <div className="section-wrap hotel-information-contact">
        <div className="hotel-information-contact-channels">
          <a className="hotel-information-phone" href={phoneHref}>+51 914 046 710</a>
          <ul className="hotel-information-socials">
            {socialLinks.map(({ name, href, icon }) => (
              <li key={name}>
                <a href={href} aria-label={name} target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">{icon}</svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hotel-information-contact-actions">
          <a className="button button-dark" href={whatsapp} target="_blank" rel="noopener noreferrer">
            {es ? "Reservas" : "Reservations"}
          </a>
          <a className="button button-outline" href={phoneHref}>
            {es ? "Contactar al hotel" : "Contact the hotel"}
          </a>
        </div>
      </div>
    </section>
  );
}
