"use client";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';


const tripAdvisor = "https://www.tripadvisor.com/Hotel_Review-g2336594-d24005682-Reviews-Hotel_BlueThree_Chancay-Chancay_Lima_Region.html";
const linktree = "https://linktr.ee/bluethree";
const mapsUrl = "https://www.google.com/maps/place/Hotel+BlueThree+Chancay+%7C+Hoteles+en+Chancay+%26+Huaral/@-11.5491071,-77.260408,15.39z/data=!4m9!3m8!1s0x91068921449d21a5:0x7351952174e4f1fe!5m2!4m1!1i2!8m2!3d-11.5453985!4d-77.2588947!16s%2Fg%2F11rsr5p47y?entry=ttu&g_ep=EgoyMDI2MTExOC4xIKXMDSoASAFQAw%3D%3D";
const address = "Residencial Buena Vista – Las Tres Pirámides, Chancay 15130, Perú";
const socials = [["Instagram","https://www.instagram.com/hotelbluethreechancay/"],["Facebook","https://www.facebook.com/Hotelesenchancayhuaral/"],["TikTok","https://www.tiktok.com/@hotelbluethreechancay"]];

const languageLabels = {es:"Español",en:"English"} as const;
function LanguageChooser(){
  const pathname = usePathname();
  const current = pathname.split("/")[1] === "en" ? "en" : "es";
 useEffect(()=>{const segment=window.location.pathname.split("/")[1];document.documentElement.lang=segment==="en"?segment:"es";},[]);
 function change(language:"es"|"en"){
  const pathname=window.location.pathname;
  const segments=pathname.split("/").filter(Boolean);
  if(segments[0]==="en")segments.shift();
  const routes: Record<string,string> = {"habitaciones":"rooms","informacion-del-hotel":"hotel-information","galeria":"gallery","ubicacion":"location","politicas":"policies","contacto":"contact","gastronomia":"dining","eventos":"events"};
  if(segments.length){
    const slug=segments[0];
    segments[0]=language==="en"?(routes[slug]??slug):(Object.keys(routes).find(key=>routes[key]===slug)??slug);
  }
  const destination=(language==="es"?"":"/"+language)+(segments.length?"/"+segments.join("/"):"/");
  window.location.assign(destination+window.location.search+window.location.hash);
 }
 return <label className="language-chooser" data-language-chooser><span className="sr-only">Idioma / Language</span><span aria-hidden="true" className="language-chooser-icon">◎</span><select aria-label="Idioma / Language" value={current} onChange={e=>change(e.target.value as "es"|"en")}>{Object.entries(languageLabels).map(([code,label])=><option key={code} value={code}>{label}</option>)}</select></label>;
}

function BookingLinks() { return <div className="booking-links"><a className="button button-dark" href={tripAdvisor} target="_blank" rel="noreferrer">Reservar en Tripadvisor <span>↗</span></a><a className="button button-outline" href="https://wa.me/message/IPFK3E5CKTNGK1" target="_blank" rel="noopener noreferrer">Contactar al hotel <span>↗</span></a></div>; }
export function SiteHeader() {
 const [menuOpen,setMenuOpen]=useState(false);
 const [bedOption,setBedOption]=useState("1 cama · 2 huéspedes");
 const [stayDates, setStayDates] = useState<{day:string;month:string;weekday:string}[]>([]);
 useEffect(() => {
  const timer = window.setTimeout(() => {
    const formatter=new Intl.DateTimeFormat("es-PE",{timeZone:"America/Lima",day:"numeric",month:"short",weekday:"short"});
    const now=new Date();
    setStayDates([0, 1].map(offset => {
      const date=new Date(now.getTime()+offset*86400000);
      const parts=formatter.formatToParts(date);
      const part=(type:string)=>parts.find(item=>item.type===type)?.value??"";
      return {day:part("day"),month:part("month").replace(".",""),weekday:part("weekday").replace(".","")};
    }));
  }, 0);
  return () => window.clearTimeout(timer);
 }, []);
 return <>
      <header className="site-header">
        <div className="hotel-top-navigation"><button className="menu-toggle" type="button" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>
              <span></span><span></span><span></span>
            </button><LanguageChooser /></div>
        <div className="header-inner">
          <Link className="brand" href="/" aria-label="Hotel BlueThree, ir al inicio" onClick={() => setMenuOpen(false)}>
            <Image className="brand-logo" src="/organized_photos/brand/logo2.jpeg" alt="" width={88} height={88} onError={(event) => { event.currentTarget.style.display = "none"; event.currentTarget.nextElementSibling?.classList.remove("brand-fallback-hidden"); }} /><span className="brand-mark brand-fallback-hidden" aria-hidden="true">B<span>3</span></span>
          </Link>
          <nav className={menuOpen ? "main-nav is-open" : "main-nav"} id="main-navigation" aria-label="Navegación principal">
            <Link href="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
            <a href="/informacion-del-hotel" onClick={() => setMenuOpen(false)}>Información de Hotel</a>
            <a href="/habitaciones" onClick={() => setMenuOpen(false)}>Habitaciones</a>
            <a href="/galeria" onClick={() => setMenuOpen(false)}>Galería</a>
            <a href="/ubicacion" onClick={() => setMenuOpen(false)}>Ubicación</a>
            <a href="/gastronomia" onClick={() => setMenuOpen(false)}>Gastronomía</a>
            <a href="/eventos" onClick={() => setMenuOpen(false)}>Reuniones y eventos</a>
            <a href="/contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
          </nav>
          <div className="header-actions">
            
            <a className="header-cta" href="https://wa.me/message/IPFK3E5CKTNGK1" target="_blank" rel="noopener noreferrer">Reservar <span aria-hidden="true">↗</span></a>
            
          </div>
        </div>
      </header>

      <section className="hotel-search-widget" aria-label="Consulta de estadía">
        <div className="hotel-search-inner">
          <div className="hotel-search-identity">
            <h1>Hotel BlueThree Chancay</h1>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer">{address} <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hotel-search-form">
            <div className="hotel-date-display" aria-label="Entrada hoy y salida mañana, hora de Perú">
              {stayDates.length ? stayDates.map((date,index)=>(
                <div className="hotel-date-tile" key={index}>
                  <span className="hotel-date-number">{date.day}</span>
                  <span className="hotel-date-label"><strong>{date.month}</strong><span>{date.weekday}</span></span>
                </div>
              )) : <span className="hotel-date-loading">Entrada hoy · Salida mañana</span>}
            </div>
            <label className="hotel-bed-choice">
              <span className="sr-only">Tipo de habitación y huéspedes</span>
              <select value={bedOption} onChange={event=>setBedOption(event.target.value)}>
                <option value="1 cama · 2 huéspedes">1 cama, 2 huéspedes</option>
                <option value="2 camas · 4 huéspedes">2 camas, 4 huéspedes</option>
              </select>
            </label>
            <a className="hotel-search-submit" href={tripAdvisor} target="_blank" rel="noopener noreferrer">Consultar precios ↗</a>
          </div>
        </div>
        <p className="hotel-search-disclaimer">Fechas mostradas según la hora de Perú. Confirma disponibilidad, tarifas y condiciones directamente con el hotel.</p>
      </section>

 </>;
}
export function SiteFooter() {
 return <>
      <section className="contact-section section-wrap" id="contacto">
        <div className="contact-copy"><p className="eyebrow">PLANIFICA TU ESTADÍA</p><h2>Reserva tu próxima<br/><em>visita a Chancay.</em></h2><p>Consulta tarifas, disponibilidad, tipos de habitación y solicitudes especiales a través de los canales oficiales del hotel o Tripadvisor.</p><BookingLinks/></div>
        <div className="social-panel"><p className="eyebrow">CANALES OFICIALES</p>{socials.map(([name, href]) => <a className="social-link" href={href} key={name} target="_blank" rel="noreferrer">{name}<span>↗</span></a>)}<a className="social-link" href="/contacto">Todos nuestros enlaces<span>↗</span></a><a className="social-link" href={tripAdvisor} target="_blank" rel="noreferrer">Tripadvisor · Reservas y opiniones<span>↗</span></a><a className="social-link" href="https://www.booking.com/searchresults.html?aid=390156&amp;label=duc511jc-10CAsosQFCE3RyZXMtYXJib2xlcy1henVsZXNIM1gDaKcCiAEBmAEzuAEHyAEP2AED6AEB-AEBiAIBqAIBuAKmhYjYBsACAdICJGVlNTI4NjhkLTY0YTUtNDg3MS1hZGRlLWI3ZTEwYTE5YWVlZtgCAeACAQ&amp;redirected=1&amp;city=-341519&amp;highlighted_hotels=15241340&amp;hlrd=user_sh&amp;source=hotel&amp;checkin=2026-11-21&amp;checkout=2026-11-22&amp;keep_landing=1&amp;sid=c027b02c5e916b27cfe75db44e9fae5d" target="_blank" rel="noopener noreferrer">Booking.com · Reservas<span>↗</span></a></div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-main">
            <div className="footer-about">
              <Link className="brand footer-brand" href="/" aria-label="Hotel BlueThree, volver al inicio">
                <Image className="brand-logo" src="/organized_photos/brand/logo2.jpeg" alt="" width={88} height={88} onError={(event) => { event.currentTarget.style.display = "none"; event.currentTarget.nextElementSibling?.classList.remove("brand-fallback-hidden"); }} /><span className="brand-mark brand-fallback-hidden" aria-hidden="true">B<span>3</span></span>
                
              </Link>
              <p>Descubre Chancay. Descansa en BlueThree.</p>
              <address>{address}</address>
              <Link className="footer-map-link" href="/ubicacion" target="_blank" rel="noopener noreferrer">Ver ubicación ↗</Link>
            </div>
            <div className="footer-column">
              <h3>Explora</h3>
              <Link href="/habitaciones">Habitaciones y suites</Link>
              <Link href="/informacion-del-hotel">Información de Hotel</Link>
              <Link href="/galeria">Galería</Link>
              <Link href="/gastronomia">Gastronomía</Link>
              <Link href="/eventos">Eventos</Link>
              <Link href="/ubicacion">Ubicación</Link>
            </div>
            <div className="footer-column">
              <h3>Tu estadía</h3>
              <a href="/contacto">Contacto</a>
              <a href={tripAdvisor} target="_blank" rel="noopener noreferrer">Reservar en Tripadvisor ↗</a>
              <a href="https://www.booking.com/searchresults.html?aid=390156&amp;label=duc511jc-10CAsosQFCE3RyZXMtYXJib2xlcy1henVsZXNIM1gDaKcCiAEBmAEzuAEHyAEP2AED6AEB-AEBiAIBqAIBuAKmhYjYBsACAdICJGVlNTI4NjhkLTY0YTUtNDg3MS1hZGRlLWI3ZTEwYTE5YWVlZtgCAeACAQ&amp;redirected=1&amp;city=-341519&amp;highlighted_hotels=15241340&amp;hlrd=user_sh&amp;source=hotel&amp;keep_landing=1" target="_blank" rel="noopener noreferrer">Reservar en Booking.com ↗</a>
              <a href={linktree} target="_blank" rel="noopener noreferrer">Consultar al hotel ↗</a>
              <a href="/politicas">Políticas del hotel</a>
            </div>
            <div className="footer-column">
              <h3>Síguenos</h3>
              {socials.map(([name, href]) => <a key={name} href={href} target="_blank" rel="noopener noreferrer">{name} ↗</a>)}
            </div>
          </div>
          <div className="footer-bottom">
            <Link href="/">Volver arriba ↑</Link>
          </div>
        </div>
      </footer>
 </>;
}
