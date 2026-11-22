import type { Metadata } from "next";
import { whatsapp } from "../data/hotel";

export const metadata: Metadata = {
  title: "Restauration | Hôtel BlueThree Chancay",
  description: "Découvrez la carte du Café BlueThree : petits-déjeuners, jus naturels, boissons et plus encore.",
};

const breakfast = [
  { name: "Pain aux œufs", description: "2 œufs", portion: "2 petits pains" },
  { name: "Sandwich au poulet", description: "Poulet, pommes paille, mayonnaise, laitue", portion: "2 petits pains" },
  { name: "Saucisse huachana", description: "Saucisse huachana aux œufs", portion: "2 petits pains" },
];
const juices = [
  { name: "Ananas", price: "10.00" },
  { name: "Fraise", price: "10.00" },
  { name: "Jus de fruits mélangés", price: "10.00" },
  { name: "Papaye", price: "10.00" },
];
const meals = [
  { name: "Avocado toast", description: "2 tranches de pain grillé, 2 œufs, guacamole", portion: "2 petits pains", price: "11.50" },
  { name: "American breakfast", description: "2 œufs, bacon, pain", portion: "2 petits pains", price: "10.50" },
  { name: "Petit-déjeuner de Chancay", description: "Jambon, bacon, saucisse, hot-dog, pain", portion: "2 petits pains", price: "10.50" },
  { name: "Ciabatta au poulet", description: "Poulet, pommes paille, mayonnaise, laitue", portion: "2 petits pains", price: "10.50" },
];
const drinks = [
  { name: "Soda Inka ou Coca 1½ L", price: "9.00" },
  { name: "Eau Cielo 2,5 L", price: "6.00" },
  { name: "Eau Cielo 1 L", price: "4.00" },
  { name: "Sporade 500 ml", price: "4.00" },
  { name: "Inka Cola 600 ml", price: "4.00" },
  { name: "Coca Cola 600 ml", price: "4.00" },
  { name: "Frugos del Valle", price: "2.50" },
  { name: "Eau Cielo 625 ml", price: "2.00" },
];
const alcoholicDrinks = [
  { name: "Vino Queirolo rosé 750 ml", price: "25.00" },
  { name: "Bière de blé 620 ml", price: "10.00" },
  { name: "Mike", price: "7.50" },
  { name: "Pilsen en canette 473 ml", price: "7.50" },
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
    <section className="template-page-hero"><p className="eyebrow">HÔTEL BLUETHREE CHANCAY</p><h1>Restauration</h1><p>Découvrez le menu du Café BlueThree : petits-déjeuners, jus et boissons pour accompagner votre séjour.</p></section>
    <section className="section-wrap cafe-menu" aria-label="Menu du Café BlueThree">
      <div className="cafe-menu-intro"><p className="eyebrow">MENU · CAFÉ BLUETHREE</p><h2>Découvrez notre carte</h2><p>Prix en soles péruviens (S/).</p></div>
      <div className="cafe-menu-grid">
        <div className="cafe-menu-column">
          <div className="cafe-menu-breakfast">
            <MenuSection title="1 · Petit-déjeuner inclus par personne" items={breakfast}/>
            <MenuSection title="2 · Petit-déjeuner inclus par personne" items={[{name:"Café",portion:"1 tasse"},{name:"Porridge",portion:"1 tasse"}]}/>
          </div>
          <MenuSection title="Boissons" items={drinks}/>
        </div>
        <div className="cafe-menu-column">
          <MenuSection title="Jus naturels" items={juices}/>
          <MenuSection title="Omelettes" note="Servi avec du pain, du beurre et de la confiture." items={meals}/>
          <MenuSection title="Boissons alcoolisées" items={alcoholicDrinks}/>
        </div>
      </div>
      <div className="cafe-menu-footer"><p>Menu retranscrit à partir de la carte fournie par l’hôtel. Vérifiez la disponibilité, les prix et les conditions avant de commander.</p><a className="button button-dark" href={whatsapp} target="_blank" rel="noopener noreferrer">Contacter l’hôtel ↗</a></div>
    </section>
  </main>;
}
