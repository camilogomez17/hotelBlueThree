import type { Metadata } from "next";
import { rooms } from "../data/hotel";
import { getGallery } from "../data/gallery";
import { GalleryViewer } from "../components/GalleryViewer";
export const metadata:Metadata={title:"Galería | Hotel BlueThree Chancay",description:"Fotografías de las habitaciones, instalaciones, gastronomía y eventos de Hotel BlueThree Chancay."};
export default function Galeria(){return <main className="template-page"><section className="template-page-hero"><p className="eyebrow">HOTEL BLUETHREE CHANCAY</p><h1>Galería de fotografías</h1><p>Conoce las habitaciones y algunos de los espacios y experiencias del hotel.</p></section><section className="section-wrap content-page-section"><GalleryViewer photos={getGallery("es", rooms)} locale="es"/></section></main>}
