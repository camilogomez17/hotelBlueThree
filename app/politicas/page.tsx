import type { Metadata } from "next";
import { whatsapp } from "../data/hotel";
const policies = [
  {
    "title": "Daños y perjuicios",
    "summary": "Se cobra el 100% del costo de los daños ocasionados a instalaciones y suministros.",
    "detail": "Las habitaciones están sujetas a inspección de limpieza. Se aplican cargos adicionales si se encuentra ropa de cama con sangre u otros líquidos. En caso de daños o perjuicios a las instalaciones y suministros de BlueThree, se cobrará el 100% del costo del daño."
  },
  {
    "title": "Horario de silencio",
    "summary": "De 10:30 p. m. a 9:00 a. m.",
    "detail": "Para proporcionar una estadía cómoda a todos los huéspedes, se exige respetar el horario de silencio entre las 10:30 p. m. y las 9:00 a. m."
  },
  {
    "title": "Confidencialidad",
    "summary": "Protección de la información personal de los huéspedes.",
    "detail": "El hotel indica que proporciona seguridad para proteger la información de tarjeta de crédito, nombre, dirección, correo electrónico y demás información personal que el huésped proporcione."
  },
  {
    "title": "Identificación",
    "summary": "Check-in para mayores de 18 años con identificación válida.",
    "detail": "Se establecen restricciones de edad para el check-in: mayores de 18 años. Se requiere una identificación válida en físico para registrarse; no se aceptan fotos."
  },
  {
    "title": "Menores de 5 años",
    "summary": "Alojamiento sin cargo extra, sujeto a la capacidad máxima de la habitación.",
    "detail": "Los niños menores de 5 años se alojan gratis con la tarifa estándar, sin cargo extra, de acuerdo con la capacidad máxima de la habitación."
  },
  {
    "title": "Prohibición de fumar",
    "summary": "No se permite fumar en las habitaciones. Multa indicada: S/ 250.",
    "detail": "La política cita la Ley N.º 32159. Se prohíbe fumar en las habitaciones, con excepción de las áreas exteriores. El hotel se describe como una instalación para no fumar y una zona libre de drogas. Fumar en la habitación está sujeto a una multa de S/ 250."
  },
  {
    "title": "Venta responsable de alcohol",
    "summary": "El hotel puede limitar la venta a personas en evidente estado de ebriedad.",
    "detail": "El hotel se reserva el derecho de limitar la venta de bebidas alcohólicas a cualquier persona que presente un evidente estado de ebriedad, como dificultad para mantener el equilibrio, alteración en el habla, dificultad para expresarse con claridad o comportamiento agresivo o desinhibido. La medida busca garantizar la seguridad y el bienestar de huéspedes y personal."
  },
  {
    "title": "Registro de huéspedes extranjeros",
    "summary": "Se solicita pasaporte físico vigente o documento de residencia legal.",
    "detail": "La política cita el Decreto Supremo N.º 011-2024-IN e indica que los ciudadanos extranjeros deben registrar sus datos y presentar físicamente un pasaporte vigente al momento del check-in, si ingresaron como turistas, o un documento de residencia legal."
  }
];

export const metadata: Metadata = {
  title: "Políticas del hotel | Hotel BlueThree Chancay",
  description: "Conoce las políticas de estadía, identificación, horario de silencio, menores y seguridad del Hotel BlueThree Chancay.",
};

export default function Politicas() {
  return <main className="template-page">
    <section className="template-page-hero"><p className="eyebrow">HOTEL BLUETHREE CHANCAY</p><h1>Políticas del hotel</h1><p>Información sobre las condiciones de estadía. Confirma las políticas vigentes con recepción antes de reservar.</p></section>
    <section className="section-wrap hotel-policies-page">
      <div className="hotel-policy-times"><div><span>CHECK-IN</span><strong>2:00 p. m.</strong></div><div><span>CHECK-OUT</span><strong>11:00 a. m.</strong></div><div><span>HORARIO DE SILENCIO</span><strong>10:30 p. m. – 9:00 a. m.</strong></div></div>
      <div className="hotel-policies-heading"><p className="eyebrow">CONDICIONES DE ESTADÍA</p><h2>Todo lo que necesitas saber</h2><p>Las siguientes condiciones se han transcrito y adaptado para lectura digital a partir de la tarjeta de políticas del hotel.</p></div>
      <div className="hotel-policies-list">{policies.map((policy,index)=><article className="hotel-policy-detail" key={policy.title}><span className="hotel-policy-index">{String(index+1).padStart(2,"0")}</span><div><h3>{policy.title}</h3><p>{policy.detail}</p></div></article>)}</div>
      <div className="hotel-policy-note"><p>Las referencias legales se reproducen como aparecen en la tarjeta del hotel; su alcance y vigencia no se han verificado de manera independiente. Consulta con recepción las condiciones actualizadas.</p><a className="button button-dark" href={whatsapp} target="_blank" rel="noopener noreferrer">Consultar con recepción ↗</a></div>
    </section>
  </main>;
}
