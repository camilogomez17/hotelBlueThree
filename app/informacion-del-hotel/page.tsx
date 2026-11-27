import type { Metadata } from "next";
import ForYourStay from "../components/ForYourStay";
import FeaturedAmenities from "../components/FeaturedAmenities";
import { services, ServiceIcon } from "../components/ServicesGrid";

export const metadata: Metadata = {
  title: "Información de Hotel | Hotel BlueThree Chancay",
  description: "Conoce los servicios de Hotel BlueThree Chancay: Wi-Fi, habitaciones con jacuzzi, cafetería, estacionamiento y más.",
};

export default function HotelInformationPage() {
  return <main className="services-page">
    <div className="services-page-banner">
      <h1>Información de Hotel</h1>
      <p>Descubre las comodidades y opciones de atención para tu estadía en Hotel BlueThree.</p>
    </div>
    <section className="section-wrap hotel-policies-page">
      <section className="hotel-info-services" aria-labelledby="hotel-info-services-title">
        <h2 id="hotel-info-services-title">Nuestros servicios</h2>
        <div className="hotel-info-service-groups">
          {[{"title":"Gastronomía","indices":[3,4,6]},{"title":"Descanso y recreación","indices":[2,7,8,13]},{"title":"Negocios y eventos","indices":[10]},{"title":"Comodidades","indices":[0,1,5,9,11,12]}].map(group => (
            <div key={group.title} className="hotel-info-service-group">
              <h3>{group.title}</h3>
              <ul>{group.indices.map(index => <li key={services[index].name}><ServiceIcon icon={services[index].icon} /><span>{services[index].name}</span></li>)}</ul>
            </div>
          ))}
        </div>
        <p className="amenities-disclaimer">Los servicios pueden variar según la habitación y la disponibilidad.</p>
      </section>
      <FeaturedAmenities language="es" />
      <ForYourStay language="es" showTitle={false} />
    </section>
    <section className="services-page-contact">
      <h2>¿Necesitas información sobre un servicio?</h2>
      <p>Consulta disponibilidad, condiciones y posibles cargos antes de reservar.</p>
      <a href="mailto:bluethreechancay@gmail.com">bluethreechancay@gmail.com</a>
      <a href="tel:+51914046710">+51 914 046 710</a>
    </section>
  </main>;
}
