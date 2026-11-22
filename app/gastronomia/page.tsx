import type { Metadata } from "next";
import { whatsapp } from "../data/hotel";

export const metadata: Metadata = {
  title: "Gastronomía | Hotel BlueThree Chancay",
  description: "Consulta el menú de Cafetería BlueThree: desayunos, jugos naturales, bebidas y más.",
};

const breakfast = [
  { name: "Pan con huevo", description: "2 huevos", portion: "2 panes" },
  { name: "Pan con pollo", description: "Pollo, papas al hilo, mayonesa, lechuga", portion: "2 panes" },
  { name: "Salchicha huachana", description: "Salchicha huachana con huevo", portion: "2 panes" },
];
const juices = [
  { name: "Piña", price: "10.00" },
  { name: "Fresa", price: "10.00" },
  { name: "Jugo mixto", price: "10.00" },
  { name: "Papaya", price: "10.00" },
];
const meals = [
  { name: "Avocado toast", description: "2 panes tostados, 2 huevos, guacamole", portion: "2 panes", price: "11.50" },
  { name: "American breakfast", description: "2 huevos, tocino, pan", portion: "2 panes", price: "10.50" },
  { name: "Chancayano", description: "Jamón, tocino, salchicha, hot dog, pan", portion: "2 panes", price: "10.50" },
  { name: "Pan ciabatta con pollo", description: "Pollo, papas al hilo, mayonesa, lechuga", portion: "2 panes", price: "10.50" },
];
const drinks = [
  { name: "Gaseosa Inka o Coca 1½ Lt", price: "9.00" },
  { name: "Agua Cielo 2.5 Lt", price: "6.00" },
  { name: "Agua Cielo 1 Lt", price: "4.00" },
  { name: "Sporade 500 ml", price: "4.00" },
  { name: "Inka Cola 600 ml", price: "4.00" },
  { name: "Coca Cola 600 ml", price: "4.00" },
  { name: "Frugos del Valle", price: "2.50" },
  { name: "Agua Cielo 625 ml", price: "2.00" },
];
const alcoholicDrinks = [
  { name: "Vino Queirolo rosé 750 ml", price: "25.00" },
  { name: "Cerveza trigo 620 ml", price: "10.00" },
  { name: "Mike", price: "7.50" },
  { name: "Pilsen en lata 473 ml", price: "7.50" },
];

type MenuItem = { name: string; description?: string; portion?: string; price?: string };
function MenuSection({ title, note, items }: { title: string; note?: string; items: MenuItem[] }) {
  return <section className="cafe-menu-section">
    <div className="cafe-menu-section-head"><h3>{title}</h3>{note && <p>{note}</p>}</div>
    <div className="cafe-menu-items">{items.map(item => <div className="cafe-menu-item" key={item.name}>
      <div className="cafe-menu-item-main"><div className="cafe-menu-item-title"><h4>{item.name}</h4>{item.portion && <span>{item.portion}</span>}</div>{item.description && <p>{item.description}</p>}</div>
      {item.price && <strong className="cafe-menu-price">S/ {item.price}</strong>}
    </div>)}</div>
  </section>;
}

export default function Gastronomia() {
  return <main className="template-page">
    <section className="template-page-hero"><p className="eyebrow">HOTEL BLUETHREE CHANCAY</p><h1>Gastronomía</h1><p>Descubre el menú de Cafetería BlueThree. Desayunos, jugos y bebidas para acompañar tu estadía.</p></section>
    <section className="section-wrap cafe-menu" aria-label="Menú de Cafetería BlueThree">
      <div className="cafe-menu-intro"><p className="eyebrow">MENÚ · CAFETERÍA BLUETHREE</p><h2>Descubre nuestra carta</h2><p>Precios expresados en soles peruanos (S/).</p></div>
      <div className="cafe-menu-grid">
        <div className="cafe-menu-column">
          <div className="cafe-menu-breakfast">
            <MenuSection title="1 · Desayuno incluye por persona" items={breakfast}/>
            <MenuSection title="2 · Desayuno incluye por persona" items={[{name:"Café",portion:"1 taza"},{name:"Avena",portion:"1 taza"}]}/>
          </div>
          <MenuSection title="Bebidas" items={drinks}/>
        </div>
        <div className="cafe-menu-column">
          <MenuSection title="Jugos naturales" items={juices}/>
          <MenuSection title="Omelettes" note="Servido con pan, mantequilla y mermelada." items={meals}/>
          <MenuSection title="Bebidas alcohólicas" items={alcoholicDrinks}/>
        </div>
      </div>
      <div className="cafe-menu-footer"><p>Menú transcrito de la carta proporcionada por el hotel. Consulta disponibilidad, precios y condiciones antes de ordenar.</p><a className="button button-dark" href={whatsapp} target="_blank" rel="noopener noreferrer">Consultar al hotel ↗</a></div>
    </section>
  </main>;
}
