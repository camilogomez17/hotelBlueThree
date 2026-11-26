"use client";

import { useState } from "react";
import { rooms, tripAdvisor, whatsapp } from "../data/hotel";
import Image from 'next/image'

const translations: Record<string, string> = {
  "Habitación estándar": "Standard room", "Suite junior": "Junior suite", "Junior suite deluxe": "Deluxe junior suite",
  "Suite deluxe": "Deluxe suite", "Jacuzzi con dos camas, balcón y vista panorámica": "Two-bed room with jacuzzi, balcony and panoramic view",
  "Jacuzzi tántrica con vista al jardín": "Garden-view jacuzzi room",
  "Jacuzzi y balcón con vista al jardín": "Jacuzzi room with garden-view balcony",
  "Jacuzzi y balcón con vista panorámica": "Jacuzzi room with panoramic balcony",
  "2 personas": "2 guests", "1 cama de 2 plazas": "1 double bed", "1 cama de 2½ plazas": "1 large double bed",
  "1 cama de 1½ plazas": "1 single bed", "Smart TV 32 pulgadas": "32-inch Smart TV", "Smart TV 42 pulgadas": "42-inch Smart TV",
  "Aire acondicionado": "Air conditioning", "Calefacción": "Heating", "Minibar": "Minibar",
  "Intercomunicador": "Intercom", "Plancha": "Iron", "Jarra eléctrica": "Electric kettle",
  "Secadora de pelo": "Hair dryer", "Champú y jabón": "Shampoo and soap", "Toallas": "Towels",
  "No fumar": "Non-smoking", "Estacionamiento incluido": "Parking included", "Escritorio": "Desk",
  "Caja fuerte": "Safe", "Silla tántrica": "Tantric chair", "Vista al jardín": "Garden view",
  "Balcón y vista panorámica": "Balcony and panoramic view", "Balcón con vista al jardín": "Garden-view balcony",
  "Toallas y batas": "Towels and robes"
};

export default function RoomsCatalog({ language = "es" }: { language?: "es" | "en" }) {
  const en = language === "en";
  const [category, setCategory] = useState("all");
  const tabs = [{id:"all",es:"Todas",en:"All"},{id:"guest",es:"Habitaciones",en:"Guest rooms"},{id:"suites",es:"Suites",en:"Suites"},{id:"accessible",es:"Accesibles",en:"Accessible"}];
  const visibleRooms = rooms.filter(room => category === "all" || (category === "accessible" ? room.features.some(feature => /accesible|movilidad reducida/i.test(feature)) : category === "suites" ? /suite/i.test(room.name) : !/suite/i.test(room.name)));
  const tr = (s: string) => en ? (translations[s] ?? s) : s;
  return <main className="blue-rooms-page">
    <header className="section-wrap">
      <h1 className="py-6 text-center text-[32px] leading-tight font-bold text-[#002b55] sm:py-7 sm:text-[40px]">{en ? "Rooms and suites" : "Habitaciones y suites"}</h1>
      <div className="mb-4 sm:mb-5">
        <h2 className="pb-2 text-center text-lg font-bold text-[#002b55]">{en ? "Your stay includes" : "Tu estadía incluye"}</h2>
        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-base">
          {["Wi-Fi", "No fumar", "Estacionamiento incluido", "Aire acondicionado", "Calefacción", "Minibar"].filter(feature => rooms.length > 0 && rooms.every(room => room.features.includes(feature))).map(feature => (
            <li key={feature} className="flex items-center gap-1">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg>
              {feature === "No fumar" ? (en ? "Non-smoking rooms" : "Habitaciones para no fumadores") : tr(feature)}
            </li>
          ))}
        </ul>
      </div>
    </header>
    <section aria-label={en ? "Room categories" : "Categorías de habitaciones"}>
      <div className="border-y border-[#d7e0e8]">
        <div className="section-wrap">
          <div role="tablist" aria-label={en ? "Room types" : "Tipos de habitación"} className="flex overflow-x-auto pt-2" onKeyDown={event => {
            const index = tabs.findIndex(tab => tab.id === category);
            const next = event.key === "ArrowRight" ? (index + 1) % tabs.length : event.key === "ArrowLeft" ? (index + tabs.length - 1) % tabs.length : event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : -1;
            if (next < 0) return;
            event.preventDefault();
            setCategory(tabs[next].id);
            document.getElementById("room-tab-" + tabs[next].id)?.focus();
          }}>
            {tabs.map(tab => <button key={tab.id} id={"room-tab-" + tab.id} type="button" role="tab" aria-selected={category === tab.id} aria-controls="room-category-panel" tabIndex={category === tab.id ? 0 : -1} onClick={() => setCategory(tab.id)} className={"grow cursor-pointer whitespace-nowrap border-b-4 px-4 py-3 text-lg font-bold sm:text-xl " + (category === tab.id ? "border-[#003b71] text-[#003b71]" : "border-transparent text-[#202b36] hover:text-[#003b71]")}>{en ? tab.en : tab.es}</button>)}
          </div>
        </div>
      </div>
      <div id="room-category-panel" role="tabpanel" aria-labelledby={"room-tab-" + category} tabIndex={0} className="section-wrap py-5">
        <p className="mb-4 text-sm" aria-live="polite">{en ? "Room options: " : "Opciones de alojamiento: "}{visibleRooms.length}</p>
        {visibleRooms.length === 0 && <p className="py-8 text-center">{en ? "Contact the hotel to confirm accessibility options." : "Contacta al hotel para confirmar las opciones de accesibilidad."}</p>}
        <ul className="blue-rooms-list grid! grid-cols-1! gap-4! p-0! md:grid-cols-2! lg:grid-cols-3! xl:grid-cols-4!">
          {visibleRooms.map((room, index) => {
            const highlights = room.features.filter(f => /personas|cama|Jacuzzi|Balcón|Vista|Escritorio|Minibar|Smart TV/.test(f)).slice(0, 4);
            return <li key={room.src} className="flex min-w-0 flex-col overflow-hidden rounded-lg border border-[#d7e0e8] bg-white">
              <Image width={1200} height={800} className="aspect-7/4 w-full object-cover" src={room.src} alt={tr(room.name)} loading={index < 2 ? "eager" : "lazy"} />
              <div className="flex flex-1 flex-col px-4 pt-3 pb-4">
                <h3 className="text-lg leading-snug font-bold">{tr(room.name)}</h3>
                <details className="mb-3">
                  <summary className="cursor-pointer py-1 text-sm font-semibold text-[#003b71] underline">{en ? "View room details" : "Ver detalles de la habitación"}</summary>
                  <p className="my-2 text-sm">{en ? tr(room.name) : room.description}</p>
                  <ul className="list-disc pl-5 text-sm">{room.features.map(feature => <li key={feature}>{tr(feature)}</li>)}</ul>
                </details>
                <ul className="mb-4 grid grid-cols-2 gap-x-4 gap-y-1 pl-4 text-sm text-[#52616f]">{highlights.map(feature => <li className="list-disc wrap-break-word" key={feature}>{tr(feature)}</li>)}</ul>
                <a className="mt-auto block rounded bg-[#003b71] px-3 py-3 text-center text-sm font-bold text-white! hover:bg-[#002b55]" href={whatsapp} target="_blank" rel="noopener noreferrer">{en ? "Check availability" : "Consultar disponibilidad"}</a>
              </div>
            </li>;
          })}
        </ul>
      </div>
    </section>
    <footer className="section-wrap blue-rooms-footer"><a href={tripAdvisor} target="_blank" rel="noopener noreferrer">{en ? "View Hotel BlueThree on Tripadvisor ↗" : "Ver Hotel BlueThree en Tripadvisor ↗"}</a></footer>
  </main>;
}
