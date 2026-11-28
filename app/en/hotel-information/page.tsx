import type { Metadata } from "next";
import HotelInformationContact from "../../components/HotelInformationContact";
import AdditionalPolicies from "../../components/AdditionalPolicies";
import HotelAmenities from "../../components/HotelAmenities";
import ForYourStay from "../../components/ForYourStay";
import FeaturedAmenities from "../../components/FeaturedAmenities";
import { ServicesGrid } from "../components/ServicesGrid";

export const metadata: Metadata = {
  title: "Hotel Information | Hotel BlueThree Chancay",
  description: "Discover Hotel BlueThree Chancay amenities: Wi-Fi, rooms with jacuzzi, café, parking and more.",
};

export default function HotelInformationPage() {
  return <main className="services-page">
    <div className="services-page-banner">
      <h1>Hotel Information</h1>
      <p>Discover the amenities and services available during your stay in Hotel BlueThree.</p>
    </div>
    <section className="section-wrap hotel-policies-page">
      <HotelAmenities language="en" />
      <FeaturedAmenities language="en" />
      <h2 className="hotel-our-policies-heading">Amenities</h2><ServicesGrid full />
      <ForYourStay language="en" showTitle={false} />
    </section>
    <section className="section-wrap hotel-information-policies" aria-labelledby="hotel-information-policies">
      <h2 className="hotel-our-policies-heading" id="hotel-information-policies">Our policies</h2>
      <AdditionalPolicies language="en" />
    </section>
    <HotelInformationContact language="en" />
  </main>;
}
