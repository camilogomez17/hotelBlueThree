import type { Metadata } from "next";
import { ServicesGrid } from "../components/ServicesGrid";

export const metadata: Metadata = {
  title: "Amenities | Hotel BlueThree Chancay",
  description: "Discover Hotel BlueThree Chancay amenities: Wi-Fi, rooms with jacuzzi, restaurant, parking and more.",
};

export default function ServiciosPage() {
  return <main className="services-page">
    <div className="services-page-banner">
      <p className="eyebrow">HOTEL BLUETHREE CHANCAY</p>
      <h1>Services and amenities</h1>
      <p>Discover the amenities and services available during your stay in Chancay.</p>
    </div>
    <section className="services-page-main" aria-label="List of amenities"><ServicesGrid full /></section>
    <section className="services-page-contact">
      <h2>Need information about a service?</h2>
      <p>Check availability, conditions and possible charges before booking.</p>
      <a href="mailto:bluethreechancay@gmail.com">bluethreechancay@gmail.com</a>
      <a href="tel:+51914046710">+51 914 046 710</a>
    </section>
  </main>;
}
