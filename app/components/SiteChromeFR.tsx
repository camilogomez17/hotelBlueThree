"use client";
import { useEffect, useState } from "react";

const tripAdvisor = "https://www.tripadvisor.com/Hotel_Review-g2336594-d24005682-Reviews-Hotel_BlueThree_Chancay-Chancay_Lima_Region.html";
const linktree = "https://linktr.ee/bluethree";
const mapsUrl = "https://www.google.com/maps/place/Hotel+BlueThree+Chancay+%7C+Hoteles+en+Chancay+%26+Huaral/@-11.5491071,-77.260408,15.39z/data=!4m9!3m8!1s0x91068921449d21a5:0x7351952174e4f1fe!5m2!4m1!1i2!8m2!3d-11.5453985!4d-77.2588947!16s%2Fg%2F11rsr5p47y?entry=ttu&g_ep=EgoyMDI2MTExOC4xIKXMDSoASAFQAw%3D%3D";
const address = "Residencial Buena Vista – Las Tres Pirámides, Chancay 15130, Perú";
const attractions = [["Castillo de Chancay","Un site historique et culturel emblématique de la ville."],["Museo Municipal de Chancay","Découvrez l’histoire et la culture locales."],["Eco Truly Park","Un lieu écologique et culturel près de la côte."],["Reserva Nacional de Lachay","Explorez les paysages naturels et les collines côtières saisonnières."]];
const socials = [["Instagram","https://www.instagram.com/hotelbluethreechancay/"],["Facebook","https://www.facebook.com/Hotelesenchancayhuaral/"],["TikTok","https://www.tiktok.com/@hotelbluethreechancay"]];

const languageLabels = {es:"Español",en:"English",fr:"Français"} as const;
function LanguageChooser(){
 const [current,setCurrent]=useState<"es"|"en"|"fr">("es");
 useEffect(()=>{const segment=window.location.pathname.split("/")[1];setCurrent(segment==="en"||segment==="fr"?segment:"es");document.documentElement.lang=segment==="en"||segment==="fr"?segment:"es";},[]);
 function change(language:"es"|"en"|"fr"){
  const pathname=window.location.pathname;
  const segments=pathname.split("/").filter(Boolean);
  if(segments[0]==="en"||segments[0]==="fr")segments.shift();
  const destination=(language==="es"?"":"/"+language)+(segments.length?"/"+segments.join("/"):"/");
  window.location.assign(destination+window.location.search+window.location.hash);
 }
 return <label className="language-chooser" data-language-chooser><span className="sr-only">Idioma / Language / Langue</span><span aria-hidden="true" className="language-chooser-icon">◎</span><select aria-label="Idioma / Language / Langue" value={current} onChange={e=>change(e.target.value as "es"|"en"|"fr")}>{Object.entries(languageLabels).map(([code,label])=><option key={code} value={code}>{label}</option>)}</select></label>;
}

function BookingLinks() { return <div className="booking-links"><a className="button button-dark" href={tripAdvisor} target="_blank" rel="noreferrer">Réserver sur Tripadvisor <span>↗</span></a><a className="button button-outline" href="https://wa.me/message/IPFK3E5CKTNGK1" target="_blank" rel="noopener noreferrer">Contacter l’hôtel <span>↗</span></a></div>; }
export function SiteHeader() {
 const [menuOpen,setMenuOpen]=useState(false);
 const [stayDates,setStayDates]=useState<{day:string;month:string;weekday:string}[]>([]);
 const [bedOption,setBedOption]=useState("1 lit · 2 personnes");
 useEffect(()=>{
   const formatter=new Intl.DateTimeFormat("es-PE",{timeZone:"America/Lima",day:"numeric",month:"short",weekday:"short"});
   const now=new Date();
   setStayDates([0,1].map(offset=>{
     const date=new Date(now.getTime()+offset*86400000);
     const parts=formatter.formatToParts(date);
     const part=(type:string)=>parts.find(item=>item.type===type)?.value??"";
     return {day:part("day"),month:part("month").replace(".",""),weekday:part("weekday").replace(".","")};
   }));
 },[]);
 return <>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="/fr/" aria-label="Hôtel BlueThree, aller à l’accueil" onClick={() => setMenuOpen(false)}>
            <img className="brand-logo" src="/logo.jpeg" alt="" width={88} height={88} onError={(event) => { event.currentTarget.style.display = "none"; event.currentTarget.nextElementSibling?.classList.remove("brand-fallback-hidden"); }} /><span className="brand-mark brand-fallback-hidden" aria-hidden="true">B<span>3</span></span>
            
          </a>
          <nav className={menuOpen ? "main-nav is-open" : "main-nav"} id="main-navigation" aria-label="Navigation principale">
            <a href="/fr/habitaciones" onClick={() => setMenuOpen(false)}>Chambres</a>
            <a href="/fr/servicios" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="/fr/galeria" onClick={() => setMenuOpen(false)}>Galerie</a>
            <a href="/fr/#ubicacion" onClick={() => setMenuOpen(false)}>Emplacement</a>
            <a href="/fr/contacto" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
          <div className="header-actions">
            <LanguageChooser />
            <a className="header-cta" href={tripAdvisor} target="_blank" rel="noopener noreferrer">Réserver <span aria-hidden="true">↗</span></a>
            <button className="menu-toggle" type="button" aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      <section className="hotel-search-widget" aria-label="Recherche de séjour">
        <div className="hotel-search-inner">
          <div className="hotel-search-identity">
            <h1>Hôtel BlueThree Chancay</h1>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer">{address} <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hotel-search-form">
            <div className="hotel-date-display" aria-label="Arrivée aujourd’hui et départ demain, heure du Pérou">
              {stayDates.length ? stayDates.map((date,index)=>(
                <div className="hotel-date-tile" key={index}>
                  <span className="hotel-date-number">{date.day}</span>
                  <span className="hotel-date-label"><strong>{date.month}</strong><span>{date.weekday}</span></span>
                </div>
              )) : <span className="hotel-date-loading">Arrivée aujourd’hui · Départ demain</span>}
            </div>
            <label className="hotel-bed-choice">
              <span className="sr-only">Type de chambre et voyageurs</span>
              <select value={bedOption} onChange={event=>setBedOption(event.target.value)}>
                <option value="1 lit · 2 personnes">1 lit, 2 personnes</option>
                <option value="2 lits · 4 personnes">2 lits, 4 personnes</option>
              </select>
            </label>
            <a className="hotel-search-submit" href={tripAdvisor} target="_blank" rel="noopener noreferrer">Consulter les tarifs ↗</a>
          </div>
        </div>
        <p className="hotel-search-disclaimer">Les dates sont affichées selon l’heure du Pérou. Confirmez la disponibilité, les tarifs et les conditions directement auprès de l’hôtel.</p>
      </section>

 </>;
}
export function SiteFooter() {
 return <>
      <section className="location-section" id="ubicacion"><div className="section-wrap location-layout">
        <div className="location-copy"><p className="eyebrow">AU CŒUR DE CHANCAY</p><h2>Découvrez ce qui<br/>vous entoure à <em>Huaral.</em></h2><p className="location-address">{address}</p><a className="button button-dark" href={mapsUrl} target="_blank" rel="noreferrer">Itinéraire <span>↗</span></a>
          <div className="attractions"><h3>À découvrir à proximité</h3>{attractions.map(([name, detail]) => <div className="attraction" key={name}><strong>{name}</strong><p>{detail}</p></div>)}</div>
        </div>
        <div className="map-panel"><iframe title="Emplacement de l’Hôtel BlueThree Chancay sur Google Maps" src="https://maps.google.com/maps?q=Hotel%20BlueThree%20Chancay&t=&z=14&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></div>
      </div></section>

      <section className="contact-section section-wrap" id="contacto">
        <div className="contact-copy"><p className="eyebrow">PLANIFIEZ VOTRE SÉJOUR</p><h2>Réservez votre prochain<br/><em>séjour à Chancay.</em></h2><p>Consultez les tarifs, la disponibilité, les types de chambres et les demandes spéciales via les canaux officiels de l’hôtel ou Tripadvisor.</p><BookingLinks/></div>
        <div className="social-panel"><p className="eyebrow">CANAUX OFFICIELS</p>{socials.map(([name, href]) => <a className="social-link" href={href} key={name} target="_blank" rel="noreferrer">{name}<span>↗</span></a>)}<a className="social-link" href="/fr/contacto">Tous nos liens<span>↗</span></a><a className="social-link" href={tripAdvisor} target="_blank" rel="noreferrer">Tripadvisor · Réservations et avis<span>↗</span></a><a className="social-link" href="https://www.booking.com/searchresults.html?aid=390156&amp;label=duc511jc-10CAsosQFCE3RyZXMtYXJib2xlcy1henVsZXNIM1gDaKcCiAEBmAEzuAEHyAEP2AED6AEB-AEBiAIBqAIBuAKmhYjYBsACAdICJGVlNTI4NjhkLTY0YTUtNDg3MS1hZGRlLWI3ZTEwYTE5YWVlZtgCAeACAQ&amp;redirected=1&amp;city=-341519&amp;highlighted_hotels=15241340&amp;hlrd=user_sh&amp;source=hotel&amp;checkin=2026-11-21&amp;checkout=2026-11-22&amp;keep_landing=1&amp;sid=c027b02c5e916b27cfe75db44e9fae5d" target="_blank" rel="noopener noreferrer">Booking.com · Réservations<span>↗</span></a></div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-main">
            <div className="footer-about">
              <a className="brand footer-brand" href="/fr/" aria-label="Hôtel BlueThree, retourner à l’accueil">
                <img className="brand-logo" src="/logo.jpeg" alt="" width={88} height={88} onError={(event) => { event.currentTarget.style.display = "none"; event.currentTarget.nextElementSibling?.classList.remove("brand-fallback-hidden"); }} /><span className="brand-mark brand-fallback-hidden" aria-hidden="true">B<span>3</span></span>
                
              </a>
              <p>Découvrez Chancay. Reposez-vous au BlueThree.</p>
              <address>{address}</address>
              <a className="footer-map-link" href={mapsUrl} target="_blank" rel="noopener noreferrer">Voir l’emplacement ↗</a>
            </div>
            <div className="footer-column">
              <h3>Explorer</h3>
              <a href="/fr/habitaciones">Chambres et suites</a>
              <a href="/fr/servicios">Services</a>
              <a href="/fr/galeria">Galerie</a>
              <a href="/fr/gastronomia">Restauration</a>
              <a href="/fr/eventos">Événements</a>
              <a href="/fr/#ubicacion">Emplacement</a>
            </div>
            <div className="footer-column">
              <h3>Votre séjour</h3>
              <a href="/fr/contacto">Contact</a>
              <a href={tripAdvisor} target="_blank" rel="noopener noreferrer">Réserver sur Tripadvisor ↗</a>
              <a href={linktree} target="_blank" rel="noopener noreferrer">Contacter l’hôtel ↗</a>
              <a href="/fr/politicas">Règlement de l’hôtel</a>
            </div>
            <div className="footer-column">
              <h3>Suivez-nous</h3>
              {socials.map(([name, href]) => <a key={name} href={href} target="_blank" rel="noopener noreferrer">{name} ↗</a>)}
            </div>
          </div>
          <div className="footer-bottom">
            <small>© 2026 Hôtel BlueThree Chancay. Tous droits réservés.</small>
            <a href="/fr/">Retour en haut ↑</a>
          </div>
        </div>
      </footer>
 </>;
}
