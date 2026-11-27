import type { Metadata } from "next";
import ForYourStay from "../../components/ForYourStay";
import FeaturedAmenities from "../../components/FeaturedAmenities";
import { services, ServiceIcon } from "../components/ServicesGrid";

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
      <section className="hotel-info-services" aria-labelledby="hotel-info-services-title">
        <h2 id="hotel-info-services-title">Our services</h2>
        <div className="hotel-info-service-groups">
          {[{"title":"Dining","indices":[3,4,6]},{"title":"Relaxation and recreation","indices":[2,7,8,13]},{"title":"Business and events","indices":[10]},{"title":"Conveniences","indices":[0,1,5,9,11,12]}].map(group => (
            <div key={group.title} className="hotel-info-service-group">
              <h3>{group.title}</h3>
              <ul>{group.indices.map(index => <li key={services[index].name}><ServiceIcon icon={services[index].icon} /><span>{services[index].name}</span></li>)}</ul>
            </div>
          ))}
        </div>
        <p className="amenities-disclaimer">Services may vary by room and availability.</p>
      </section>
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
