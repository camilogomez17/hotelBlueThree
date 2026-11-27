"use client";
import { useEffect, useState } from "react";
import Image from 'next/image'
import { usePathname } from "next/navigation";

const tripAdvisor = "https://www.tripadvisor.com/Hotel_Review-g2336594-d24005682-Reviews-Hotel_BlueThree_Chancay-Chancay_Lima_Region.html";
const linktree = "https://linktr.ee/bluethree";
const mapsUrl = "https://www.google.com/maps/place/Hotel+BlueThree+Chancay+%7C+Hoteles+en+Chancay+%26+Huaral/@-11.5491071,-77.260408,15.39z/data=!4m9!3m8!1s0x91068921449d21a5:0x7351952174e4f1fe!5m2!4m1!1i2!8m2!3d-11.5453985!4d-77.2588947!16s%2Fg%2F11rsr5p47y?entry=ttu&g_ep=EgoyMDI2MTExOC4xIKXMDSoASAFQAw%3D%3D";
const address = "Residencial Buena Vista – Las Tres Pirámides, Chancay 15130, Perú";
const socials = [["Instagram","https://www.instagram.com/hotelbluethreechancay/"],["Facebook","https://www.facebook.com/Hotelesenchancayhuaral/"],["TikTok","https://www.tiktok.com/@hotelbluethreechancay"]];

const languageLabels = {es:"Español",en:"English"} as const;
function LanguageChooser(){
const pathname = usePathname();
const current = pathname.split("/")[1] === "en" ? "en" : "es";

useEffect(() => {
  document.documentElement.lang = current;
}, [current]);
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

function BookingLinks() { return <div className="booking-links"><a className="button button-dark" href={tripAdvisor} target="_blank" rel="noreferrer">Book on Tripadvisor <span>↗</span></a><a className="button button-outline" href="https://wa.me/message/IPFK3E5CKTNGK1" target="_blank" rel="noopener noreferrer">Contact the hotel <span>↗</span></a></div>; }
export function SiteHeader() {
 const [menuOpen,setMenuOpen]=useState(false);
 const [rooms,setRooms]=useState(1);
 const [today,setToday]=useState("");
 const [checkIn,setCheckIn]=useState("");
 const [checkOut,setCheckOut]=useState("");
 function nextDay(date:string){
  const day=new Date(date+"T00:00:00Z");
  day.setUTCDate(day.getUTCDate()+1);
  return day.toISOString().slice(0,10);
 }
 useEffect(()=>{
  const timer=window.setTimeout(()=>{
   const date=new Intl.DateTimeFormat("sv-SE",{timeZone:"America/Lima",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date());
   setToday(date);
   setCheckIn(date);
   setCheckOut(nextDay(date));
  },0);
  return ()=>window.clearTimeout(timer);
 },[]);
 const validDates=Boolean(today && checkIn && checkOut && checkIn>=today && checkOut>checkIn);
 const message=`Hello, I would like to inquire about rates and availability.\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nRooms: ${rooms}`;
 return <>
      <header className="site-header">
        <div className="hotel-top-navigation"><button className="menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>
              <span></span><span></span><span></span>
            </button><LanguageChooser /></div>
        <div className="header-inner">
          <a className="brand" href="/en/" aria-label="Hotel BlueThree, go to homepage" onClick={() => setMenuOpen(false)}>
            <Image className="brand-logo" src="/organized_photos/brand/logo2.jpeg" alt="" width={88} height={88} onError={(event) => { event.currentTarget.style.display = "none"; event.currentTarget.nextElementSibling?.classList.remove("brand-fallback-hidden"); }} /><span className="brand-mark brand-fallback-hidden" aria-hidden="true">B<span>3</span></span>
            
          </a>
          <nav className={menuOpen ? "main-nav is-open" : "main-nav"} id="main-navigation" aria-label="Main navigation">
            <a href="/en" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="/en/hotel-information" onClick={() => setMenuOpen(false)}>Hotel Information</a>
            <a href="/en/rooms" onClick={() => setMenuOpen(false)}>Rooms</a>
            <a href="/en/gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
            <a href="/en/location" onClick={() => setMenuOpen(false)}>Location</a>
            <a href="/en/dining" onClick={() => setMenuOpen(false)}>Dining</a>
            <a href="/en/events" onClick={() => setMenuOpen(false)}>Meetings and events</a>
            <a href="/en/contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
          <div className="header-actions">
            
            <a className="header-cta" href="https://wa.me/message/IPFK3E5CKTNGK1" target="_blank" rel="noopener noreferrer">Book <span aria-hidden="true">↗</span></a>
            
          </div>
        </div>
      </header>

      <section className="hotel-search-widget" aria-label="Stay inquiry">
        <div className="hotel-search-inner">
          <div className="hotel-search-identity">
            <h1>Hotel BlueThree Chancay</h1>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer">{address} <span aria-hidden="true">↗</span></a>
          </div>
          <form className="hotel-search-form" onSubmit={event=>{
            event.preventDefault();
            if(validDates) window.open("https://wa.me/51914046710?text="+encodeURIComponent(message),"_blank","noopener,noreferrer");
          }}>
            <div className="hotel-date-display grid grid-cols-2 gap-0">
              {[
                {label:"Check-in",value:checkIn,min:today,onChange:(date:string)=>{
                  setCheckIn(date);
                  if(date && (!checkOut || checkOut<=date)) setCheckOut(nextDay(date));
                }},
                {label:"Check-out",value:checkOut,min:checkIn ? nextDay(checkIn) : today,onChange:setCheckOut}
              ].map(field=>{
                const date=field.value ? new Date(field.value+"T00:00:00Z") : null;
                const format=(options:Intl.DateTimeFormatOptions)=>date ? new Intl.DateTimeFormat("en-US",{...options,timeZone:"UTC"}).format(date) : "—";
                return <label key={field.label} className="hotel-calendar-field relative flex min-w-0 cursor-pointer flex-col gap-1 px-3 py-1">
                  <span className="text-xs font-semibold uppercase tracking-wide">{field.label}</span>
                  <div className="hotel-date-tile" aria-hidden="true">
                    <span className="hotel-date-number">{format({day:"numeric"})}</span>
                    <span className="hotel-date-label"><strong>{format({month:"short"})}</strong><span>{format({weekday:"short"})}</span></span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></svg>
                  </div>
                  <input className="hotel-calendar-input absolute inset-0 h-full w-full cursor-pointer opacity-0" aria-label={field.label} type="date" required min={field.min || undefined} value={field.value} onClick={event=>{try{event.currentTarget.showPicker?.()}catch{ /* native picker fallback */ }}} onChange={event=>field.onChange(event.target.value)}/>
                </label>;
              })}
            </div>
            <label className="hotel-bed-choice">
              <span className="sr-only">Number of rooms</span>
              <select value={rooms} onChange={event=>setRooms(Number(event.target.value))}>
                {[1,2,4,8,16].map(count=><option key={count} value={count}>{count} {count===1 ? "room" : "rooms"}</option>)}
              </select>
            </label>
            <button className="hotel-search-submit" type="submit" disabled={!validDates}>Check prices ↗</button>
          </form>
        </div>
        <p className="hotel-search-disclaimer">Dates are shown in Peru local time. Confirm availability, rates and conditions directly with the hotel.</p>
      </section>

 </>;
}
export function SiteFooter() {
 return <>
      <section className="contact-section section-wrap" id="contacto">
        <div className="contact-copy"><p className="eyebrow">PLAN YOUR STAY</p><h2>Book your next<br/><em>visit to Chancay.</em></h2><p>Check rates, availability, room types and special requests through the hotel&aposs official channels or Tripadvisor.</p><BookingLinks/></div>
        <div className="social-panel"><p className="eyebrow">OFFICIAL CHANNELS</p>{socials.map(([name, href]) => <a className="social-link" href={href} key={name} target="_blank" rel="noreferrer">{name}<span>↗</span></a>)}<a className="social-link" href="/en/contact">All our links<span>↗</span></a><a className="social-link" href={tripAdvisor} target="_blank" rel="noreferrer">Tripadvisor · Bookings and reviews<span>↗</span></a><a className="social-link" href="https://www.booking.com/searchresults.html?aid=390156&amp;label=duc511jc-10CAsosQFCE3RyZXMtYXJib2xlcy1henVsZXNIM1gDaKcCiAEBmAEzuAEHyAEP2AED6AEB-AEBiAIBqAIBuAKmhYjYBsACAdICJGVlNTI4NjhkLTY0YTUtNDg3MS1hZGRlLWI3ZTEwYTE5YWVlZtgCAeACAQ&amp;redirected=1&amp;city=-341519&amp;highlighted_hotels=15241340&amp;hlrd=user_sh&amp;source=hotel&amp;checkin=2026-11-21&amp;checkout=2026-11-22&amp;keep_landing=1&amp;sid=c027b02c5e916b27cfe75db44e9fae5d" target="_blank" rel="noopener noreferrer">Booking.com · Bookings<span>↗</span></a></div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-main">
            <div className="footer-about">
              <a className="brand footer-brand" href="/en/" aria-label="Hotel BlueThree, return to homepage">
                <Image className="brand-logo" src="/organized_photos/brand/logo2.jpeg" alt="" width={88} height={88} onError={(event) => { event.currentTarget.style.display = "none"; event.currentTarget.nextElementSibling?.classList.remove("brand-fallback-hidden"); }} /><span className="brand-mark brand-fallback-hidden" aria-hidden="true">B<span>3</span></span>
                
              </a>
              <p>Discover Chancay. Relax at BlueThree.</p>
              <address>{address}</address>
              <a className="footer-map-link" href="/en/location" target="_blank" rel="noopener noreferrer">View location ↗</a>
            </div>
            <div className="footer-column">
              <h3>Explore</h3>
              <a href="/en/rooms">Rooms and suites</a>
              <a href="/en/hotel-information">Hotel Information</a>
              <a href="/en/gallery">Gallery</a>
              <a href="/en/dining">Dining</a>
              <a href="/en/events">Events</a>
              <a href="/en/location">Location</a>
            </div>
            <div className="footer-column">
              <h3>Your stay</h3>
              <a href="/en/contact">Contact</a>
              <a href={tripAdvisor} target="_blank" rel="noopener noreferrer">Book on Tripadvisor ↗</a>
              <a href="https://www.booking.com/searchresults.html?aid=390156&amp;label=duc511jc-10CAsosQFCE3RyZXMtYXJib2xlcy1henVsZXNIM1gDaKcCiAEBmAEzuAEHyAEP2AED6AEB-AEBiAIBqAIBuAKmhYjYBsACAdICJGVlNTI4NjhkLTY0YTUtNDg3MS1hZGRlLWI3ZTEwYTE5YWVlZtgCAeACAQ&amp;redirected=1&amp;city=-341519&amp;highlighted_hotels=15241340&amp;hlrd=user_sh&amp;source=hotel&amp;keep_landing=1" target="_blank" rel="noopener noreferrer">Book on Booking.com ↗</a>
              <a href={linktree} target="_blank" rel="noopener noreferrer">Contact the hotel ↗</a>
              <a href="/en/policies">Hotel policies</a>
            </div>
            <div className="footer-column">
              <h3>Follow us</h3>
              {socials.map(([name, href]) => <a key={name} href={href} target="_blank" rel="noopener noreferrer">{name} ↗</a>)}
            </div>
          </div>
          <div className="footer-bottom">
            <a href="/en/">Back to top ↑</a>
          </div>
        </div>
      </footer>
 </>;
}
