import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Hôtel BlueThree Chancay",
  description: "Contactez l’Hôtel BlueThree Chancay par WhatsApp, téléphone, courriel ou réseaux sociaux.",
};

const channels = [
  { label: "WhatsApp", detail: "Réservations et renseignements", href: "https://api.whatsapp.com/message/IPFK3E5CKTNGK1?autoload=1&app_absent=0", external: true },
  { label: "Téléphone", detail: "+51 914 046 710", href: "tel:+51914046710", external: false },
  { label: "Courriel", detail: "bluethreechancay@gmail.com", href: "mailto:bluethreechancay@gmail.com", external: false },
];

const socials = [
  { label: "Instagram", detail: "@hotelbluethreechancay", href: "https://www.instagram.com/hotelbluethreechancay/" },
  { label: "TikTok", detail: "@hotelbluethreechancay", href: "https://www.tiktok.com/@hotelbluethreechancay" },
  { label: "Facebook", detail: "Hôtels à Chancay et Huaral", href: "https://www.facebook.com/Hotelesenchancayhuaral/" },
];

const mapsUrl = "https://www.google.com/maps/place/Hotel+BlueThree+Chancay+%7C+Hoteles+en+Chancay+%26+Huaral/@-11.5491071,-77.260408,15.39z/data=!4m9!3m8!1s0x91068921449d21a5:0x7351952174e4f1fe!5m2!4m1!1i2!8m2!3d-11.5453985!4d-77.2588947!16s%2Fg%2F11rsr5p47y?entry=ttu&g_ep=EgoyMDI2MTExOC4xIKXMDSoASAFQAw%3D%3D";

export default function ContactoPage() {
  return <main className="template-page">
    <section className="template-page-hero contact-compact-hero">
      <p className="eyebrow">HÔTEL BLUETHREE CHANCAY</p>
      <h1>Contactez-nous</h1>
      <p>Des questions sur les chambres, les réservations ou les événements ? Contactez-nous par le canal de votre choix.</p>
    </section>
    <section className="section-wrap contact-compact-content">
      <div className="contact-compact-layout">
        <div>
          <div className="contact-compact-heading"><p className="eyebrow">CONTACT DIRECT</p><h2>Parlons de votre séjour</h2></div>
          <div className="contact-compact-list">
            {channels.map(channel => <a key={channel.label} href={channel.href} target={channel.external ? "_blank" : undefined} rel={channel.external ? "noopener noreferrer" : undefined}>
              <span><strong>{channel.label}</strong><small>{channel.detail}</small></span><span aria-hidden="true">↗</span>
            </a>)}
          </div>
          <div className="contact-compact-heading contact-social-heading"><p className="eyebrow">SUIVEZ-NOUS</p><h2>Réseaux sociaux</h2></div>
          <div className="contact-compact-list">
            {socials.map(social => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
              <span><strong>{social.label}</strong><small>{social.detail}</small></span><span aria-hidden="true">↗</span>
            </a>)}
          </div>
        </div>
        <aside className="contact-compact-location">
          <p className="eyebrow">OÙ NOUS TROUVER</p>
          <h2>Retrouvez-nous à Chancay</h2>
          <p>Residencial Buena Vista – Las Tres Pirámides, Chancay 15130, Pérou.</p>
          <a className="button button-dark" href={mapsUrl} target="_blank" rel="noopener noreferrer">Itinéraire sur Google Maps ↗</a>
          <img src="/Amenities.jpeg" alt="Installations de l’Hôtel BlueThree Chancay" loading="lazy" />
        </aside>
      </div>
    </section>
  </main>;
}
