import type { Metadata } from "next";
import HotelLocation from "../components/HotelLocation";
export const metadata: Metadata = { title: "Ubicación en Chancay, Perú | Hotel BlueThree", description: "Encuentra BlueThree en Residencial Buena Vista, Chancay, Perú. Consulta el mapa, cómo llegar y lugares cercanos." };
export default function Page(){return <HotelLocation language="es" />;}
