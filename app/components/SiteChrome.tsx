"use client";
import { usePathname } from "next/navigation";
import { SiteHeader as EsHeader, SiteFooter as EsFooter } from "./SiteChromeES";
import { SiteHeader as EnHeader, SiteFooter as EnFooter } from "./SiteChromeEN";
export function SiteHeader(){const path=usePathname();return path.startsWith("/en")?<EnHeader/>:<EsHeader/>;}
export function SiteFooter(){const path=usePathname();return path.startsWith("/en")?<EnFooter/>:<EsFooter/>;}
