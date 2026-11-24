"use client";

import { usePathname } from "next/navigation";
import { ServicesGrid } from "./ServicesGrid";

export default function SharedServicesSection() {
  const pathname = usePathname();
  if (pathname === "/informacion-del-hotel") return null;
  return <section className="services-section" id="servicios"><ServicesGrid /></section>;
}
