"use client";
import dynamic from "next/dynamic";
export default dynamic(() => import("./HotelMap"), { ssr: false, loading: () => <div style={{height: "clamp(340px,55vw,550px)", background: "#e5e3df"}} /> });
