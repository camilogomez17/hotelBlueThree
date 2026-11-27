import type { Metadata } from "next";
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
      <h2 className="hotel-our-policies-heading">Amenities</h2><ServicesGrid full />
      <FeaturedAmenities language="en" />
      <ForYourStay language="en" showTitle={false} />
    </section>
    <section className="services-page-contact">
      <h2>Need information about a service?</h2>
      <p>Check availability, conditions and possible charges before booking.</p>
      <a href="mailto:bluethreechancay@gmail.com">bluethreechancay@gmail.com</a>
      <a href="tel:+51914046710">+51 914 046 710</a>
    </section>
  </main>;
}
