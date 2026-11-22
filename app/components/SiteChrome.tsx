"use client";
import { usePathname } from "next/navigation";
import { SiteHeader as EsHeader, SiteFooter as EsFooter } from "./SiteChromeES";
import { SiteHeader as EnHeader, SiteFooter as EnFooter } from "./SiteChromeEN";
import { SiteHeader as FrHeader, SiteFooter as FrFooter } from "./SiteChromeFR";
export function SiteHeader(){const path=usePathname();return path.startsWith("/en")?<EnHeader/>:path.startsWith("/fr")?<FrHeader/>:<EsHeader/>;}
export function SiteFooter(){const path=usePathname();return path.startsWith("/en")?<EnFooter/>:path.startsWith("/fr")?<FrFooter/>:<EsFooter/>;}
