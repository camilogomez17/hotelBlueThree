import type { Metadata } from "next";
import HotelLocation from "../components/HotelLocation";
export const metadata: Metadata = { title: "Ubicación y transporte | Hotel BlueThree Chancay" };
export default function Page(){return <HotelLocation language="es" />;}
