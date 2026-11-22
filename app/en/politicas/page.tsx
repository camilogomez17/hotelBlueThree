import type { Metadata } from "next";
import { whatsapp } from "../data/hotel";
const policies = [
  {
    "title": "Damage and losses",
    "summary": "100% of the cost of damage to facilities and supplies will be charged.",
    "detail": "Rooms are subject to cleanliness inspections. Additional charges apply if bedding is stained with blood or other liquids. Any damage to BlueThree facilities or supplies will be charged at 100% of the repair or replacement cost."
  },
  {
    "title": "Quiet hours",
    "summary": "From 10:30 p.m. to 9:00 a.m.",
    "detail": "To ensure a comfortable stay for all guests, quiet hours must be observed from 10:30 p.m. to 9:00 a.m."
  },
  {
    "title": "Privacy",
    "summary": "Protection of guests' personal information.",
    "detail": "The hotel states that it takes security measures to protect credit card information, names, addresses, email addresses and other personal information provided by guests."
  },
  {
    "title": "Identification",
    "summary": "Check-in is restricted to guests over 18 with valid identification.",
    "detail": "Check-in is restricted to guests over 18. A valid physical identity document is required; photographs of documents are not accepted."
  },
  {
    "title": "Children under 5",
    "summary": "Free accommodation, subject to the room's maximum occupancy.",
    "detail": "Children under 5 stay free at the standard rate, subject to the room's maximum occupancy."
  },
  {
    "title": "No-smoking policy",
    "summary": "Smoking is not permitted in rooms. Stated fine: S/ 250.",
    "detail": "The policy cites Law No. 32159. Smoking is prohibited in rooms, except in outdoor areas. The hotel describes itself as smoke-free and drug-free. Smoking in a room is subject to a S/ 250 fine."
  },
  {
    "title": "Responsible alcohol sales",
    "summary": "The hotel may limit sales to visibly intoxicated people.",
    "detail": "The hotel reserves the right to restrict alcohol sales to anyone showing obvious signs of intoxication, such as difficulty maintaining balance, slurred speech, difficulty communicating clearly or aggressive or uninhibited behavior. This measure aims to protect guests and staff."
  },
  {
    "title": "Foreign guest registration",
    "summary": "A valid physical passport or legal residence document is required.",
    "detail": "The policy cites Supreme Decree No. 011-2024-IN and states that foreign nationals must register their details and present a valid physical passport at check-in if entering as tourists, or a legal residence document."
  }
];

export const metadata: Metadata = {
  title: "Hotel policies | Hotel BlueThree Chancay",
  description: "Learn about Hotel BlueThree Chancay policies on stays, identification, quiet hours, children and security.",
};

export default function Politicas() {
  return <main className="template-page">
    <section className="template-page-hero"><p className="eyebrow">HOTEL BLUETHREE CHANCAY</p><h1>Hotel policies</h1><p>Information about stay conditions. Confirm current policies with reception before booking.</p></section>
    <section className="section-wrap hotel-policies-page">
      <div className="hotel-policy-times"><div><span>CHECK-IN</span><strong>2:00 p. m.</strong></div><div><span>CHECK-OUT</span><strong>11:00 a. m.</strong></div><div><span>QUIET HOURS</span><strong>10:30 p.m. – 9:00 a.m.</strong></div></div>
      <div className="hotel-policies-heading"><p className="eyebrow">STAY CONDITIONS</p><h2>Everything you need to know</h2><p>The following conditions have been transcribed and adapted for online reading from the hotel's policy card.</p></div>
      <div className="hotel-policies-list">{policies.map((policy,index)=><article className="hotel-policy-detail" key={policy.title}><span className="hotel-policy-index">{String(index+1).padStart(2,"0")}</span><div><h3>{policy.title}</h3><p>{policy.detail}</p></div></article>)}</div>
      <div className="hotel-policy-note"><p>Legal references are reproduced as shown on the hotel's policy card; their scope and validity have not been independently verified. Ask reception for current conditions.</p><a className="button button-dark" href={whatsapp} target="_blank" rel="noopener noreferrer">Contact reception ↗</a></div>
    </section>
  </main>;
}
