"use client";
import React from "react";
import { CrowdCanvas } from './skiper39';
import ColourfulText from "@/components/ui/colourful-text";
import { AuroraText } from "@/components/ui/aurora-text"
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <div>


      <section id="hero" className="relative w-full min-h-screen overflow-hidden bg-white flex items-center justify-center">


        {/* CrowdCanvas walking figures */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <CrowdCanvas/>
        </div>


        {/* Hero content */}
        <div className="absolute top-0 my-[60px] z-30 flex w-full max-w-11xl flex-col items-center justify-center text-center px-6 ">
          <p className="mb-10 mt-0 text-xs sm:text-sm uppercase tracking-[0.18em] font-medium text-slate-700">
            Built by KA-arma
          </p>

          <h1 className="font-doto text-[clamp(3rem,9vw,8rem)] sm:text-[clamp(3.5rem,13vw,11rem)] font-black leading-[0.92] tracking-[0.06em] text-slate-900 drop-shadow-[0_0_30px_rgba(0,0,0,0.08)]">
            <ColourfulText text="CAMPUS MYTRA" />
            {/* <AuroraText>CAMPUS MYTRA</AuroraText> */}
          </h1>

          <div className="mt-10 flex flex-col sm:flex-col items-center gap-4 sm:gap-6">
            <a
              href="#download"
              className="group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950/95 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-200/40 transition duration-200 hover:bg-slate-900/90 overflow-hidden border border-white/10 backdrop-blur-3xl">
                <span className="pointer-events-none absolute -left-24 top-0 h-24 w-36 rounded-full bg-white/30 blur-2xl opacity-0 transition duration-300 group-hover:opacity-80 animate-[shine_2.5s_ease-in-out_infinite]" />
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download APK
              </span>
            </a>

            <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-100/70 px-4 py-2 text-[10px] uppercase tracking-[0.12em] font-semibold text-slate-900">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-600 shadow-[0_0_8px_rgba(37,99,235,0.35)]" />
              Now in Beta
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
