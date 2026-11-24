"use client";

import { useState } from "react";

type Language = "es" | "en";
const policyContent = {
  es: [
    { title: "Tarifas y cargos", icon: "S/", body: "Los precios se expresan en dólares estadounidenses (USD). Según la normativa peruana, se añade un IGV del 18 % a las facturas de residentes peruanos y de no residentes que permanezcan más de 60 días. El importe se cobra en el hotel y no está incluido en la tarifa anunciada. Las tasas aplicables pueden variar." },
    { title: "Familias y niños", icon: "♧", body: "Los niños de hasta 12 años se alojan sin cargo adicional en la habitación de sus padres, compartiendo la cama con ellos." },
    { title: "Estacionamiento", icon: "P", rows: [["Estacionamiento propio", "Gratuito"], ["Servicio de valet", "No disponible"], ["Carga de vehículos eléctricos", "No disponible"], ["Estacionamiento vigilado", "Disponible"], ["Estacionamiento techado", "No disponible"], ["Entradas y salidas múltiples", "No disponibles"], ["Información adicional", "Servicio las 24 horas"]] },
    { title: "Mascotas", icon: "♧", body: "No se admiten mascotas." },
    { title: "Fumar", icon: "⊘", body: "Se puede aplicar una penalización por fumar en habitaciones para no fumadores." },
    { title: "Wi-Fi", icon: "⌁", body: "Wi-Fi gratuito en las habitaciones y en el vestíbulo." },
  ],
  en: [
    { title: "Fees and charges", icon: "$", body: "All prices are quoted in USD. Under Peru's regulations, an 18% VAT is added to bills for Peruvian residents and non-residents staying longer than 60 days. This amount is charged at the hotel and is not included in the advertised rate. Applicable tax rates may change." },
    { title: "Families and kids", icon: "♧", body: "Children up to 12 years old stay free in their parents' room when sharing a bed with their parents." },
    { title: "Parking", icon: "P", rows: [["Self-parking", "Complimentary"], ["Valet parking", "Not available"], ["EV charging", "Not available"], ["Secured parking", "Available"], ["Covered parking", "Not available"], ["In/out privileges", "Not available"], ["Other parking information", "24-hour service"]] },
    { title: "Pets", icon: "♧", body: "Pets are not allowed." },
    { title: "Smoking", icon: "⊘", body: "A penalty may apply for smoking in non-smoking rooms." },
    { title: "Wi-Fi", icon: "⌁", body: "Free Wi-Fi in guest rooms and the lobby." },
  ],
};

export default function PolicyTabs({ language }: { language: Language }) {
  const [active, setActive] = useState(0);
  const policies = [...policyContent[language].slice(1), policyContent[language][0]];
  const policy = policies[active];
  return <section className="policy-tabs" aria-label={language === "es" ? "Políticas del hotel" : "Hotel policies"}>
    <div className="policy-tabs-list" role="tablist" aria-label={language === "es" ? "Categorías de políticas" : "Policy categories"}>
      {policies.map((item, index) => <button key={item.title} id={`policy-tab-${index}`} type="button" role="tab" aria-controls={`policy-panel-${index}`} aria-selected={active === index} tabIndex={active === index ? 0 : -1} className={active === index ? "policy-tab is-active" : "policy-tab"} onClick={() => setActive(index)}>
        <span className="policy-tab-icon" aria-hidden="true">{item.icon}</span><span>{item.title}</span>
      </button>)}
    </div>
    <div className="policy-tab-panel" role="tabpanel" id={`policy-panel-${active}`} aria-labelledby={`policy-tab-${active}`} tabIndex={0}>
      {"rows" in policy && policy.rows ? <dl className="policy-tab-rows">{policy.rows.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl> : <p>{policy.body}</p>}
    </div>
  </section>;
}
