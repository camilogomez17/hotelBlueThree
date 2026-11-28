import Link from "next/link";

const questions = {
  es: [
    ["¿Se admiten mascotas?", "Sí, Hotel BlueThree admite mascotas."],
    ["¿Cuál es la política de cancelación?", "Las condiciones pueden variar según la tarifa y las fechas. Consulta la confirmación de tu reserva para conocer las condiciones aplicables."],
    ["¿Hay estacionamiento?", "Sí, el hotel ofrece estacionamiento propio gratuito."],
    ["¿Se puede fumar en las habitaciones?", "Las habitaciones son libres de humo. Puede aplicarse una penalidad por fumar en ellas."],
    ["¿Hay habitaciones accesibles?", "Las habitaciones adaptadas para personas con movilidad reducida no están disponibles. Consulta con recepción sobre otras opciones de accesibilidad."],
    ["¿Hay una cafetería en el hotel?", "Sí, la Cafetería BlueThree ofrece desayunos, jugos naturales y bebidas."],
    ["¿El Wi-Fi es gratuito?", "Sí, hay Wi-Fi gratuito en las habitaciones y en el vestíbulo."],
    ["¿A qué hora es el check-in?", "El check-in es a las 2:00 p. m."],
    ["¿A qué hora es el check-out?", "El check-out es a las 11:00 a. m."],
  ],
  en: [
    ["Are pets allowed?", "Yes, Hotel BlueThree welcomes pets."],
    ["What is the cancellation policy?", "Cancellation terms may vary by rate and reservation dates. Check your booking confirmation for the terms that apply."],
    ["Is parking available?", "Yes, the hotel offers free self-parking."],
    ["Is smoking allowed in guest rooms?", "Guest rooms are smoke-free. A penalty may apply for smoking in a room."],
    ["Are accessible guest rooms available?", "Rooms adapted for guests with limited mobility are unavailable. Contact reception about other accessibility options."],
    ["Is there on-site dining?", "Yes, BlueThree Café serves breakfast, fresh juices, and drinks."],
    ["Is Wi-Fi free?", "Yes, free Wi-Fi is available in guest rooms and the lobby."],
    ["What time is check-in?", "Check-in is at 2:00 p.m."],
    ["What time is check-out?", "Check-out is at 11:00 a.m."],
  ],
} as const;

export default function HomeFaq({ language }: { language: "es" | "en" }) {
  const es = language === "es";

  return (
    <section className="section-wrap home-faq" aria-labelledby="home-faq-heading">
      <h2 id="home-faq-heading">{es ? "Preguntas frecuentes" : "Frequently asked questions"}</h2>
      <div className="hotel-policy-accordion">
        {questions[language].map(([question, answer]) => (
          <details key={question}>
            <summary>{question} <span aria-hidden="true" /></summary>
            <div className="hotel-policy-accordion-content"><p>{answer}</p></div>
          </details>
        ))}
      </div>
      <Link className="text-link" href={es ? "/informacion-del-hotel" : "/en/hotel-information"}>
        {es ? "Ver información y políticas del hotel" : "View hotel information and policies"}
      </Link>
    </section>
  );
}
