import type { Metadata } from "next";
import HotelAmenities from "../components/HotelAmenities";
import ForYourStay from "../components/ForYourStay";
import FeaturedAmenities from "../components/FeaturedAmenities";
import { ServicesGrid } from "../components/ServicesGrid";

export const metadata: Metadata = {
  title: "Información de Hotel | Hotel BlueThree Chancay",
  description: "Conoce los servicios de Hotel BlueThree Chancay: Wi-Fi, habitaciones con jacuzzi, cafetería, estacionamiento y más.",
};

export default function HotelInformationPage() {
  return <main className="services-page">
    <div className="services-page-banner">
      <h1>Información de Hotel</h1>
      <p>Descubre las comodidades y opciones de atención para tu estadía en Hotel BlueThree.</p>
    </div>
    <section className="section-wrap hotel-policies-page">
      <HotelAmenities language="es" />
      <FeaturedAmenities language="es" />
      <h2 className="hotel-our-policies-heading">Comodidades</h2><ServicesGrid full />
      <ForYourStay language="es" showTitle={false} />
    </section>
    <section className="services-page-contact">
      <h2>¿Necesitas información sobre un servicio?</h2>
      <p>Consulta disponibilidad, condiciones y posibles cargos antes de reservar.</p>
      <a href="mailto:bluethreechancay@gmail.com">bluethreechancay@gmail.com</a>
      <a href="tel:+51914046710">+51 914 046 710</a>
    </section>
  </main>;
}
