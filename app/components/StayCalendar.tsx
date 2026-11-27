"use client";
import { useEffect, useRef, useState } from "react";

type Props = { locale: "es-PE" | "en-US"; today: string; checkIn: string; checkOut: string; onCheckIn: (date: string) => void; onCheckOut: (date: string) => void };
const iso = (date: Date) => date.toISOString().slice(0,10);
const parse = (date: string) => new Date(date+"T00:00:00Z");
const shiftMonth = (date: string, offset: number) => {
  const d = parse(date);
  return iso(new Date(Date.UTC(d.getUTCFullYear(),d.getUTCMonth()+offset,1)));
};
export default function StayCalendar({locale,today,checkIn,checkOut,onCheckIn,onCheckOut}:Props){
  const es=locale==="es-PE";
  const [active,setActive]=useState<"in"|"out"|null>(null);
  const [month,setMonth]=useState("");
  const root=useRef<HTMLDivElement>(null);
  const inButton=useRef<HTMLButtonElement>(null);
  const outButton=useRef<HTMLButtonElement>(null);
  useEffect(()=>{
    function close(event:PointerEvent){if(!root.current?.contains(event.target as Node))setActive(null);}
    document.addEventListener("pointerdown",close);
    return ()=>document.removeEventListener("pointerdown",close);
  },[]);
  const format=(value:string,options:Intl.DateTimeFormatOptions)=>value ? new Intl.DateTimeFormat(locale,{...options,timeZone:"UTC"}).format(parse(value)) : "—";
  const min=active==="out"?checkIn:today;
  const monthStart=month?shiftMonth(month,0):"";
  const first=monthStart?parse(monthStart):null;
  const offset=first?(first.getUTCDay()+6)%7:0;
  const count=first?new Date(Date.UTC(first.getUTCFullYear(),first.getUTCMonth()+1,0)).getUTCDate():0;
  const fields=[{key:"in" as const,label:es?"Entrada":"Check-in",value:checkIn,ref:inButton},{key:"out" as const,label:es?"Salida":"Check-out",value:checkOut,ref:outButton}];
  return <div ref={root} className="relative flex shrink-0 justify-center" onKeyDown={event=>{if(event.key==="Escape"){event.stopPropagation();(active==="in"?inButton:outButton).current?.focus();setActive(null);}}}>
    {fields.map(field=><button key={field.key} ref={field.ref} type="button" disabled={!today} aria-expanded={active===field.key} aria-label={field.label+": "+field.value} onClick={()=>{setMonth(shiftMonth(field.value||today,0));setActive(active===field.key?null:field.key);}} className="flex min-w-0 flex-col items-start gap-1 px-3 py-1 text-left text-[#003b71] hover:bg-slate-50 focus-visible:outline-2">
      <span className="text-xs font-semibold uppercase tracking-wide">{field.label}</span>
      <span className="flex items-center gap-2">
        <span className="text-4xl font-bold leading-none tabular-nums">{format(field.value,{day:"numeric"})}</span>
        <span className="flex flex-col text-xs uppercase"><strong>{format(field.value,{month:"short"})}</strong><span>{format(field.value,{weekday:"short"})}</span></span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></svg>
      </span>
    </button>)}
    {active && first && <div role="group" aria-label={es?"Calendario":"Calendar"} className="absolute left-1/2 top-full z-50 mt-3 w-[min(320px,calc(100vw-48px))] -translate-x-1/2 rounded-md border border-slate-200 bg-white p-4 text-[#003b71] shadow-xl">
      <p className="mb-3 text-sm font-semibold">{active==="in"?(es?"Selecciona la entrada":"Select check-in"):(es?"Selecciona la salida":"Select check-out")}</p>
      <div className="mb-3 flex items-center justify-between">
        <button type="button" aria-label={es?"Mes anterior":"Previous month"} disabled={monthStart<=shiftMonth(min,0)} onClick={()=>setMonth(shiftMonth(month,-1))} className="h-9 w-9 rounded border border-slate-300 disabled:opacity-30">‹</button>
        <strong aria-live="polite" className="capitalize">{format(monthStart,{month:"long",year:"numeric"})}</strong>
        <button type="button" aria-label={es?"Mes siguiente":"Next month"} onClick={()=>setMonth(shiftMonth(month,1))} className="h-9 w-9 rounded border border-slate-300">›</button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {Array.from({length:7},(_,i)=><span key={i} className="py-1 text-xs text-slate-500">{format(iso(new Date(Date.UTC(2024,0,1+i))),{weekday:"short"})}</span>)}
        {Array.from({length:offset},(_,i)=><span key={"empty"+i}/>)}
        {Array.from({length:count},(_,i)=>{
          const value=iso(new Date(Date.UTC(first.getUTCFullYear(),first.getUTCMonth(),i+1)));
          const disabled=active==="in"?value<today:value<=checkIn;
          const selected=value===checkIn||value===checkOut;
          const between=value>checkIn&&value<checkOut;
          return <button key={value} type="button" disabled={disabled} aria-label={format(value,{dateStyle:"full"})} aria-pressed={selected} className={"aspect-square rounded text-sm font-medium focus-visible:outline-2 disabled:cursor-not-allowed disabled:text-slate-300 "+(selected?"bg-[#003b71] text-white":between?"bg-blue-50":"hover:bg-slate-100")} onClick={()=>{
            if(active==="in"){onCheckIn(value);setActive("out");outButton.current?.focus();}
            else{onCheckOut(value);setActive(null);outButton.current?.focus();}
          }}>{i+1}</button>;
        })}
      </div>
    </div>}
  </div>;
}
