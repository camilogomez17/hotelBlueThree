import type { Metadata } from "next";
import PolicyTabs from "../../components/PolicyTabs";
import { whatsapp } from "../data/hotel";

export const metadata: Metadata = {
  title: "Hotel policies | Hotel BlueThree Chancay",
  description: "Review hotel policies for fees, children, parking, pets, smoking and Wi-Fi.",
};

export default function Politicas() {
  return <main className="template-page">
    <section className="template-page-hero">
      <p className="eyebrow">HOTEL BLUETHREE CHANCAY</p>
      <h1>Hotel policies</h1>
      <p>Review the conditions for your stay.</p>
    </section>
    <section className="section-wrap hotel-policies-page">
      <div className="section-heading"><div><p className="eyebrow">HOTEL INFORMATION</p><h2>Amenities and services</h2></div><p>Explore services available during your stay. Confirm details with reception.</p></div>
      <div className="home-policies-grid">
        <article className="home-policy-card"><h3>Dining</h3><p>On-site café</p></article>
        <article className="home-policy-card"><h3>Transport</h3><p>Local transfers · Airport transfers by request (additional charge)</p></article>
        <article className="home-policy-card"><h3>Conveniences</h3><p>Free parking · Free Wi-Fi · Special occasion arrangements by request</p></article>
      </div>
      <div className="section-heading"><div><p className="eyebrow">FEATURED AMENITIES</p><h2>Highlights</h2></div></div>
      <div className="home-policies-grid">
        <article className="home-policy-card"><h3>Café</h3><p>Food and drinks during your stay.</p></article>
        <article className="home-policy-card"><h3>Parking</h3><p>Complimentary self-parking.</p></article>
        <article className="home-policy-card"><h3>Wi-Fi</h3><p>Complimentary connection in rooms and lobby.</p></article>
      </div>
      <div className="section-heading"><div><p className="eyebrow">FOR YOUR STAY</p><h2>Arrival information</h2></div></div>
      <div className="hotel-policy-times">
        <div><span>CHECK-IN</span><strong>2:00 p. m.</strong></div>
        <div><span>CHECK-OUT</span><strong>11:00 a. m.</strong></div>
      </div>
      <p>Address: Residencial Buena Vista – Las Tres Pirámides, Chancay 15130, Peru. For directions, transport and special requests, contact reception.</p>
      <div className="home-policies-grid">
        <article className="home-policy-card"><h3>Parking</h3><p>Self-parking: complimentary · Valet: unavailable · EV charging: unavailable · Secured: available · Covered: unavailable · In/out privileges: unavailable</p></article>
        <article className="home-policy-card"><h3>Airport shuttle</h3><p>Transfer available on request for an additional charge. Confirm schedule and price.</p></article>
        <article className="home-policy-card"><h3>Kids services</h3><p>Children up to 12 stay free sharing a parent's bed. Confirm room capacity.</p></article>
        <article className="home-policy-card"><h3>Smoke-free</h3><p>Smoking in non-smoking rooms may incur a penalty.</p></article>
        <article className="home-policy-card"><h3>Breakfast</h3><p>Ask reception about café breakfast availability and pricing.</p></article>
        <article className="home-policy-card"><h3>Pets</h3><p>Pets are not allowed.</p></article>
      </div>
      <div className="section-heading"><div><p className="eyebrow">OUR POLICIES</p><h2>Stay conditions</h2></div></div>
      <PolicyTabs language="en" />
      <div className="hotel-policy-note">
        <h3>Proposed additional terms — pending hotel approval</h3>
        <p>The following sample rules are not confirmed hotel policies and must be approved before being applied to reservations.</p>
        <h4>Cancellation</h4>
        <p>Proposed: cancel without penalty up to 48 hours before check-in. Later cancellations and no-shows may incur a charge equal to the first night.</p>
        <h4>Check-in and check-out</h4>
        <p>Proposed: valid government-issued photo identification is required at check-in. Early arrival and late departure depend on availability and may carry an additional charge.</p>
        <h4>Payment</h4>
        <p>Proposed: a deposit may be requested to confirm a reservation; the remaining balance is due at check-in. Accepted payment methods and refund timing must be confirmed directly with reception.</p>
        <p>Applicable taxes and other conditions must be confirmed before booking.</p>
        <a className="button button-dark" href={whatsapp} target="_blank" rel="noopener noreferrer">Contact reception ↗</a>
      </div>
    </section>
  </main>;
}
