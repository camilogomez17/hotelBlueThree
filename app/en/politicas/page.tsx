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
      <div className="hotel-policy-times">
        <div><span>CHECK-IN</span><strong>2:00 p. m.</strong></div>
        <div><span>CHECK-OUT</span><strong>11:00 a. m.</strong></div>
      </div>
      <PolicyTabs language="en" />
      <div className="hotel-policy-note">
        <p>Tax eligibility, charges and conditions are subject to applicable law and should be confirmed with the hotel before booking.</p>
        <a className="button button-dark" href={whatsapp} target="_blank" rel="noopener noreferrer">Contact reception ↗</a>
      </div>
    </section>
  </main>;
}
