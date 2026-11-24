import Link from "next/link";

const icons = [
  <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 9h10M7 13h6"/></>,
  <><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8h8M8 12h8M8 16h4"/></>,
  <><path d="M3 10 12 3l9 7v10H3z"/><path d="M9 20v-7h6v7"/></>,
  <><path d="M12 21s7-6 7-12a7 7 0 0 0-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></>,
  <><path d="M4 8h16v12H4zM8 8V5h8v3M4 13h16"/><path d="M10 16h4"/></>,
  <><path d="M4 5h16v14H4zM4 8l8 6 8-6"/></>
];

export default function BlueThreeBenefits({language}:{language:"es"|"en"}) {
  const english=language==="en";
  const items=english?[
    ["Explore our rooms","/en/rooms"],
    ["Check availability","/en/contact"],
    ["Discover amenities","/en/hotel-information"],
    ["Explore our location","/en/location"],
    ["Ask about special stays","/en/contact"],
    ["Contact us directly","/en/contact"]
  ]:[
    ["Explora nuestras habitaciones","/habitaciones"],
    ["Consulta disponibilidad","/contacto"],
    ["Conoce los servicios","/informacion-del-hotel"],
    ["Descubre la ubicación","/ubicacion"],
    ["Consulta estadías especiales","/contacto"],
    ["Contáctanos directamente","/contacto"]
  ];
  return <section className="bluethree-benefits" aria-labelledby="bluethree-benefits-title">
    <div className="bluethree-benefits-inner">
      <h2 id="bluethree-benefits-title">BlueThree</h2>
      <ul className="bluethree-benefits-list">
        {items.map(([label,href],index)=><li key={href+label}>
          <Link href={href}>
            <svg className="bluethree-benefit-icon" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[index]}</svg>
            <span>{label}</span>
          </Link>
        </li>)}
      </ul>
    </div>
  </section>;
}
