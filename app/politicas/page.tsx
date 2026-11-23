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
      <div className="section-heading"><div><p className="eyebrow">INFORMACIÓN DEL HOTEL</p><h2>Servicios y comodidades</h2></div><p>Conoce los servicios durante tu estadía. Confirma los detalles con recepción.</p></div>
      <div className="home-policies-grid">
        <article className="home-policy-card"><h3>Gastronomía</h3><p>Cafetería en el hotel</p></article>
        <article className="home-policy-card"><h3>Transporte</h3><p>Traslados locales · Traslados al aeropuerto por solicitud (costo adicional)</p></article>
        <article className="home-policy-card"><h3>Comodidades</h3><p>Estacionamiento gratuito · Wi-Fi gratuito · Decoraciones especiales previa solicitud</p></article>
      </div>
      <div className="section-heading"><div><p className="eyebrow">SERVICIOS DESTACADOS</p><h2>Lo más destacado</h2></div></div>
      <div className="home-policies-grid">
        <article className="home-policy-card"><h3>Cafetería</h3><p>Alimentos y bebidas durante tu estadía.</p></article>
        <article className="home-policy-card"><h3>Estacionamiento</h3><p>Estacionamiento propio sin costo.</p></article>
        <article className="home-policy-card"><h3>Wi-Fi</h3><p>Conexión gratuita en habitaciones y vestíbulo.</p></article>
      </div>
      <div className="section-heading"><div><p className="eyebrow">PARA TU ESTADÍA</p><h2>Información de llegada</h2></div></div>
      <div className="hotel-policy-times">
        <div><span>CHECK-IN</span><strong>2:00 p. m.</strong></div>
        <div><span>CHECK-OUT</span><strong>11:00 a. m.</strong></div>
      </div>
      <p>Dirección: Residencial Buena Vista – Las Tres Pirámides, Chancay 15130, Perú. Para indicaciones, traslados y solicitudes especiales, comunícate con recepción.</p>
      <div className="home-policies-grid">
        <article className="home-policy-card"><h3>Estacionamiento</h3><p>Propio: gratuito · Valet: no disponible · Carga eléctrica: no disponible · Vigilado: disponible · Techado: no disponible · Entradas y salidas: no disponibles</p></article>
        <article className="home-policy-card"><h3>Traslado al aeropuerto</h3><p>Disponible previa solicitud con costo adicional. Confirma horario y precio.</p></article>
        <article className="home-policy-card"><h3>Servicios para niños</h3><p>Menores de hasta 12 años sin costo al compartir cama con sus padres. Confirma capacidad.</p></article>
        <article className="home-policy-card"><h3>Habitaciones sin humo</h3><p>Fumar en habitaciones para no fumadores puede generar penalidad.</p></article>
        <article className="home-policy-card"><h3>Desayuno</h3><p>Consulta en recepción la disponibilidad y el precio del desayuno en cafetería.</p></article>
        <article className="home-policy-card"><h3>Mascotas</h3><p>No se admiten mascotas.</p></article>
      </div>
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
