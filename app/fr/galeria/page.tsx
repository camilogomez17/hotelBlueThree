import type { Metadata } from "next";
import { gallery } from "../data/hotel";
import { GalleryViewer } from "../components/GalleryViewer";
export const metadata:Metadata={title:"Galerie | Hôtel BlueThree Chancay",description:"Photos des chambres, installations, restaurants et événements de l’Hôtel BlueThree Chancay."};
export default function Galeria(){return <main className="template-page"><section className="template-page-hero"><p className="eyebrow">HÔTEL BLUETHREE CHANCAY</p><h1>Galerie photos</h1><p>Découvrez les chambres ainsi que certains espaces et expériences de l’hôtel.</p></section><section className="section-wrap content-page-section"><GalleryViewer photos={gallery}/></section></main>}
