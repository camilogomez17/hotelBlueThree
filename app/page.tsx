"use client";

import { useState } from "react";
import { ServicesGrid } from "./components/ServicesGrid";

const photos = [
  { src: "/StandardRoom.jpeg", alt: "Habitación estándar de Hotel BlueThree", title: "Habitación estándar" },
  { src: "/JuniorSuite.jpeg", alt: "Junior suite de Hotel BlueThree", title: "Junior suite" },
  { src: "/DeluxeJuniorSuite.jpeg", alt: "Suite junior deluxe de Hotel BlueThree", title: "Suite junior deluxe" },
  { src: "/JacuzziBalconyGardenViewSuite.jpeg", alt: "Suite con jacuzzi y balcón", title: "Suite con jacuzzi" },
];

const salesPhotos = [
  { src: "/StandardRoom.jpeg", alt: "Habitación estándar", title: "Habitación estándar" },
  { src: "/JuniorSuite.jpeg", alt: "Junior suite", title: "Junior suite" },
  { src: "/DeluxeJuniorSuite.jpeg", alt: "Suite junior deluxe", title: "Suite junior deluxe" },
  { src: "/DeluxeSuiteTwoBed.jpeg", alt: "Suite deluxe con dos camas", title: "Suite deluxe" },
  { src: "/DoubleBedRoomJacuzziBalconyPanoramicView.jpeg", alt: "Habitación doble con jacuzzi y balcón", title: "Habitación doble con jacuzzi" },
  { src: "/GardenViewRoomWithJacuzzi.jpeg", alt: "Habitación con jacuzzi y vista al jardín", title: "Vista al jardín" },
  { src: "/JacuzziBalconyGardenViewSuite.jpeg", alt: "Suite con jacuzzi, balcón y vista al jardín", title: "Suite con balcón" },
  { src: "/JacuzziBalconyRoomPanoramicView.jpeg", alt: "Habitación con jacuzzi, balcón y vista panorámica", title: "Vista panorámica" },
  { src: "/JacuzziRoomGardenView.jpeg", alt: "Habitación con jacuzzi y jardín", title: "Suite jardín" },
];

const diningCategories = ["Desayunos incluidos", "Jugos naturales", "Omelettes y desayunos", "Bebidas"];

const diningItems = [
  { name: "Pan con huevo", category: "Desayunos incluidos" },
  { name: "Pan con pollo", category: "Desayunos incluidos" },
  { name: "Salchicha huachana", category: "Desayunos incluidos" },
  { name: "Café", category: "Desayunos incluidos" },
  { name: "Avena", category: "Desayunos incluidos" },
  { name: "Piña", category: "Jugos naturales", price: "S/ 10.00" },
  { name: "Fresa", category: "Jugos naturales", price: "S/ 10.00" },
  { name: "Jugo mixto", category: "Jugos naturales", price: "S/ 10.00" },
  { name: "Papaya", category: "Jugos naturales", price: "S/ 10.00" },
  { name: "Avocado toast", category: "Omelettes y desayunos", price: "S/ 11.50" },
  { name: "American breakfast", category: "Omelettes y desayunos", price: "S/ 10.50" },
  { name: "Chancayano", category: "Omelettes y desayunos", price: "S/ 10.50" },
  { name: "Pan ciabatta con pollo", category: "Omelettes y desayunos", price: "S/ 10.50" },
  { name: "Inka Cola 600 ml", category: "Bebidas", price: "S/ 4.00" },
  { name: "Coca Cola 600 ml", category: "Bebidas", price: "S/ 4.00" },
  { name: "Agua Cielo 625 ml", category: "Bebidas", price: "S/ 2.00" },
  { name: "Frugos del Valle", category: "Bebidas", price: "S/ 2.50" },
  { name: "Vino Queirolo rosé 750 ml", category: "Bebidas", price: "S/ 25.00" },
  { name: "Cerveza trigo 620 ml", category: "Bebidas", price: "S/ 10.00" },
  { name: "Mike", category: "Bebidas", price: "S/ 7.50" },
  { name: "Pilsen en lata 473 ml", category: "Bebidas", price: "S/ 7.50" },
];

const roomPhotos = salesPhotos;

const attractions = [
  ["Castillo de Chancay", "Un emblemático atractivo histórico y cultural de la ciudad."],
  ["Museo Municipal de Chancay", "Conoce la historia y cultura local."],
  ["Eco Truly Park", "Un espacio ecológico y cultural junto al litoral."],
  ["Reserva Nacional de Lachay", "Paisajes naturales y lomas estacionales para explorar."],
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
    <a className="button button-dark" href={tripAdvisor} target="_blank" rel="noreferrer">Reservar en Tripadvisor <span>↗</span></a>
    <a className="button button-outline" href={"https://api.whatsapp.com/message/IPFK3E5CKTNGK1?autoload=1&app_absent=0"} target="_blank" rel="noreferrer">Contactar al hotel <span>↗</span></a>
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
      <section className="filmstrip-hero" id="galeria" aria-label="Galería de fotografías del hotel">
        <div className="filmstrip-frame">
          <div className="filmstrip-track">
            {[-1, 0, 1].map((offset) => {
              const index = (active + offset + photos.length) % photos.length;
              const photo = photos[index];
              return <button key={offset} type="button" className={offset === 0 ? "filmstrip-slide is-current" : "filmstrip-slide"} onClick={() => offset < 0 ? previous() : offset > 0 ? next() : setShowAll(!showAll)} aria-label={offset === 0 ? "Ver todas las fotos" : `Ver fotografía: ${photo.title}`}>
                <img src={photo.src} alt={photo.alt} loading={offset === 0 ? "eager" : "lazy"} />
              </button>;
            })}
          </div>
          <button className="filmstrip-arrow filmstrip-prev" type="button" onClick={previous} aria-label="Fotografía anterior">‹</button>
          <button className="filmstrip-arrow filmstrip-next" type="button" onClick={next} aria-label="Fotografía siguiente">›</button>
          <button className="filmstrip-count" type="button" onClick={() => setShowAll(!showAll)} aria-label="Abrir galería completa">{active + 1}/{photos.length}</button>
        </div>
        {showAll && <div className="filmstrip-thumbnails" aria-label="Todas las fotografías">
          {photos.map((photo, index) => <button key={photo.src} type="button" className={active === index ? "filmstrip-thumb is-active" : "filmstrip-thumb"} onClick={() => setActive(index)} aria-label={`Seleccionar ${photo.title}`}><img src={photo.src} alt={photo.alt} loading="lazy" /></button>)}
        </div>}
      </section>

      <section className="filmstrip-intro" aria-label="Presentación de Hotel BlueThree">
        <p>Disfruta de una estadía en Chancay, cerca de atractivos como el Castillo de Chancay, el Museo Municipal de Chancay, Eco Truly Park y la Reserva Nacional de Lachay. Explora nuestras habitaciones y suites, algunas con jacuzzi, balcón y vistas panorámicas.</p>\n        <div className="home-intro-actions"><a className="button button-dark" href="/habitaciones">Explorar habitaciones</a><a className="button button-outline" href="/politicas">Información del hotel</a></div>
      </section>

      <aside className="hotel-utility-rail" aria-label="Información y contacto del hotel">
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
            <div className="tripadvisor-score" aria-label="Calificación indicada: 4.9 de 5">
              <span className="tripadvisor-circles" aria-hidden="true"><i/><i/><i/><i/><i/></span>
              <strong>4.9</strong>
            </div>
            <a href={tripAdvisor} target="_blank" rel="noopener noreferrer">Leer opiniones ↗</a>
          </div>
          <div className="utility-contact">
            <div><strong>Llamar</strong><a href="tel:+51914046710">+51 914 046 710</a></div>
            <div><strong>Email</strong><a href="mailto:bluethreechancay@gmail.com">bluethreechancay@gmail.com</a></div>
          </div>
          <div className="utility-times">
            <div><strong>Check-in</strong><span>2:00 p. m.</span></div>
            <span className="utility-time-arrow" aria-hidden="true">→</span>
            <div><strong>Check-out</strong><span>11:00 a. m.</span></div>
          </div>
        </div>
      </aside>

      <div className="hotel-utility-mobile" aria-label="Información del hotel">
        <div className="hotel-utility-tabs" role="tablist" aria-label="Información rápida">
          <button type="button" role="tab" id="utility-tab-reviews" aria-controls="utility-panel-reviews" aria-selected={utilityTab === "reviews"} className={utilityTab === "reviews" ? "is-active" : ""} onClick={() => setUtilityTab("reviews")}><span aria-hidden="true">☆</span>Opiniones</button>
          <button type="button" role="tab" id="utility-tab-contact" aria-controls="utility-panel-contact" aria-selected={utilityTab === "contact"} className={utilityTab === "contact" ? "is-active" : ""} onClick={() => setUtilityTab("contact")}><span aria-hidden="true">☎</span>Contacto</button>
          <button type="button" role="tab" id="utility-tab-arrival" aria-controls="utility-panel-arrival" aria-selected={utilityTab === "arrival"} className={utilityTab === "arrival" ? "is-active" : ""} onClick={() => setUtilityTab("arrival")}><span aria-hidden="true">◷</span>Horarios</button>
        </div>
        <div className="hotel-utility-panel" id="utility-panel-reviews" role="tabpanel" aria-labelledby="utility-tab-reviews" hidden={utilityTab !== "reviews"}>
          <div className="utility-mobile-reviews"><strong>Tripadvisor</strong><span className="tripadvisor-circles" aria-label="Calificación mostrada: 4.9 de 5"><i/><i/><i/><i/><i/></span><strong>4.9</strong><a href={tripAdvisor} target="_blank" rel="noopener noreferrer">Leer opiniones ↗</a></div>
        </div>
        <div className="hotel-utility-panel" id="utility-panel-contact" role="tabpanel" aria-labelledby="utility-tab-contact" hidden={utilityTab !== "contact"}>
          <div className="utility-mobile-contact"><a href="tel:+51914046710">Llamar: +51 914 046 710</a><a href="mailto:bluethreechancay@gmail.com">bluethreechancay@gmail.com</a></div>
        </div>
        <div className="hotel-utility-panel" id="utility-panel-arrival" role="tabpanel" aria-labelledby="utility-tab-arrival" hidden={utilityTab !== "arrival"}>
          <div className="utility-mobile-times"><span><strong>Check-in</strong> 2:00 p. m.</span><span aria-hidden="true">→</span><span><strong>Check-out</strong> 11:00 a. m.</span></div>
        </div>
      </div>

      <section className="services-section" id="servicios"><ServicesGrid /></section>

      <section className="rooms-section section-wrap">
        <div className="section-heading"><div><p className="eyebrow">HABITACIONES Y SUITES</p><h2>Encuentra tu espacio<br/>para <em>descansar.</em></h2></div><p>Explora las fotografías de las habitaciones disponibles. Consulta directamente con el hotel para confirmar categorías, capacidad, tarifas y servicios incluidos.</p></div>
        <div className="room-grid" aria-label="Habitaciones y suites disponibles">
          {roomPhotos.slice(0, 4).map((photo) => (
            <article className="room-card" key={photo.src}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <div className="room-card-content">
                <h3>{photo.title}</h3>
                <a className="room-details-link" href="/habitaciones">Ver detalles de la habitación</a>
                <div className="room-card-spacer" />
                <a className="room-book-button" href="https://api.whatsapp.com/message/IPFK3E5CKTNGK1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">Consultar disponibilidad</a>
                <p className="room-rate-note">Confirma tarifas, capacidad y servicios directamente con el hotel.</p>
              </div>
            </article>
          ))}
        </div>
        <div className="room-more"><a className="room-explore-button" href="/habitaciones">Explorar todas las habitaciones</a></div>
      </section>

      <section className="home-dining-section section-wrap" id="gastronomia">
        <div className="section-heading"><div><p className="eyebrow">CAFETERÍA BLUETHREE</p><h2>Sabores para disfrutar<br/>tu <em>estadía.</em></h2></div><p>Descubre las categorías y opciones de nuestra carta. Consulta los precios, ingredientes y detalles en el menú completo.</p></div>
        <div className="home-dining-grid" aria-label="Categorías de gastronomía">
          {diningCategories.map(category => <div className="home-dining-card" key={category}>
            <h3>{category}</h3>
          </div>)}
        </div>
        <div className="home-dining-marquee" aria-label="Selección de platos y bebidas de nuestra carta">
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
        <div className="home-dining-more"><a className="room-explore-button" href="/gastronomia">Ver menú completo y precios ↗</a></div>
      </section>

      <section className="home-policies-section section-wrap" id="politicas">
        <div className="section-heading"><div><p className="eyebrow">ANTES DE TU LLEGADA</p><h2>Información<br/>y <em>políticas.</em></h2></div><p>Conoce las principales condiciones de tu estadía. Revisa los detalles completos antes de reservar.</p></div>
        <div className="home-policies-grid">
          <article className="home-policy-card"><span>01</span><h3>Horario de silencio</h3><p>10:30 p. m. a 9:00 a. m.</p></article>
          <article className="home-policy-card"><span>02</span><h3>Identificación</h3><p>Check-in para mayores de 18 años con identificación válida.</p></article>
          <article className="home-policy-card"><span>03</span><h3>Menores de 5 años</h3><p>Alojamiento sin cargo extra, sujeto a la capacidad de la habitación.</p></article>
          <article className="home-policy-card"><span>04</span><h3>Habitaciones libres de humo</h3><p>No fumar en habitaciones. Multa indicada: S/ 250.</p></article>
          <article className="home-policy-card"><span>05</span><h3>Daños y perjuicios</h3><p>Se cobra el costo de los daños ocasionados a instalaciones y suministros.</p></article>
          <article className="home-policy-card"><span>06</span><h3>Seguridad y registro</h3><p>Confidencialidad, venta responsable de alcohol y documentación de huéspedes extranjeros.</p></article>
        </div>
        <div className="home-policies-more"><a className="room-explore-button" href="/politicas">Ver todas las políticas ↗</a></div>
      </section>

    </main>
  );
}
