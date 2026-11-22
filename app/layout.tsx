import { SiteHeader, SiteFooter } from "./components/SiteChrome";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hotel BlueThree Chancay | Hotel en Chancay, Huaral",
  description: "Descubre Chancay y descansa en Hotel BlueThree. Consulta habitaciones, servicios, ubicación y canales oficiales de contacto.",
  openGraph: {
    title: "Hotel BlueThree Chancay",
    description: "Descubre Chancay. Descansa en BlueThree.",
    type: "website",
    locale: "es_PE",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body><SiteHeader />{children}<SiteFooter /></body>
    </html>
  );
}
