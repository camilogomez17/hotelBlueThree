import type { Metadata } from "next";
import PolicyTabs from "../components/PolicyTabs";
import HotelAmenities from "../components/HotelAmenities";
import FeaturedAmenities from "../components/FeaturedAmenities";
import ForYourStay from "../components/ForYourStay";
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
      <HotelAmenities language="es" />
      <FeaturedAmenities language="es" />
      <ForYourStay language="es" />
      <div className="section-heading"><div><p className="eyebrow">NUESTRAS POLÍTICAS</p><h2>Condiciones de estadía</h2></div></div>
      <PolicyTabs language="es" />
      <div className="hotel-policy-note">
        <h3>Condiciones adicionales propuestas — pendientes de aprobación del hotel</h3>
        <p>Las siguientes reglas son propuestas y no constituyen políticas confirmadas del hotel; requieren aprobación antes de aplicarse a reservas.</p>
        <h4>Cancelaciones</h4>
        <p>Propuesta: cancelación sin penalidad hasta 48 horas antes del check-in. Las cancelaciones posteriores y las inasistencias podrían generar un cargo equivalente a la primera noche.</p>
        <h4>Entrada y salida</h4>
        <p>Propuesta: presentar documento oficial de identidad con fotografía al registrarse. La entrada anticipada y la salida tardía dependen de disponibilidad y podrían tener costo adicional.</p>
        <h4>Pagos</h4>
        <p>Propuesta: se podrá solicitar un anticipo para confirmar la reserva; el saldo se pagará al registrarse. Los medios de pago aceptados y plazos de devolución deben confirmarse con recepción.</p>
        <p>Los impuestos aplicables y demás condiciones deben confirmarse antes de reservar.</p>
        <a className="button button-dark" href={whatsapp} target="_blank" rel="noopener noreferrer">Consultar con recepción ↗</a>
      </div>
    </section>
  </main>;
}
