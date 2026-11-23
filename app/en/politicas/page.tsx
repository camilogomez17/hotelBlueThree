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
        <article className="home-policy-card"><h3>Dining</h3><p>On-site café and menu options.</p></article>
        <article className="home-policy-card"><h3>Transport</h3><p>Local and airport transfers available for an additional charge upon request.</p></article>
        <article className="home-policy-card"><h3>Conveniences</h3><p>Free Wi-Fi and self-parking. Special occasion decorations upon request.</p></article>
      </div>
      <div className="section-heading"><div><p className="eyebrow">FOR YOUR STAY</p><h2>Arrival information</h2></div></div>
      <div className="hotel-policy-times">
        <div><span>CHECK-IN</span><strong>2:00 p. m.</strong></div>
        <div><span>CHECK-OUT</span><strong>11:00 a. m.</strong></div>
      </div>
      <p>Address: Residencial Buena Vista – Las Tres Pirámides, Chancay 15130, Peru. For directions, transport and special requests, contact reception.</p>
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
