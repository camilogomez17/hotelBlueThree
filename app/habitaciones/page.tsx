import type { Metadata } from "next";
import RoomsCatalog from "../components/RoomsCatalog";
export const metadata: Metadata = { title: "Habitaciones y Suites en Chancay | Hotel BlueThree", description: "Explora las habitaciones y suites de BlueThree en Chancay, Perú. Consulta opciones con jacuzzi, balcón y vistas, además de disponibilidad y tarifas." };
export default function Page() { return <RoomsCatalog language="es" />; }
