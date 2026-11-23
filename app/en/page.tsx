"use client";

import BlueThreeBenefits from "../components/BlueThreeBenefits";
import HomeLocation from "../components/HomeLocation";

import { useState } from "react";
import { ServicesGrid } from "./components/ServicesGrid";
import PolicyTabs from "../components/PolicyTabs";

const photos = [
  {
    src: "https://images.trvl-media.com/lodging/90000000/89740000/89732700/89732652/c6474fe1.jpg?impolicy=resizecrop&ra=fill&rh=575&rw=575",
    alt: "Hotel BlueThree and Chancay attractions",
    title: "Discover Chancay",
  },
  {
    src: "https://images.trvl-media.com/lodging/90000000/89740000/89732700/89732652/af4713ea.jpg?h=800&impolicy=fcrop&p=1&q=medium&w=1200",
    alt: "Room with bed and blue accents",
    title: "Rooms",
  },
  {
    src: "https://images.trvl-media.com/lodging/90000000/89740000/89732700/89732652/8571c6b5.jpg?impolicy=resizecrop&ra=fill&rh=575&rw=575",
    alt: "Room with two beds and desk",
    title: "Spaces to unwind",
  },
  {
    src: "https://images.trvl-media.com/lodging/90000000/89740000/89732700/89732652/8b6c1da2.jpg?impolicy=resizecrop&ra=fill&rh=575&rw=575",
    alt: "Room with sunset view",
    title: "Views",
  },
];

const salesPhotos = [
  { src: "/rooms-clean/StandardRoom.jpeg", alt: "Standard room", title: "Standard room" },
  { src: "/rooms-clean/JuniorSuite.jpeg", alt: "Junior suite", title: "Junior suite" },
  { src: "/rooms-clean/DeluxeJuniorSuite.jpeg", alt: "Deluxe junior suite", title: "Deluxe junior suite" },
  { src: "/rooms-clean/DeluxeSuiteTwoBed.jpeg", alt: "Deluxe suite with two beds", title: "Deluxe suite" },
  { src: "/rooms-clean/DoubleBedRoomJacuzziBalconyPanoramicView.jpeg", alt: "Double room with jacuzzi and balcony", title: "Double room with jacuzzi" },
  { src: "/rooms-clean/GardenViewRoomWithJacuzzi.jpeg", alt: "Room with jacuzzi and garden view", title: "Garden view" },
  { src: "/rooms-clean/JacuzziBalconyGardenViewSuite.jpeg", alt: "Suite with jacuzzi, balcony and garden view", title: "Suite with balcony" },
  { src: "/rooms-clean/JacuzziBalconyRoomPanoramicView.jpeg", alt: "Room with jacuzzi, balcony and panoramic view", title: "Panoramic view" },
  { src: "/rooms-clean/JacuzziRoomGardenView.jpeg", alt: "Room with jacuzzi and garden", title: "Garden suite" },
];

const diningCategories = ["Included breakfasts", "Fresh juices", "Omelettes and breakfasts", "Drinks"];

const diningItems = [
  { name: "Egg sandwich", category: "Included breakfasts" },
  { name: "Chicken sandwich", category: "Included breakfasts" },
  { name: "Huachana sausage", category: "Included breakfasts" },
  { name: "Coffee", category: "Included breakfasts" },
  { name: "Oatmeal", category: "Included breakfasts" },
  { name: "Pineapple", category: "Fresh juices", price: "S/ 10.00" },
  { name: "Strawberry", category: "Fresh juices", price: "S/ 10.00" },
  { name: "Mixed fruit juice", category: "Fresh juices", price: "S/ 10.00" },
  { name: "Papaya", category: "Fresh juices", price: "S/ 10.00" },
  { name: "Avocado toast", category: "Omelettes and breakfasts", price: "S/ 11.50" },
  { name: "American breakfast", category: "Omelettes and breakfasts", price: "S/ 10.50" },
  { name: "Chancay-style breakfast", category: "Omelettes and breakfasts", price: "S/ 10.50" },
  { name: "Chicken ciabatta", category: "Omelettes and breakfasts", price: "S/ 10.50" },
  { name: "Inka Cola 600 ml", category: "Drinks", price: "S/ 4.00" },
  { name: "Coca Cola 600 ml", category: "Drinks", price: "S/ 4.00" },
  { name: "Cielo water 625 ml", category: "Drinks", price: "S/ 2.00" },
  { name: "Frugos del Valle", category: "Drinks", price: "S/ 2.50" },
  { name: "Vino Queirolo rosé 750 ml", category: "Drinks", price: "S/ 25.00" },
  { name: "Wheat beer 620 ml", category: "Drinks", price: "S/ 10.00" },
  { name: "Mike", category: "Drinks", price: "S/ 7.50" },
  { name: "Pilsen can 473 ml", category: "Drinks", price: "S/ 7.50" },
];

const roomPhotos = salesPhotos;
const amenities = ["Wi-Fi", "Parking", "Air conditioning", "Restaurant and café", "Breakfast", "24-hour reception", "Room service", "Garden", "Rooms with jacuzzi", "Laundry", "Events and meetings", "Tourist assistance"];
const attractions = [
  ["Castillo de Chancay", "An iconic historical and cultural attraction in the city."],
  ["Museo Municipal de Chancay", "Discover local history and culture."],
  ["Eco Truly Park", "An ecological and cultural site near the coast."],
  ["Reserva Nacional de Lachay", "Explore natural landscapes and seasonal coastal hills."],
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
    <a className="button button-dark" href={tripAdvisor} target="_blank" rel="noreferrer">Book on Tripadvisor <span>↗</span></a>
    <a className="button button-outline" href={"https://api.whatsapp.com/message/IPFK3E5CKTNGK1?autoload=1&app_absent=0"} target="_blank" rel="noreferrer">Contact the hotel <span>↗</span></a>
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
      <section className="filmstrip-hero" id="galeria" aria-label="Hotel photo gallery">
        <div className="filmstrip-frame">
          <div className="filmstrip-track">
            {[-1, 0, 1].map((offset) => {
              const index = (active + offset + photos.length) % photos.length;
              const photo = photos[index];
              return <button key={offset} type="button" className={offset === 0 ? "filmstrip-slide is-current" : "filmstrip-slide"} onClick={() => offset < 0 ? previous() : offset > 0 ? next() : setShowAll(!showAll)} aria-label={offset === 0 ? "View all photos" : `Ver fotografía: ${photo.title}`}>
                <img src={photo.src} alt={photo.alt} loading={offset === 0 ? "eager" : "lazy"} />
              </button>;
            })}
          </div>
          <button className="filmstrip-arrow filmstrip-prev" type="button" onClick={previous} aria-label="Previous photo">‹</button>
          <button className="filmstrip-arrow filmstrip-next" type="button" onClick={next} aria-label="Next photo">›</button>
          <button className="filmstrip-count" type="button" onClick={() => setShowAll(!showAll)} aria-label="Open full gallery">{active + 1}/{photos.length}</button>
        </div>
        {showAll && <div className="filmstrip-thumbnails" aria-label="All photos">
          {photos.map((photo, index) => <button key={photo.src} type="button" className={active === index ? "filmstrip-thumb is-active" : "filmstrip-thumb"} onClick={() => setActive(index)} aria-label={`Seleccionar ${photo.title}`}><img src={photo.src} alt={photo.alt} loading="lazy" /></button>)}
        </div>}
      </section>

      <section className="filmstrip-intro" aria-label="About Hotel BlueThree">
        <p>Enjoy your stay in Chancay, near attractions such as Chancay Castle, Chancay Municipal Museum, Eco Truly Park and Lachay National Reserve. Explore our rooms and suites, some featuring a jacuzzi, balcony and panoramic views.</p><div className="home-intro-actions"><a className="button button-dark" href="/en/habitaciones">Explore rooms</a><a className="button button-outline" href="/en/ubicacion">View location</a></div>
      </section>

      <aside className="hotel-utility-rail" aria-label="Hotel information and contact">
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
            <div className="tripadvisor-score" aria-label="Displayed rating: 4.9 out of 5">
              <span className="tripadvisor-circles" aria-hidden="true"><i/><i/><i/><i/><i/></span>
              <strong>4.9</strong>
            </div>
            <a href={tripAdvisor} target="_blank" rel="noopener noreferrer">Read reviews ↗</a>
          </div>
          <div className="utility-contact">
            <div><strong>Call</strong><a href="tel:+51914046710">+51 914 046 710</a></div>
            <div><strong>Email</strong><a href="mailto:bluethreechancay@gmail.com">bluethreechancay@gmail.com</a></div>
          </div>
          <div className="utility-times">
            <div><strong>Check-in</strong><span>2:00 p. m.</span></div>
            <span className="utility-time-arrow" aria-hidden="true">→</span>
            <div><strong>Check-out</strong><span>11:00 a. m.</span></div>
          </div>
        </div>
      </aside>

      <div className="hotel-utility-mobile" aria-label="Hotel information">
        <div className="hotel-utility-tabs" role="tablist" aria-label="Quick information">
          <button type="button" role="tab" id="utility-tab-reviews" aria-controls="utility-panel-reviews" aria-selected={utilityTab === "reviews"} className={utilityTab === "reviews" ? "is-active" : ""} onClick={() => setUtilityTab("reviews")}><span aria-hidden="true">☆</span>Reviews</button>
          <button type="button" role="tab" id="utility-tab-contact" aria-controls="utility-panel-contact" aria-selected={utilityTab === "contact"} className={utilityTab === "contact" ? "is-active" : ""} onClick={() => setUtilityTab("contact")}><span aria-hidden="true">☎</span>Contact</button>
          <button type="button" role="tab" id="utility-tab-arrival" aria-controls="utility-panel-arrival" aria-selected={utilityTab === "arrival"} className={utilityTab === "arrival" ? "is-active" : ""} onClick={() => setUtilityTab("arrival")}><span aria-hidden="true">◷</span>Hours</button>
        </div>
        <div className="hotel-utility-panel" id="utility-panel-reviews" role="tabpanel" aria-labelledby="utility-tab-reviews" hidden={utilityTab !== "reviews"}>
          <div className="utility-mobile-reviews"><strong>Tripadvisor</strong><span className="tripadvisor-circles" aria-label="Displayed rating: 4.9 out of 5"><i/><i/><i/><i/><i/></span><strong>4.9</strong><a href={tripAdvisor} target="_blank" rel="noopener noreferrer">Read reviews ↗</a></div>
        </div>
        <div className="hotel-utility-panel" id="utility-panel-contact" role="tabpanel" aria-labelledby="utility-tab-contact" hidden={utilityTab !== "contact"}>
          <div className="utility-mobile-contact"><a href="tel:+51914046710">Call: +51 914 046 710</a><a href="mailto:bluethreechancay@gmail.com">bluethreechancay@gmail.com</a></div>
        </div>
        <div className="hotel-utility-panel" id="utility-panel-arrival" role="tabpanel" aria-labelledby="utility-tab-arrival" hidden={utilityTab !== "arrival"}>
          <div className="utility-mobile-times"><span><strong>Check-in</strong> 2:00 p. m.</span><span aria-hidden="true">→</span><span><strong>Check-out</strong> 11:00 a. m.</span></div>
        </div>
      </div>

      <section className="services-section" id="servicios"><ServicesGrid /></section>

      <section className="intro section-wrap" id="habitaciones">
        <div className="intro-label"><span className="rule" /> HOTEL BLUETHREE CHANCAY</div>
        <div className="intro-copy">
          <h1>Discover Chancay.<br/><em>Relax</em> at BlueThree.</h1>
          <div>
            <p className="lead">Hospitality and relaxation on the Huaral coast.</p>
            <p>Hotel BlueThree Chancay is an ideal starting point for exploring the city and its surroundings. Discover our rooms and amenities, and contact the hotel directly to plan your stay.</p>
            <BookingLinks />
          </div>
        </div>
        <div className="hotel-facts">
          <div><span>CHECK-IN</span><strong>2:00 p. m.</strong></div>
          <div><span>CHECK-OUT</span><strong>11:00 a. m.</strong></div>
          <div><span>LOCATION</span><strong>Chancay, Huaral · Peru</strong></div>
          <div><span>BOOKINGS</span><strong><a href={tripAdvisor} target="_blank" rel="noreferrer">Tripadvisor ↗</a></strong></div>
        </div>
      </section>

      <section className="rooms-section section-wrap">
        <div className="section-heading"><div><p className="eyebrow">ROOMS AND SUITES</p><h2>Find your space<br/>to <em>unwind.</em></h2></div><p>Browse photos of the available rooms. Contact the hotel directly to confirm room categories, occupancy, rates and included amenities.</p></div>
        <div className="room-grid" aria-label="Available rooms and suites">
          {roomPhotos.map((photo) => (
            <article className="room-card" key={photo.src}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <div className="room-card-content">
                <h3>{photo.title}</h3>
                <a className="room-details-link" href="/en/habitaciones">View room details</a>
                <div className="room-card-spacer" />
                <a className="room-book-button" href="https://api.whatsapp.com/message/IPFK3E5CKTNGK1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">Check availability</a>
                <p className="room-rate-note">Confirm rates, occupancy and amenities directly with the hotel.</p>
              </div>
            </article>
          ))}
        </div>
        <div className="room-more"><a className="room-explore-button" href="/en/habitaciones">Explore all rooms</a></div>
      </section>

      <BlueThreeBenefits language="en" />

      <section className="home-dining-section section-wrap" id="gastronomia">
        <div className="section-heading"><div><p className="eyebrow">BLUETHREE CAFÉ</p><h2>Flavors to enjoy<br/>your <em>stay.</em></h2></div><p>Explore our menu categories and selections. Check prices, ingredients and details on the full menu.</p></div>
        <div className="home-dining-grid" aria-label="Dining categories">
          {diningCategories.map(category => <div className="home-dining-card" key={category}>
            <h3>{category}</h3>
          </div>)}
        </div>
        <div className="home-dining-marquee" aria-label="Selected dishes and drinks from our menu">
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
        <div className="home-dining-more"><a className="room-explore-button" href="/en/gastronomia">View full menu and prices ↗</a></div>
      </section>

      <section className="home-policies-section section-wrap" id="politicas">
        <div className="section-heading"><div><p className="eyebrow">BEFORE YOUR ARRIVAL</p><h2>Information<br/>and <em>policies.</em></h2></div><p>Review fees, family policies, parking, pets, smoking and Wi-Fi before booking.</p></div>
        <PolicyTabs language="en" />
        <div className="home-policies-more"><a className="room-explore-button" href="/en/politicas">View all policies ↗</a></div>
      </section>

      <section className="bluethree-events" aria-labelledby="bluethree-events-heading"><div className="bluethree-events-inner"><h2 id="bluethree-events-heading">Meetings and events</h2><p>Plan your next meeting, celebration, or special occasion at BlueThree in Chancay. Contact our team to discuss available spaces, event arrangements, and options for your group.</p><a href="/en/contacto" className="bluethree-events-button">Plan an Event</a></div></section>

      <HomeLocation language="en" />

    </main>
  );
}
