import type { Metadata } from "next";
import { gallery } from "../data/hotel";
import { GalleryViewer } from "../components/GalleryViewer";
export const metadata:Metadata={title:"Gallery | Hotel BlueThree Chancay",description:"Photos of rooms, facilities, dining and events at Hotel BlueThree Chancay."};
export default function Galeria(){return <main className="template-page"><section className="template-page-hero"><p className="eyebrow">HOTEL BLUETHREE CHANCAY</p><h1>Photo gallery</h1><p>Explore the rooms and some of the hotel's spaces and experiences.</p></section><section className="section-wrap content-page-section"><GalleryViewer photos={gallery}/></section></main>}
