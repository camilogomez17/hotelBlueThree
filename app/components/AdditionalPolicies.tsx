import { whatsapp } from "../data/hotel";

export default function AdditionalPolicies({ language }: { language: "es" | "en" }) {
  const es = language === "es";
  return (
    <div className="hotel-policy-note">
      <p className="hotel-policy-proposal">{es ? "Condiciones propuestas pendientes de aprobación del hotel. Confirma las condiciones de tu reserva directamente con recepción." : "Proposed terms pending hotel approval. Confirm the terms of your reservation directly with reception."}</p>
      <div className="hotel-policy-accordion">
        <details open>
          <summary>{es ? "Cancelación" : "Cancellation"} <span aria-hidden="true">⌄</span></summary>
          <div className="hotel-policy-accordion-content">
            <p>{es ? "Las condiciones de cancelación pueden variar según la tarifa y las fechas de la reserva. Consulta tu confirmación para verificar las condiciones aplicables. Propuesta: cancelación gratuita hasta 48 horas antes de la llegada; después de ese plazo o por inasistencia, podría cobrarse la primera noche." : "Cancellation terms may vary by rate and reservation dates. Review your confirmation for the applicable terms. Proposed: free cancellation up to 48 hours before arrival; late cancellation or no-show may incur a first-night charge."}</p>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer">{es ? "Consultar con el hotel" : "Contact the hotel"}</a>
          </div>
        </details>
        <details open>
          <summary>{es ? "Entrada/Salida" : "Check-in/Check-out"} <span aria-hidden="true">⌄</span></summary>
          <div className="hotel-policy-accordion-content">
            <dl className="hotel-policy-accordion-rows">
              <div><dt>{es ? "Edad mínima para registrarse" : "Minimum age to register"}</dt><dd>{es ? "18 años (propuesta)" : "18 (proposed)"}</dd></div>
              <div><dt>{es ? "Horario de entrada" : "Check-in time"}</dt><dd>2:00 p. m.</dd></div>
              <div><dt>{es ? "Horario de salida" : "Check-out time"}</dt><dd>11:00 a. m.</dd></div>
              <div><dt>{es ? "Cargo por salida anticipada" : "Early checkout fee"}</dt><dd>{es ? "Por confirmar con recepción" : "Confirm with reception"}</dd></div>
              <div><dt>{es ? "Cargo por salida tardía" : "Late checkout fee"}</dt><dd>{es ? "Sujeto a disponibilidad y posible cargo adicional" : "Subject to availability and possible additional charge"}</dd></div>
            </dl>
          </div>
        </details>
        <details open>
          <summary>{es ? "Pago" : "Payment"} <span aria-hidden="true">⌄</span></summary>
          <div className="hotel-policy-accordion-content">
            <dl className="hotel-policy-accordion-rows">
              <div><dt>{es ? "Moneda" : "Currency"}</dt><dd>{es ? "Sol peruano (PEN); confirmar otras monedas aceptadas" : "Peruvian sol (PEN); confirm other accepted currencies"}</dd></div>
              <div><dt>{es ? "Tarjetas aceptadas" : "Accepted credit cards"}</dt><dd>{es ? "Visa, Mastercard, American Express y Diners Club: por confirmar" : "Visa, Mastercard, American Express and Diners Club: pending confirmation"}</dd></div>
              <div><dt>{es ? "Depósito" : "Deposit"}</dt><dd>{es ? "Podría solicitarse un anticipo para confirmar la reserva" : "A deposit may be requested to confirm the reservation"}</dd></div>
              <div><dt>{es ? "Saldo" : "Remaining balance"}</dt><dd>{es ? "Propuesta: pago al registrarse" : "Proposed: due at check-in"}</dd></div>
            </dl>
          </div>
        </details>
      </div>
    </div>
  );
}
