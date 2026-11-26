"use client";

import { useEffect } from "react";
import Image from "next/image";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./HotelMap.css";

const position: L.LatLngTuple = [-11.5453985, -77.2588947];
const pin = L.divIcon({
  className: "bluethree-map-pin",
  html: '<svg viewBox="0 0 26 37" width="26" height="37" aria-hidden="true"><path d="M13 36C10 29 1 20 1 13a12 12 0 0 1 24 0c0 7-9 16-12 23Z" fill="#d93025" stroke="#a9221b"/><circle cx="13" cy="13" r="4.5" fill="white"/></svg>',
  iconSize: [26, 37],
  iconAnchor: [13, 37],
  popupAnchor: [0, -37],
});

function Fullscreen({ en }: { en: boolean }) {
  const map = useMap();
  useEffect(() => {
    const control = new L.Control({ position: "topright" });
    control.onAdd = () => {
      const wrapper = L.DomUtil.create("div", "leaflet-bar bluethree-fullscreen");
      const button = L.DomUtil.create("button", "", wrapper);
      button.type = "button";
      button.textContent = "⛶";
      button.title = en ? "Toggle fullscreen" : "Pantalla completa";
      button.setAttribute("aria-label", button.title);
      L.DomEvent.disableClickPropagation(wrapper);
      button.addEventListener("click", () => {
        const action = document.fullscreenElement === map.getContainer()
          ? document.exitFullscreen()
          : map.getContainer().requestFullscreen?.();
        action?.catch(() => {});
      });
      return wrapper;
    };
    const resize = () => map.invalidateSize();
    control.addTo(map);
    document.addEventListener("fullscreenchange", resize);
    return () => {
      control.remove();
      document.removeEventListener("fullscreenchange", resize);
    };
  }, [map, en]);
  return null;
}

export default function HotelMap({ language = "es" }: { language?: "es" | "en" }) {
  const en = language === "en";
  return (
    <MapContainer className="bluethree-leaflet" center={position} zoom={16} zoomControl={false} scrollWheelZoom={false}>
      <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
      <ZoomControl position="bottomright" />
      <Fullscreen en={en} />
      <Marker position={position} icon={pin} title="Hotel BlueThree Chancay" />
        <Popup position={position} offset={[0, -37]} className="bluethree-popup" closeButton={false} closeOnClick={false} closeOnEscapeKey={false} autoClose={false} autoPan={false} maxWidth={300} minWidth={180}>
          <div className="bluethree-popup-content">
            <Image src="/organized_photos/brand/logo2.jpeg" alt="Hotel BlueThree" width={48} height={48} />
            <div>
              <strong>Hotel BlueThree Chancay</strong>
              <span>Residencial Buena Vista – Las Tres Pirámides, Chancay 15130, Perú</span>
              <a href="https://www.google.com/maps/dir/?api=1&destination=-11.5453985,-77.2588947" target="_blank" rel="noopener noreferrer">{en ? "Directions ↗" : "Cómo llegar ↗"}</a>
            </div>
          </div>
        </Popup>
    </MapContainer>
  );
}
