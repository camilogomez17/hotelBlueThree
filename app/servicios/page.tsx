import type { Metadata } from "next";
import { ServicesGrid } from "../components/ServicesGrid";

export const metadata: Metadata = {
  title: "Servicios | Hotel BlueThree Chancay",
  description: "Conoce los servicios de Hotel BlueThree Chancay: Wi-Fi, habitaciones con jacuzzi, cafetería, estacionamiento y más.",
};

export default function ServiciosPage() {
  return <main className="services-page">
    <div className="services-page-banner">
      <p className="eyebrow">HOTEL BLUETHREE CHANCAY</p>
      <h1>Servicios y comodidades</h1>
      <p>Descubre las comodidades y opciones de atención para tu estadía en Chancay.</p>
    </div>
    <section className="services-page-main" aria-label="Lista de servicios"><ServicesGrid full /></section>
    <section className="services-page-contact">
      <h2>¿Necesitas información sobre un servicio?</h2>
      <p>Consulta disponibilidad, condiciones y posibles cargos antes de reservar.</p>
      <a href="mailto:bluethreechancay@gmail.com">bluethreechancay@gmail.com</a>
      <a href="tel:+51914046710">+51 914 046 710</a>
    </section>
  </main>;
}
