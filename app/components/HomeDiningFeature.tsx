import Image from "next/image";
import Link from "next/link";

export default function HomeDiningFeature({ language }: { language: "es" | "en" }) {
  const es = language === "es";

  return (
    <section className="section-wrap home-dining-feature" aria-labelledby="home-dining-heading">
      <Image
        className="home-dining-feature-photo"
        src="/organized_photos/dining/eggs-toast-and-orange-juice-booking-775110956.jpg"
        alt={es ? "Desayuno con huevos, tostadas y jugo de naranja" : "Breakfast with eggs, toast, and orange juice"}
        width={577}
        height={430}
        sizes="(max-width: 720px) 100vw, (max-width: 1200px) 50vw, 570px"
      />
      <div className="home-dining-feature-copy">
        <h2 id="home-dining-heading">{es ? "Gastronomía y bebidas" : "Dining and drinks"}</h2>
        <p>{es
          ? "Disfruta desayunos, jugos naturales y bebidas en Cafetería BlueThree."
          : "Enjoy breakfast, fresh juices, and drinks at BlueThree Café."}</p>
        <Link className="button button-dark" href={es ? "/gastronomia" : "/en/dining"}>
          {es ? "Ver el menú" : "Explore dining"}
        </Link>
      </div>
    </section>
  );
}
