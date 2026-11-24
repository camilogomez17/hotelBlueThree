import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
  {
    "source": "/en/habitaciones",
    "destination": "/en/rooms",
    "permanent": true
  },
  {
    "source": "/en/servicios",
    "destination": "/en/services",
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
