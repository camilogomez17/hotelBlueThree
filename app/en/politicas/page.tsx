import type { Metadata } from "next";
import PolicyTabs from "../../components/PolicyTabs";
import HotelAmenities from "../../components/HotelAmenities";
import FeaturedAmenities from "../../components/FeaturedAmenities";
import ForYourStay from "../../components/ForYourStay";
import AdditionalPolicies from "../../components/AdditionalPolicies";

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
      <HotelAmenities language="en" />
      <FeaturedAmenities language="en" />
      <ForYourStay language="en" />
      <h2 className="hotel-our-policies-heading">Our policies</h2>
      <PolicyTabs language="en" />
      <AdditionalPolicies language="en" />
    </section>
  </main>;
}
