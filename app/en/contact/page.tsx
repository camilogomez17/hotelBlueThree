import type { Metadata } from "next";
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Contact | Hotel BlueThree Chancay",
  description: "Contact Hotel BlueThree Chancay via WhatsApp, phone, email or social media.",
};

const channels = [
  { label: "WhatsApp", detail: "Bookings and inquiries", href: "https://api.whatsapp.com/message/IPFK3E5CKTNGK1?autoload=1&app_absent=0", external: true },
  { label: "Phone", detail: "+51 914 046 710", href: "tel:+51914046710", external: false },
  { label: "Email", detail: "bluethreechancay@gmail.com", href: "mailto:bluethreechancay@gmail.com", external: false },
];

const socials = [
  { label: "Instagram", detail: "@hotelbluethreechancay", href: "https://www.instagram.com/hotelbluethreechancay/" },
  { label: "TikTok", detail: "@hotelbluethreechancay", href: "https://www.tiktok.com/@hotelbluethreechancay" },
  { label: "Facebook", detail: "Hotels in Chancay and Huaral", href: "https://www.facebook.com/Hotelesenchancayhuaral/" },
];

const mapsUrl = "https://www.google.com/maps/place/Hotel+BlueThree+Chancay+%7C+Hoteles+en+Chancay+%26+Huaral/@-11.5491071,-77.260408,15.39z/data=!4m9!3m8!1s0x91068921449d21a5:0x7351952174e4f1fe!5m2!4m1!1i2!8m2!3d-11.5453985!4d-77.2588947!16s%2Fg%2F11rsr5p47y?entry=ttu&g_ep=EgoyMDI2MTExOC4xIKXMDSoASAFQAw%3D%3D";

export default function ContactoPage() {
  return <main className="template-page">
    <section className="template-page-hero contact-compact-hero">
      <p className="eyebrow">HOTEL BLUETHREE CHANCAY</p>
      <h1>Contact us</h1>
      <p>Questions about rooms, reservations or events? Contact us through your preferred channel.</p>
    </section>
    <section className="section-wrap contact-compact-content">
      <div className="contact-compact-layout">
        <div>
          <div className="contact-compact-heading"><p className="eyebrow">DIRECT ASSISTANCE</p><h2>Let&quot;s discuss your stay</h2></div>
          <div className="contact-compact-list">
            {channels.map(channel => <a key={channel.label} href={channel.href} target={channel.external ? "_blank" : undefined} rel={channel.external ? "noopener noreferrer" : undefined}>
              <span><strong>{channel.label}</strong><small>{channel.detail}</small></span><span aria-hidden="true">↗</span>
            </a>)}
          </div>
          <div className="contact-compact-heading contact-social-heading"><p className="eyebrow">FOLLOW US</p><h2>Social media</h2></div>
          <div className="contact-compact-list">
            {socials.map(social => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
              <span><strong>{social.label}</strong><small>{social.detail}</small></span><span aria-hidden="true">↗</span>
            </a>)}
          </div>
        </div>
        <aside className="contact-compact-location">
          <p className="eyebrow">WHERE TO FIND US</p>
          <h2>Find us in Chancay</h2>
          <p>Residencial Buena Vista – Las Tres Pirámides, Chancay 15130, Peru.</p>
          <a className="button button-dark" href={mapsUrl} target="_blank" rel="noopener noreferrer">Directions on Google Maps ↗</a>
          <Image src="/Amenities.jpeg" alt="Hotel BlueThree Chancay facilities" loading="lazy" />
        </aside>
      </div>
    </section>
  </main>;
}
