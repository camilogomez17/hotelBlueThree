import { SiteHeader, SiteFooter } from "./components/SiteChrome";
import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined);

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: "Hotel BlueThree Chancay | Habitaciones y Suites en Chancay",
  keywords: ["Hotel BlueThree", "hotel en Chancay", "hoteles en Huaral", "habitaciones en Chancay", "alojamiento Chancay", "hotel Chancay Perú"],
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }], shortcut: "/favicon.svg" },
  description: "Descubre Chancay y descansa en Hotel BlueThree. Consulta habitaciones, servicios, ubicación y canales oficiales de contacto.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Hotel BlueThree Chancay",
    description: "Descubre Chancay. Descansa en BlueThree.",
    type: "website",
    locale: "es_PE",
    siteName: "Hotel BlueThree Chancay",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body><SiteHeader />{children}<SiteFooter /></body>
    </html>
  );
}
