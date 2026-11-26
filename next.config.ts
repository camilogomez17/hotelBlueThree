import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { remotePatterns: [{ protocol: "https", hostname: "images.trvl-media.com", pathname: "/lodging/**" }] },
  async redirects() {
    return [
    { source: "/servicios", destination: "/informacion-del-hotel", permanent: true },
    { source: "/en/services", destination: "/en/hotel-information", permanent: true },
  {
    "source": "/en/habitaciones",
    "destination": "/en/rooms",
    "permanent": true
  },
  {
    "source": "/en/servicios",
    "destination": "/en/hotel-information",
    "permanent": true
  },
  {
    "source": "/en/galeria",
    "destination": "/en/gallery",
    "permanent": true
  },
  {
    "source": "/en/ubicacion",
    "destination": "/en/location",
    "permanent": true
  },
  {
    "source": "/en/politicas",
    "destination": "/en/policies",
    "permanent": true
  },
  {
    "source": "/en/contacto",
    "destination": "/en/contact",
    "permanent": true
  },
  {
    "source": "/en/gastronomia",
    "destination": "/en/dining",
    "permanent": true
  },
  {
    "source": "/en/eventos",
    "destination": "/en/events",
    "permanent": true
  }
];
  },
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
