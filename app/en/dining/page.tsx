import type { Metadata } from "next";
import { whatsapp } from "../data/hotel";

export const metadata: Metadata = {
  title: "Dining | Hotel BlueThree Chancay",
  description: "Explore the BlueThree Café menu: breakfasts, natural juices, drinks and more.",
};

const breakfast = [
  { name: "Egg sandwich", description: "2 eggs", portion: "2 bread rolls" },
  { name: "Chicken sandwich", description: "Chicken, shoestring potatoes, mayonnaise, lettuce", portion: "2 bread rolls" },
  { name: "Huachana sausage", description: "Huachana sausage with egg", portion: "2 bread rolls" },
];
const juices = [
  { name: "Pineapple", price: "10.00" },
  { name: "Strawberry", price: "10.00" },
  { name: "Mixed fruit juice", price: "10.00" },
  { name: "Papaya", price: "10.00" },
];
const meals = [
  { name: "Avocado toast", description: "2 slices of toast, 2 eggs, guacamole", portion: "2 bread rolls", price: "11.50" },
  { name: "American breakfast", description: "2 eggs, bacon, bread", portion: "2 bread rolls", price: "10.50" },
  { name: "Chancay-style breakfast", description: "Ham, bacon, sausage, hot dog, bread", portion: "2 bread rolls", price: "10.50" },
  { name: "Chicken ciabatta", description: "Chicken, shoestring potatoes, mayonnaise, lettuce", portion: "2 bread rolls", price: "10.50" },
];
const drinks = [
  { name: "Inka or Coca soda 1½ L", price: "9.00" },
  { name: "Cielo water 2.5 L", price: "6.00" },
  { name: "Cielo water 1 L", price: "4.00" },
  { name: "Sporade 500 ml", price: "4.00" },
  { name: "Inka Cola 600 ml", price: "4.00" },
  { name: "Coca Cola 600 ml", price: "4.00" },
  { name: "Frugos del Valle", price: "2.50" },
  { name: "Cielo water 625 ml", price: "2.00" },
];
const alcoholicDrinks = [
  { name: "Vino Queirolo rosé 750 ml", price: "25.00" },
  { name: "Wheat beer 620 ml", price: "10.00" },
  { name: "Mike", price: "7.50" },
  { name: "Pilsen can 473 ml", price: "7.50" },
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
    <section className="template-page-hero"><p className="eyebrow">HOTEL BLUETHREE CHANCAY</p><h1>Dining</h1><p>Discover the BlueThree Café menu: breakfasts, juices and drinks to enjoy during your stay.</p></section>
    <section className="section-wrap cafe-menu" aria-label="BlueThree Café menu">
      <div className="cafe-menu-intro"><p className="eyebrow">MENU · BLUETHREE CAFÉ</p><h2>Explore our menu</h2><p>Prices in Peruvian soles (S/).</p></div>
      <div className="cafe-menu-grid">
        <div className="cafe-menu-column">
          <div className="cafe-menu-breakfast">
            <MenuSection title="1 · Breakfast included per person" items={breakfast}/>
            <MenuSection title="2 · Breakfast included per person" items={[{name:"Coffee",portion:"1 cup"},{name:"Oatmeal",portion:"1 cup"}]}/>
          </div>
          <MenuSection title="Drinks" items={drinks}/>
        </div>
        <div className="cafe-menu-column">
          <MenuSection title="Fresh juices" items={juices}/>
          <MenuSection title="Omelettes" note="Served with bread, butter and jam." items={meals}/>
          <MenuSection title="Alcoholic beverages" items={alcoholicDrinks}/>
        </div>
      </div>
      <div className="cafe-menu-footer"><p>Menu transcribed from the hotel&apos;s menu. Confirm availability, prices and conditions before ordering.</p><a className="button button-dark" href={whatsapp} target="_blank" rel="noopener noreferrer">Contact the hotel ↗</a></div>
    </section>
  </main>;
}
