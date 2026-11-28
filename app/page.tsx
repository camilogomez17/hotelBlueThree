"use client";

import BlueThreeBenefits from "./components/BlueThreeBenefits";
import HomeDiningFeature from "./components/HomeDiningFeature";
import HomeFaq from "./components/HomeFaq";
import HomeLocation from "./components/HomeLocation";

import { useState } from "react";
import { ServicesGrid } from "./components/ServicesGrid";
import PolicyTabs from "./components/PolicyTabs";
import HomeRoomCards from "./components/HomeRoomCards";

import Image from 'next/image'

const photos = [
  {
    src: "https://images.trvl-media.com/lodging/90000000/89740000/89732700/89732652/c6474fe1.jpg?impolicy=resizecrop&ra=fill&rh=575&rw=575",
    alt: "Hotel BlueThree y atractivos de Chancay",
    title: "Descubre Chancay",
  },
  {
    src: "https://images.trvl-media.com/lodging/90000000/89740000/89732700/89732652/af4713ea.jpg?h=800&impolicy=fcrop&p=1&q=medium&w=1200",
    alt: "Habitación con cama y detalles azules",
    title: "Habitaciones",
  },
  {
    src: "https://images.trvl-media.com/lodging/90000000/89740000/89732700/89732652/8571c6b5.jpg?impolicy=resizecrop&ra=fill&rh=575&rw=575",
    alt: "Habitación con dos camas y escritorio",
    title: "Espacios para descansar",
  },
  {
    src: "https://images.trvl-media.com/lodging/90000000/89740000/89732700/89732652/8b6c1da2.jpg?impolicy=resizecrop&ra=fill&rh=575&rw=575",
    alt: "Habitación con vista al atardecer",
    title: "Vistas",
  },
];

const tripAdvisor = "https://www.tripadvisor.com/Hotel_Review-g2336594-d24005682-Reviews-Hotel_BlueThree_Chancay-Chancay_Lima_Region.html";

export default function Home() {
  const [active, setActive] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [utilityTab, setUtilityTab] = useState<"reviews" | "contact" | "arrival">("reviews");
  const previous = () => setActive((current) => (current - 1 + photos.length) % photos.length);
  const next = () => setActive((current) => (current + 1) % photos.length);

  return (
    <main id="inicio" className="hotel-home">
      <section className="filmstrip-hero" id="galeria" aria-label="Galería de fotografías del hotel">
        <div className="filmstrip-frame">
          <div className="filmstrip-track">
            {[-1, 0, 1].map((offset) => {
              const index = (active + offset + photos.length) % photos.length;
              const photo = photos[index];
              return <button key={offset} type="button" className={offset === 0 ? "filmstrip-slide is-current" : "filmstrip-slide"} onClick={() => offset < 0 ? previous() : offset > 0 ? next() : setShowAll(!showAll)} aria-label={offset === 0 ? "Ver todas las fotos" : `Ver fotografía: ${photo.title}`}>
               <Image width={1200} height={800} src={photo.src} alt={photo.alt} loading={offset === 0 ? "eager" : "lazy"} />
              </button>;
            })}
          </div>
          <button className="filmstrip-arrow filmstrip-prev" type="button" onClick={previous} aria-label="Fotografía anterior">‹</button>
          <button className="filmstrip-arrow filmstrip-next" type="button" onClick={next} aria-label="Fotografía siguiente">›</button>
          <button className="filmstrip-count" type="button" onClick={() => setShowAll(!showAll)} aria-label="Abrir galería completa">{active + 1}/{photos.length}</button>
        </div>
        {showAll && <div className="filmstrip-thumbnails" aria-label="Todas las fotografías">
          {photos.map((photo, index) => <button key={photo.src} type="button" className={active === index ? "filmstrip-thumb is-active" : "filmstrip-thumb"} onClick={() => setActive(index)} aria-label={`Seleccionar ${photo.title}`}><Image width={1200} height={800} src={photo.src} alt={photo.alt} loading="lazy" /></button>)}
        </div>}
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

      <div className="hotel-overview-split">
      <div className="hotel-overview-info">
      <section className="filmstrip-intro" aria-label="Presentación de Hotel BlueThree">
        <h2>Hotel BlueThree Chancay</h2>
        <p>Nuestro hotel está a 10 minutos de la playa de Chancay. Disfruta de una estadía en Chancay, cerca de atractivos como el Castillo de Chancay, el Museo Municipal de Chancay, Eco Truly Park y la Reserva Nacional de Lachay. Explora nuestras habitaciones y suites, algunas con jacuzzi, balcón, vistas panorámicas, precios con desayuno incluido, servicio de traslado con transporte privado, eventos corporativos, y servicio de decoraciones de habitaciones.</p><div className="home-intro-actions"><a className="button button-dark" href="/habitaciones">Explorar habitaciones</a><a className="button button-outline" href="/ubicacion">Ver ubicación</a></div>
      </section>

      </div>
      <section className="services-section" id="servicios"><ServicesGrid /></section>
      </div>

      <HomeRoomCards />

      <BlueThreeBenefits language="es" />

      <section className="home-policies-section section-wrap" id="politicas">
        <div className="section-heading"><div><p className="eyebrow">ANTES DE TU LLEGADA</p><h2>Información<br/>y <em>políticas.</em></h2></div><p>Consulta tarifas, familias, estacionamiento, mascotas, fumar y Wi-Fi antes de reservar.</p></div>
        <PolicyTabs language="es" />
        <div className="home-policies-more"><a className="room-explore-button" href="/politicas">Ver todas las políticas ↗</a></div>
      </section>

      <HomeDiningFeature language="es" />

      <section className="bluethree-events" aria-labelledby="bluethree-events-heading"><div className="bluethree-events-inner"><h2 id="bluethree-events-heading">Reuniones y eventos</h2><p>Organiza tu próxima reunión, celebración u ocasión especial en BlueThree, Chancay. Comunícate con nuestro equipo para consultar los espacios disponibles, la organización y las opciones para tu grupo.</p><a href="/contacto" className="bluethree-events-button">Planificar un evento</a></div></section>

      <HomeLocation language="es" />
      <HomeFaq language="es" />

    </main>
  );
}
