"use client";

import { useState } from "react";
import { ServicesGrid } from "./components/ServicesGrid";

const photos = [
  {
    src: "https://images.trvl-media.com/lodging/90000000/89740000/89732700/89732652/c6474fe1.jpg?impolicy=resizecrop&ra=fill&rh=575&rw=575",
    alt: "Hôtel BlueThree et attractions de Chancay",
    title: "Découvrez Chancay",
  },
  {
    src: "https://images.trvl-media.com/lodging/90000000/89740000/89732700/89732652/af4713ea.jpg?h=800&impolicy=fcrop&p=1&q=medium&w=1200",
    alt: "Chambre avec lit et touches de bleu",
    title: "Chambres",
  },
  {
    src: "https://images.trvl-media.com/lodging/90000000/89740000/89732700/89732652/8571c6b5.jpg?impolicy=resizecrop&ra=fill&rh=575&rw=575",
    alt: "Chambre avec deux lits et bureau",
    title: "Espaces de détente",
  },
  {
    src: "https://images.trvl-media.com/lodging/90000000/89740000/89732700/89732652/8b6c1da2.jpg?impolicy=resizecrop&ra=fill&rh=575&rw=575",
    alt: "Chambre avec vue sur le coucher de soleil",
    title: "Vues",
  },
];

const salesPhotos = [
  { src: "/StandardRoom.jpeg", alt: "Chambre standard", title: "Chambre standard" },
  { src: "/JuniorSuite.jpeg", alt: "Suite junior", title: "Suite junior" },
  { src: "/DeluxeJuniorSuite.jpeg", alt: "Suite junior deluxe", title: "Suite junior deluxe" },
  { src: "/DeluxeSuiteTwoBed.jpeg", alt: "Suite deluxe avec deux lits", title: "Suite deluxe" },
  { src: "/DoubleBedRoomJacuzziBalconyPanoramicView.jpeg", alt: "Chambre double avec jacuzzi et balcon", title: "Chambre double avec jacuzzi" },
  { src: "/GardenViewRoomWithJacuzzi.jpeg", alt: "Chambre avec jacuzzi et vue sur le jardin", title: "Vue sur le jardin" },
  { src: "/JacuzziBalconyGardenViewSuite.jpeg", alt: "Suite avec jacuzzi, balcon et vue sur le jardin", title: "Suite avec balcon" },
  { src: "/JacuzziBalconyRoomPanoramicView.jpeg", alt: "Chambre avec jacuzzi, balcon et vue panoramique", title: "Vue panoramique" },
  { src: "/JacuzziRoomGardenView.jpeg", alt: "Chambre avec jacuzzi et jardin", title: "Suite jardin" },
];

const diningCategories = ["Petits-déjeuners inclus", "Jus naturels", "Omelettes et petits-déjeuners", "Boissons"];

const diningItems = [
  { name: "Pain aux œufs", category: "Petits-déjeuners inclus" },
  { name: "Sandwich au poulet", category: "Petits-déjeuners inclus" },
  { name: "Saucisse huachana", category: "Petits-déjeuners inclus" },
  { name: "Café", category: "Petits-déjeuners inclus" },
  { name: "Porridge", category: "Petits-déjeuners inclus" },
  { name: "Ananas", category: "Jus naturels", price: "S/ 10.00" },
  { name: "Fraise", category: "Jus naturels", price: "S/ 10.00" },
  { name: "Jus de fruits mélangés", category: "Jus naturels", price: "S/ 10.00" },
  { name: "Papaye", category: "Jus naturels", price: "S/ 10.00" },
  { name: "Avocado toast", category: "Omelettes et petits-déjeuners", price: "S/ 11.50" },
  { name: "American breakfast", category: "Omelettes et petits-déjeuners", price: "S/ 10.50" },
  { name: "Petit-déjeuner de Chancay", category: "Omelettes et petits-déjeuners", price: "S/ 10.50" },
  { name: "Ciabatta au poulet", category: "Omelettes et petits-déjeuners", price: "S/ 10.50" },
  { name: "Inka Cola 600 ml", category: "Boissons", price: "S/ 4.00" },
  { name: "Coca Cola 600 ml", category: "Boissons", price: "S/ 4.00" },
  { name: "Eau Cielo 625 ml", category: "Boissons", price: "S/ 2.00" },
  { name: "Frugos del Valle", category: "Boissons", price: "S/ 2.50" },
  { name: "Vino Queirolo rosé 750 ml", category: "Boissons", price: "S/ 25.00" },
  { name: "Bière de blé 620 ml", category: "Boissons", price: "S/ 10.00" },
  { name: "Mike", category: "Boissons", price: "S/ 7.50" },
  { name: "Pilsen en canette 473 ml", category: "Boissons", price: "S/ 7.50" },
];

const roomPhotos = salesPhotos;
const amenities = ["Wi-Fi", "Parking", "Climatisation", "Restaurant et café", "Petit-déjeuner", "Réception ouverte 24 h/24", "Service en chambre", "Jardin", "Chambres avec jacuzzi", "Blanchisserie", "Événements et réunions", "Assistance touristique"];
const attractions = [
  ["Castillo de Chancay", "Un site historique et culturel emblématique de la ville."],
  ["Museo Municipal de Chancay", "Découvrez l’histoire et la culture locales."],
  ["Eco Truly Park", "Un lieu écologique et culturel près de la côte."],
  ["Reserva Nacional de Lachay", "Explorez les paysages naturels et les collines côtières saisonnières."],
];
const socials = [
  ["Instagram", "https://www.instagram.com/hotelbluethreechancay/"],
  ["Facebook", "https://www.facebook.com/Hotelesenchancayhuaral/"],
  ["TikTok", "https://www.tiktok.com/@hotelbluethreechancay"],
];
const tripAdvisor = "https://www.tripadvisor.com/Hotel_Review-g2336594-d24005682-Reviews-Hotel_BlueThree_Chancay-Chancay_Lima_Region.html";
const linktree = "https://linktr.ee/bluethree";
const mapsUrl = "https://www.google.com/maps/place/Hotel+BlueThree+Chancay+%7C+Hoteles+en+Chancay+%26+Huaral/@-11.5491071,-77.260408,15.39z/data=!4m9!3m8!1s0x91068921449d21a5:0x7351952174e4f1fe!5m2!4m1!1i2!8m2!3d-11.5453985!4d-77.2588947!16s%2Fg%2F11rsr5p47y?entry=ttu&g_ep=EgoyMDI2MTExOC4xIKXMDSoASAFQAw%3D%3D";
const address = "Residencial Buena Vista – Las Tres Pirámides, Chancay 15130, Perú";

function BookingLinks({ compact = false }: { compact?: boolean }) {
  return <div className={compact ? "booking-links compact" : "booking-links"}>
    <a className="button button-dark" href={tripAdvisor} target="_blank" rel="noreferrer">Réserver sur Tripadvisor <span>↗</span></a>
    <a className="button button-outline" href={"https://api.whatsapp.com/message/IPFK3E5CKTNGK1?autoload=1&app_absent=0"} target="_blank" rel="noreferrer">Contacter l’hôtel <span>↗</span></a>
  </div>;
}

export default function Home() {
  const [active, setActive] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [utilityTab, setUtilityTab] = useState<"reviews" | "contact" | "arrival">("reviews");
  const previous = () => setActive((current) => (current - 1 + photos.length) % photos.length);
  const next = () => setActive((current) => (current + 1) % photos.length);

  return (
    <main id="inicio">
      <section className="filmstrip-hero" id="galeria" aria-label="Galerie photos de l’hôtel">
        <div className="filmstrip-frame">
          <div className="filmstrip-track">
            {[-1, 0, 1].map((offset) => {
              const index = (active + offset + photos.length) % photos.length;
              const photo = photos[index];
              return <button key={offset} type="button" className={offset === 0 ? "filmstrip-slide is-current" : "filmstrip-slide"} onClick={() => offset < 0 ? previous() : offset > 0 ? next() : setShowAll(!showAll)} aria-label={offset === 0 ? "Voir toutes les photos" : `Ver fotografía: ${photo.title}`}>
                <img src={photo.src} alt={photo.alt} loading={offset === 0 ? "eager" : "lazy"} />
              </button>;
            })}
          </div>
          <button className="filmstrip-arrow filmstrip-prev" type="button" onClick={previous} aria-label="Photo précédente">‹</button>
          <button className="filmstrip-arrow filmstrip-next" type="button" onClick={next} aria-label="Photo suivante">›</button>
          <button className="filmstrip-count" type="button" onClick={() => setShowAll(!showAll)} aria-label="Ouvrir la galerie complète">{active + 1}/{photos.length}</button>
        </div>
        {showAll && <div className="filmstrip-thumbnails" aria-label="Toutes les photos">
          {photos.map((photo, index) => <button key={photo.src} type="button" className={active === index ? "filmstrip-thumb is-active" : "filmstrip-thumb"} onClick={() => setActive(index)} aria-label={`Seleccionar ${photo.title}`}><img src={photo.src} alt={photo.alt} loading="lazy" /></button>)}
        </div>}
      </section>

      <section className="filmstrip-intro" aria-label="Présentation de l’Hôtel BlueThree">
        <p>Profitez d’un séjour à Chancay, près du château de Chancay, du musée municipal, d’Eco Truly Park et de la réserve nationale de Lachay. Découvrez nos chambres et suites, dont certaines disposent d’un jacuzzi, d’un balcon et d’une vue panoramique.</p>
      </section>

      <aside className="hotel-utility-rail" aria-label="Informations et contact de l’hôtel">
        <div className="hotel-utility-inner">
          <div className="utility-reviews">
            <div className="tripadvisor-brand" aria-label="Tripadvisor">
              <svg className="tripadvisor-owl" viewBox="0 0 48 32" role="img" aria-label="Logotipo de Tripadvisor">
                <path d="M6 9 1 6l9-1C17 1 31 1 38 5l9 1-5 3c2 3 3 6 3 10a12 12 0 0 1-21 8A12 12 0 0 1 3 19c0-4 1-7 3-10Z" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round"/>
                <circle cx="15" cy="18" r="7" fill="#fff" stroke="currentColor" strokeWidth="2"/>
                <circle cx="33" cy="18" r="7" fill="#fff" stroke="currentColor" strokeWidth="2"/>
                <circle cx="15" cy="18" r="3" fill="currentColor"/>
                <circle cx="33" cy="18" r="3" fill="currentColor"/>
                <path d="m21 26 3 4 3-4" fill="#ffca31" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              <strong>Tripadvisor</strong>
            </div>
            <div className="tripadvisor-score" aria-label="Note affichée : 4,9 sur 5">
              <span className="tripadvisor-circles" aria-hidden="true"><i/><i/><i/><i/><i/></span>
              <strong>4.9</strong>
            </div>
            <a href={tripAdvisor} target="_blank" rel="noopener noreferrer">Lire les avis ↗</a>
          </div>
          <div className="utility-contact">
            <div><strong>Appeler</strong><a href="tel:+51914046710">+51 914 046 710</a></div>
            <div><strong>Email</strong><a href="mailto:bluethreechancay@gmail.com">bluethreechancay@gmail.com</a></div>
          </div>
          <div className="utility-times">
            <div><strong>Check-in</strong><span>2:00 p. m.</span></div>
            <span className="utility-time-arrow" aria-hidden="true">→</span>
            <div><strong>Check-out</strong><span>11:00 a. m.</span></div>
          </div>
        </div>
      </aside>

      <div className="hotel-utility-mobile" aria-label="Informations sur l’hôtel">
        <div className="hotel-utility-tabs" role="tablist" aria-label="Informations rapides">
          <button type="button" role="tab" id="utility-tab-reviews" aria-controls="utility-panel-reviews" aria-selected={utilityTab === "reviews"} className={utilityTab === "reviews" ? "is-active" : ""} onClick={() => setUtilityTab("reviews")}><span aria-hidden="true">☆</span>Avis</button>
          <button type="button" role="tab" id="utility-tab-contact" aria-controls="utility-panel-contact" aria-selected={utilityTab === "contact"} className={utilityTab === "contact" ? "is-active" : ""} onClick={() => setUtilityTab("contact")}><span aria-hidden="true">☎</span>Contact</button>
          <button type="button" role="tab" id="utility-tab-arrival" aria-controls="utility-panel-arrival" aria-selected={utilityTab === "arrival"} className={utilityTab === "arrival" ? "is-active" : ""} onClick={() => setUtilityTab("arrival")}><span aria-hidden="true">◷</span>Horaires</button>
        </div>
        <div className="hotel-utility-panel" id="utility-panel-reviews" role="tabpanel" aria-labelledby="utility-tab-reviews" hidden={utilityTab !== "reviews"}>
          <div className="utility-mobile-reviews"><strong>Tripadvisor</strong><span className="tripadvisor-circles" aria-label="Note affichée : 4,9 sur 5"><i/><i/><i/><i/><i/></span><strong>4.9</strong><a href={tripAdvisor} target="_blank" rel="noopener noreferrer">Lire les avis ↗</a></div>
        </div>
        <div className="hotel-utility-panel" id="utility-panel-contact" role="tabpanel" aria-labelledby="utility-tab-contact" hidden={utilityTab !== "contact"}>
          <div className="utility-mobile-contact"><a href="tel:+51914046710">Appeler : +51 914 046 710</a><a href="mailto:bluethreechancay@gmail.com">bluethreechancay@gmail.com</a></div>
        </div>
        <div className="hotel-utility-panel" id="utility-panel-arrival" role="tabpanel" aria-labelledby="utility-tab-arrival" hidden={utilityTab !== "arrival"}>
          <div className="utility-mobile-times"><span><strong>Check-in</strong> 2:00 p. m.</span><span aria-hidden="true">→</span><span><strong>Check-out</strong> 11:00 a. m.</span></div>
        </div>
      </div>

      <section className="services-section" id="servicios"><ServicesGrid /></section>

      <section className="intro section-wrap" id="habitaciones">
        <div className="intro-label"><span className="rule" /> HÔTEL BLUETHREE CHANCAY</div>
        <div className="intro-copy">
          <h1>Découvrez Chancay.<br/><em>Reposez-vous</em> au BlueThree.</h1>
          <div>
            <p className="lead">Hospitalité et détente sur la côte de Huaral.</p>
            <p>L’Hôtel BlueThree Chancay est un point de départ idéal pour découvrir la ville et ses environs. Découvrez nos chambres et services, et contactez directement l’hôtel pour organiser votre séjour.</p>
            <BookingLinks />
          </div>
        </div>
        <div className="hotel-facts">
          <div><span>ARRIVÉE</span><strong>2:00 p. m.</strong></div>
          <div><span>DÉPART</span><strong>11:00 a. m.</strong></div>
          <div><span>EMPLACEMENT</span><strong>Chancay, Huaral · Pérou</strong></div>
          <div><span>RÉSERVATIONS</span><strong><a href={tripAdvisor} target="_blank" rel="noreferrer">Tripadvisor ↗</a></strong></div>
        </div>
      </section>

      <section className="rooms-section section-wrap">
        <div className="section-heading"><div><p className="eyebrow">CHAMBRES ET SUITES</p><h2>Trouvez votre espace<br/>pour <em>vous détendre.</em></h2></div><p>Parcourez les photos des chambres disponibles. Contactez directement l’hôtel pour confirmer les catégories, la capacité, les tarifs et les services inclus.</p></div>
        <div className="room-grid" aria-label="Chambres et suites disponibles">
          {roomPhotos.slice(0, 4).map((photo) => (
            <article className="room-card" key={photo.src}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <div className="room-card-content">
                <h3>{photo.title}</h3>
                <a className="room-details-link" href="/fr/habitaciones">Voir les détails de la chambre</a>
                <div className="room-card-spacer" />
                <a className="room-book-button" href="https://api.whatsapp.com/message/IPFK3E5CKTNGK1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">Vérifier la disponibilité</a>
                <p className="room-rate-note">Confirmez les tarifs, la capacité et les services directement auprès de l’hôtel.</p>
              </div>
            </article>
          ))}
        </div>
        <div className="room-more"><a className="room-explore-button" href="/fr/habitaciones">Découvrir toutes les chambres</a></div>
      </section>

      <section className="home-dining-section section-wrap" id="gastronomia">
        <div className="section-heading"><div><p className="eyebrow">CAFÉ BLUETHREE</p><h2>Des saveurs à savourer<br/>votre <em>séjour.</em></h2></div><p>Découvrez les catégories et les plats de notre carte. Consultez les prix, ingrédients et détails dans le menu complet.</p></div>
        <div className="home-dining-grid" aria-label="Catégories de restauration">
          {diningCategories.map(category => <div className="home-dining-card" key={category}>
            <h3>{category}</h3>
          </div>)}
        </div>
        <div className="home-dining-marquee" aria-label="Sélection de plats et boissons de notre carte">
          <div className="home-dining-marquee-track">
            {[0, 1].map(copy => <div className="home-dining-marquee-set" key={copy} aria-hidden={copy === 1}>
              {diningItems.map(item => <div className="home-dining-item" key={item.name}>
                <span className="home-dining-item-category">{item.category}</span>
                <strong>{item.name}</strong>
                {item.price && <span className="home-dining-item-price">{item.price}</span>}
              </div>)}
            </div>)}
          </div>
        </div>
        <div className="home-dining-more"><a className="room-explore-button" href="/fr/gastronomia">Voir le menu complet et les prix ↗</a></div>
      </section>

      <section className="home-policies-section section-wrap" id="politicas">
        <div className="section-heading"><div><p className="eyebrow">AVANT VOTRE ARRIVÉE</p><h2>Informations<br/>et <em>règlement.</em></h2></div><p>Découvrez les principales conditions de votre séjour. Consultez les détails avant de réserver.</p></div>
        <div className="home-policies-grid">
          <article className="home-policy-card"><span>01</span><h3>Heures de silence</h3><p>22 h 30 à 9 h</p></article>
          <article className="home-policy-card"><span>02</span><h3>Pièce d’identité</h3><p>L’enregistrement est réservé aux personnes de plus de 18 ans munies d’une pièce d’identité valide.</p></article>
          <article className="home-policy-card"><span>03</span><h3>Enfants de moins de 5 ans</h3><p>Hébergement gratuit, sous réserve de la capacité de la chambre.</p></article>
          <article className="home-policy-card"><span>04</span><h3>Chambres non-fumeurs</h3><p>Interdiction de fumer dans les chambres. Amende indiquée : S/ 250.</p></article>
          <article className="home-policy-card"><span>05</span><h3>Dommages et préjudices</h3><p>Les dommages aux installations et aux équipements seront facturés.</p></article>
          <article className="home-policy-card"><span>06</span><h3>Sécurité et enregistrement</h3><p>Confidentialité, vente responsable d’alcool et documents des clients étrangers.</p></article>
        </div>
        <div className="home-policies-more"><a className="room-explore-button" href="/fr/politicas">Voir toutes les conditions ↗</a></div>
      </section>

    </main>
  );
}
