import type { Metadata } from "next";
import { ServicesGrid } from "../components/ServicesGrid";

export const metadata: Metadata = {
  title: "Services | Hôtel BlueThree Chancay",
  description: "Découvrez les services de l’Hôtel BlueThree Chancay : Wi-Fi, chambres avec jacuzzi, restaurant, parking et plus encore.",
};

export default function ServiciosPage() {
  return <main className="services-page">
    <div className="services-page-banner">
      <p className="eyebrow">HÔTEL BLUETHREE CHANCAY</p>
      <h1>Services et équipements</h1>
      <p>Découvrez les équipements et services disponibles pendant votre séjour à Chancay.</p>
    </div>
    <section className="services-page-main" aria-label="Liste des services"><ServicesGrid full /></section>
    <section className="services-page-contact">
      <h2>Besoin d’informations sur un service ?</h2>
      <p>Vérifiez la disponibilité, les conditions et les éventuels frais avant de réserver.</p>
      <a href="mailto:bluethreechancay@gmail.com">bluethreechancay@gmail.com</a>
      <a href="tel:+51914046710">+51 914 046 710</a>
    </section>
  </main>;
}
