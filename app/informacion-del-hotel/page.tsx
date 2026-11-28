import type { Metadata } from "next";
import HotelInformationContact from "../components/HotelInformationContact";
import AdditionalPolicies from "../components/AdditionalPolicies";
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
    <section className="section-wrap hotel-information-policies" aria-labelledby="hotel-information-policies">
      <h2 className="hotel-our-policies-heading" id="hotel-information-policies">Nuestras políticas</h2>
      <AdditionalPolicies language="es" />
    </section>
    <HotelInformationContact language="es" />
  </main>;
}
