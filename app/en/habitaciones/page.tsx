import type { Metadata } from "next";
import { rooms, whatsapp, tripAdvisor } from "../data/hotel";

export const metadata: Metadata = {
  title: "Rooms and suites | Hotel BlueThree Chancay",
  description: "Explore rooms and suites at Hotel BlueThree and ask about availability.",
};

export default function Rooms() {
  return <main className="template-page rooms-catalog">
    <section className="template-page-hero">
      <p className="eyebrow">HOTEL BLUETHREE CHANCAY</p>
      <h1>Rooms and suites</h1>
      <p>Discover our accommodation options. Expand each room to view details and ask about availability.</p>
    </section>
    <section className="section-wrap content-page-section">
      <div className="rooms-catalog-grid">
        {rooms.map((room, index) => <article className="rooms-catalog-card" key={room.src}>
          <div className="rooms-catalog-photo"><img src={room.src} alt={room.name} loading={index < 2 ? "eager" : "lazy"} /></div>
          <div className="rooms-catalog-content">
            <p className="rooms-catalog-number">ROOM {String(index + 1).padStart(2, "0")}</p>
            <h2>{room.name}</h2>
            <p>{room.description}</p>
            <details className="rooms-catalog-details">
              <summary>View room details</summary>
              <div className="rooms-catalog-expanded">
                <p>The photograph represents the listed room category. Layout, occupancy, included amenities and rates should be confirmed directly with the hotel.</p>
                <p>Ask about available options for your dates before booking.</p>
              </div>
            </details>
            <div className="rooms-catalog-actions">
              <a className="button button-dark" href={whatsapp} target="_blank" rel="noopener noreferrer">Check availability ↗</a>
            </div>
          </div>
        </article>)}
      </div>
      <div className="content-page-note">
        <p>Room names, features and availability are subject to confirmation by the hotel.</p>
        <a href={tripAdvisor} target="_blank" rel="noopener noreferrer">See options on Tripadvisor ↗</a>
      </div>
    </section>
  </main>;
}
