import { CrowdCanvas } from './skiper39';

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
            CAMPUS MYTRA
          </h1>

          <div className="mt-10 flex flex-col sm:flex-col items-center gap-4 sm:gap-6">
            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-slate-200/40 backdrop-blur-xl transition duration-200 hover:bg-slate-50"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download APK
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
