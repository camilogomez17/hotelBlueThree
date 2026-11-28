import { whatsapp } from "../data/hotel";

export default function AdditionalPolicies({ language }: { language: "es" | "en" }) {
  const es = language === "es";
  return (
    <div className="hotel-policy-note">
      <div className="hotel-policy-accordion">
        <details open>
          <summary>{es ? "Cancelación" : "Cancellation"} <span aria-hidden="true" /></summary>
          <div className="hotel-policy-accordion-content">
            <p>{es ? "Las condiciones de cancelación pueden variar según la tarifa y las fechas de la reserva. Consulta tu confirmación para verificar las condiciones aplicables." : "Cancellation terms may vary by rate and reservation dates. Review your confirmation for the applicable terms."}</p>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer">{es ? "Consultar con el hotel" : "Contact the hotel"}</a>
          </div>
        </details>
        <details open>
          <summary>{es ? "Entrada/Salida" : "Check-in/Check-out"} <span aria-hidden="true" /></summary>
          <div className="hotel-policy-accordion-content">
            <dl className="hotel-policy-accordion-rows">
              <div><dt>{es ? "Edad mínima para registrarse" : "Minimum age to register"}</dt><dd>{es ? "18 años" : "18"}</dd></div>
              <div><dt>{es ? "Horario de entrada" : "Check-in time"}</dt><dd>{es ? "2:00 p. m." : "2:00 p.m."}</dd></div>
              <div><dt>{es ? "Horario de salida" : "Check-out time"}</dt><dd>{es ? "11:00 a. m." : "11:00 a.m."}</dd></div>
              <div><dt>{es ? "Cargo por salida anticipada" : "Early checkout fee"}</dt><dd>0</dd></div>
              <div><dt>{es ? "Cargo por salida tardía" : "Late checkout fee"}</dt><dd>{es ? "50 %. Después de 4 horas, 90 %." : "50%. After 4 hours, 90%."}</dd></div>
            </dl>
          </div>
        </details>
        <details open>
          <summary>{es ? "Pago" : "Payment"} <span aria-hidden="true" /></summary>
          <div className="hotel-policy-accordion-content">
            <dl className="hotel-policy-accordion-rows">
              <div><dt>{es ? "Moneda" : "Currency"}</dt><dd>{es ? "Soles" : "Peruvian soles"}</dd></div>
              <div><dt>{es ? "Métodos de pago aceptados" : "Accepted payment methods"}</dt><dd>{es ? "Visa, Mastercard, depósito bancario y efectivo" : "Visa, Mastercard, bank deposit, and cash"}</dd></div>
            </dl>
          </div>
        </details>
      </div>
    </div>
  );
}
