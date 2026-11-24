import type { Metadata } from "next";
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Contacto | Hotel BlueThree Chancay",
  description: "Comunícate con Hotel BlueThree Chancay por WhatsApp, teléfono, correo o redes sociales.",
};

const channels = [
  { label: "WhatsApp", detail: "Reservas y consultas", href: "https://api.whatsapp.com/message/IPFK3E5CKTNGK1?autoload=1&app_absent=0", external: true },
  { label: "Teléfono", detail: "+51 914 046 710", href: "tel:+51914046710", external: false },
  { label: "Correo electrónico", detail: "bluethreechancay@gmail.com", href: "mailto:bluethreechancay@gmail.com", external: false },
];

const socials = [
  { label: "Instagram", detail: "@hotelbluethreechancay", href: "https://www.instagram.com/hotelbluethreechancay/" },
  { label: "TikTok", detail: "@hotelbluethreechancay", href: "https://www.tiktok.com/@hotelbluethreechancay" },
  { label: "Facebook", detail: "Hoteles en Chancay y Huaral", href: "https://www.facebook.com/Hotelesenchancayhuaral/" },
];

const mapsUrl = "https://www.google.com/maps/place/Hotel+BlueThree+Chancay+%7C+Hoteles+en+Chancay+%26+Huaral/@-11.5491071,-77.260408,15.39z/data=!4m9!3m8!1s0x91068921449d21a5:0x7351952174e4f1fe!5m2!4m1!1i2!8m2!3d-11.5453985!4d-77.2588947!16s%2Fg%2F11rsr5p47y?entry=ttu&g_ep=EgoyMDI2MTExOC4xIKXMDSoASAFQAw%3D%3D";

export default function ContactoPage() {
  return <main className="template-page">
    <section className="template-page-hero contact-compact-hero">
      <p className="eyebrow">HOTEL BLUETHREE CHANCAY</p>
      <h1>Contáctanos</h1>
      <p>¿Tienes preguntas sobre habitaciones, reservas o eventos? Comunícate con nosotros por tu canal preferido.</p>
    </section>
    <section className="section-wrap contact-compact-content">
      <div className="contact-compact-layout">
        <div>
          <div className="contact-compact-heading"><p className="eyebrow">ATENCIÓN DIRECTA</p><h2>Hablemos de tu estadía</h2></div>
          <div className="contact-compact-list">
            {channels.map(channel => <a key={channel.label} href={channel.href} target={channel.external ? "_blank" : undefined} rel={channel.external ? "noopener noreferrer" : undefined}>
              <span><strong>{channel.label}</strong><small>{channel.detail}</small></span><span aria-hidden="true">↗</span>
            </a>)}
          </div>
          <div className="contact-compact-heading contact-social-heading"><p className="eyebrow">SÍGUENOS</p><h2>Redes sociales</h2></div>
          <div className="contact-compact-list">
            {socials.map(social => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
              <span><strong>{social.label}</strong><small>{social.detail}</small></span><span aria-hidden="true">↗</span>
            </a>)}
          </div>
        </div>
        <aside className="contact-compact-location">
          <p className="eyebrow">DÓNDE ESTAMOS</p>
          <h2>Encuéntranos en Chancay</h2>
          <p>Residencial Buena Vista – Las Tres Pirámides, Chancay 15130, Perú.</p>
          <a className="button button-dark" href={mapsUrl} target="_blank" rel="noopener noreferrer">Cómo llegar en Google Maps ↗</a>
          <Image width={1200} height={800} src="/Amenities.jpeg" alt="Instalaciones de Hotel BlueThree Chancay" loading="lazy" />
        </aside>
      </div>
    </section>
  </main>;
}
