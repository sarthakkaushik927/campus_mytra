"use client";
import React from "react";
import { CrowdCanvas } from './skiper39';
import ColourfulText from "@/components/ui/colourful-text";
// import { AuroraText } from "@/components/ui/aurora-text"
// import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <div>


      <section id="hero" className="relative w-full min-h-screen overflow-hidden bg-slate-900 text-white flex items-center justify-center">

        {/* Color-blend gradient blobs */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <div style={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }} />
        <div style={{
          position: 'absolute',
          top: '30%',
          right: '5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(79,70,229,0.2) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '30%',
          width: '600px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }} />
      </div>


        {/* CrowdCanvas walking figures */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <CrowdCanvas/>
        </div>


        {/* Hero content */}
        <div className="absolute top-0 my-[60px] z-30 flex w-full max-w-11xl flex-col items-center justify-center text-center px-6 ">
          <p className="mb-10 mt-0 text-xs sm:text-sm uppercase tracking-[0.18em] font-medium text-slate-300">
            Built by KA-arma
          </p>

          <h1 className="font-doto text-[clamp(3rem,9vw,8rem)] sm:text-[clamp(3.5rem,13vw,11rem)] font-black leading-[0.92] tracking-[0.06em] text-white drop-shadow-[0_0_40px_rgba(0,0,0,0.3)]">
            <ColourfulText text="CAMPUS MYTRA" />
            {/* <AuroraText>CAMPUS MYTRA</AuroraText> */}
          </h1>

          <div className="mt-10 flex flex-col sm:flex-col items-center gap-4 sm:gap-6">
            <a
              href="#download"
              className="group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#7C3AED_0%,#2563EB_50%,#7C3AED_100%)]" />
              <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-900/95 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/40 transition duration-200 hover:bg-slate-800/95 overflow-hidden border border-white/10 backdrop-blur-3xl">
                <span className="pointer-events-none absolute -left-24 top-0 h-24 w-36 rounded-full bg-white/10 blur-2xl opacity-0 transition duration-300 group-hover:opacity-80 animate-[shine_2.5s_ease-in-out_infinite]" />
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download APK
              </span>
            </a>

            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/70 px-4 py-2 text-[10px] uppercase tracking-[0.12em] font-semibold text-slate-200">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.35)]" />
              Now in Beta
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
