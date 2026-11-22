import type { Metadata } from "next";
import { whatsapp } from "../data/hotel";
const policies = [
  {
    "title": "Dommages et préjudices",
    "summary": "100 % du coût des dommages causés aux installations et aux équipements sera facturé.",
    "detail": "Les chambres font l’objet d’inspections de propreté. Des frais supplémentaires s’appliquent si le linge de lit présente des traces de sang ou d’autres liquides. Tout dommage aux installations ou équipements de BlueThree sera facturé à hauteur de 100 % du coût."
  },
  {
    "title": "Heures de silence",
    "summary": "De 22 h 30 à 9 h",
    "detail": "Pour garantir le confort de tous les clients, les heures de silence doivent être respectées de 22 h 30 à 9 h."
  },
  {
    "title": "Confidentialité",
    "summary": "Protection des données personnelles des clients.",
    "detail": "L’hôtel indique prendre des mesures de sécurité pour protéger les données de carte bancaire, noms, adresses, courriels et autres informations personnelles fournies par les clients."
  },
  {
    "title": "Pièce d’identité",
    "summary": "L’enregistrement est réservé aux personnes de plus de 18 ans munies d’une pièce d’identité valide.",
    "detail": "L’enregistrement est réservé aux personnes de plus de 18 ans. Une pièce d’identité physique valide est obligatoire ; les photos de documents ne sont pas acceptées."
  },
  {
    "title": "Enfants de moins de 5 ans",
    "summary": "Hébergement gratuit, dans la limite de la capacité maximale de la chambre.",
    "detail": "Les enfants de moins de 5 ans séjournent gratuitement au tarif standard, dans la limite de la capacité maximale de la chambre."
  },
  {
    "title": "Interdiction de fumer",
    "summary": "Il est interdit de fumer dans les chambres. Amende indiquée : S/ 250.",
    "detail": "Le règlement cite la loi n° 32159. Il est interdit de fumer dans les chambres, sauf dans les espaces extérieurs. L’hôtel se déclare non-fumeur et sans drogues. Fumer dans une chambre entraîne une amende de S/ 250."
  },
  {
    "title": "Vente responsable d’alcool",
    "summary": "L’hôtel peut limiter la vente aux personnes manifestement ivres.",
    "detail": "L’hôtel se réserve le droit de limiter la vente d’alcool aux personnes présentant des signes évidents d’ivresse, tels que des troubles de l’équilibre, de l’élocution, des difficultés à s’exprimer clairement ou un comportement agressif ou désinhibé. Cette mesure vise à protéger les clients et le personnel."
  },
  {
    "title": "Enregistrement des clients étrangers",
    "summary": "Un passeport physique valide ou un titre de séjour légal est requis.",
    "detail": "Le règlement cite le décret suprême n° 011-2024-IN et indique que les ressortissants étrangers doivent enregistrer leurs informations et présenter un passeport physique valide à l’arrivée s’ils sont entrés comme touristes, ou un titre de séjour légal."
  }
];

export const metadata: Metadata = {
  title: "Règlement de l’hôtel | Hôtel BlueThree Chancay",
  description: "Découvrez les règles de l’Hôtel BlueThree Chancay concernant les séjours, l’identité, les heures de silence, les enfants et la sécurité.",
};

export default function Politicas() {
  return <main className="template-page">
    <section className="template-page-hero"><p className="eyebrow">HÔTEL BLUETHREE CHANCAY</p><h1>Règlement de l’hôtel</h1><p>Informations sur les conditions de séjour. Confirmez les règles en vigueur auprès de la réception avant de réserver.</p></section>
    <section className="section-wrap hotel-policies-page">
      <div className="hotel-policy-times"><div><span>ARRIVÉE</span><strong>2:00 p. m.</strong></div><div><span>DÉPART</span><strong>11:00 a. m.</strong></div><div><span>HEURES DE SILENCE</span><strong>22 h 30 – 9 h</strong></div></div>
      <div className="hotel-policies-heading"><p className="eyebrow">CONDITIONS DE SÉJOUR</p><h2>Tout ce qu’il faut savoir</h2><p>Les conditions suivantes ont été retranscrites et adaptées à partir de la fiche de règlement de l’hôtel.</p></div>
      <div className="hotel-policies-list">{policies.map((policy,index)=><article className="hotel-policy-detail" key={policy.title}><span className="hotel-policy-index">{String(index+1).padStart(2,"0")}</span><div><h3>{policy.title}</h3><p>{policy.detail}</p></div></article>)}</div>
      <div className="hotel-policy-note"><p>Les références juridiques sont reproduites telles qu’elles figurent sur la fiche de l’hôtel ; leur portée et leur validité n’ont pas été vérifiées indépendamment. Consultez la réception pour connaître les conditions à jour.</p><a className="button button-dark" href={whatsapp} target="_blank" rel="noopener noreferrer">Contacter la réception ↗</a></div>
    </section>
  </main>;
}
