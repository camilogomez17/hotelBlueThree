import type { Metadata } from "next";
import PolicyTabs from "../components/PolicyTabs";
import HotelAmenities from "../components/HotelAmenities";
import FeaturedAmenities from "../components/FeaturedAmenities";
import ForYourStay from "../components/ForYourStay";
import AdditionalPolicies from "../components/AdditionalPolicies";

export const metadata: Metadata = {
  title: "Políticas del hotel | Hotel BlueThree Chancay",
  description: "Consulta las políticas de tarifas, niños, estacionamiento, mascotas, fumar y Wi-Fi.",
};

export default function Politicas() {
  return <main className="template-page">
    <section className="template-page-hero">
      <p className="eyebrow">HOTEL BLUETHREE CHANCAY</p>
      <h1>Políticas del hotel</h1>
      <p>Consulta las condiciones de tu estadía.</p>
    </section>
    <section className="section-wrap hotel-policies-page">
      <HotelAmenities language="es" />
      <FeaturedAmenities language="es" />
      <ForYourStay language="es" />
      <h2 className="hotel-our-policies-heading">Nuestras políticas</h2>
      <PolicyTabs language="es" />
      <AdditionalPolicies language="es" />
    </section>
  </main>;
}
