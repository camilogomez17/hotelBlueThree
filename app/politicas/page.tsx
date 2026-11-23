import type { Metadata } from "next";
import PolicyTabs from "../components/PolicyTabs";
import { whatsapp } from "../data/hotel";

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
      <div className="hotel-policy-times">
        <div><span>CHECK-IN</span><strong>2:00 p. m.</strong></div>
        <div><span>CHECK-OUT</span><strong>11:00 a. m.</strong></div>
      </div>
      <PolicyTabs language="es" />
      <div className="hotel-policy-note">
        <p>La aplicación de impuestos, cargos y condiciones está sujeta a la normativa vigente y debe confirmarse con el hotel antes de reservar.</p>
        <a className="button button-dark" href={whatsapp} target="_blank" rel="noopener noreferrer">Consultar con recepción ↗</a>
      </div>
    </section>
  </main>;
}
