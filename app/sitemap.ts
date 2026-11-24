import type { MetadataRoute } from "next";
const origin = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");
const site = origin.replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/habitaciones", "/informacion-del-hotel", "/ubicacion", "/contacto"];
  return paths.flatMap(path => [
    { url: `${site}${path || "/"}`, alternates: { languages: { "es-PE": `${site}${path || "/"}`, en: `${site}/en${path}` } } },
    { url: `${site}/en${path}`, alternates: { languages: { "es-PE": `${site}${path || "/"}`, en: `${site}/en${path}` } } },
  ]);
}
