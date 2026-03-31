import { useEffect, useRef } from 'react';

const PERKS = [
  { icon: '🎨', title: 'Custom App Icon', desc: 'Get a personalized app icon with your photo or campus branding.' },
  { icon: '🏷️', title: 'Exclusive Banner', desc: 'Your name on a custom banner featured inside the app.' },
  { icon: '⚡', title: 'Early Access', desc: 'Play new challenges weeks before public release.' },
  { icon: '🏆', title: 'Beta Badge', desc: 'A permanent beta tester badge on your profile.' },
];

export default function BetaSection() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const els = [leftRef.current, rightRef.current].filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="beta" className="relative overflow-hidden bg-slate-950 px-6 py-24 sm:px-8 md:py-28 lg:px-12 lg:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute rounded-full blur-[100px]"
          style={{
            bottom: '-20%',
            right: '-10%',
            width: '700px',
            height: '700px',
            background: 'radial-gradient(circle, rgba(79,70,229,0.12) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute rounded-full blur-[80px]"
          style={{
            top: '-10%',
            left: '-10%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-16 lg:gap-24">
        <div className="text-center">
          <p className="mx-auto mb-4 max-w-[24rem] text-xs uppercase tracking-[0.24em] text-violet-400">
            Limited Spots
          </p>
          <h2 className="mx-auto mb-4 max-w-3xl text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Join 100 Beta Testers
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            Be among the first 100 users and unlock exclusive benefits — custom banners, personalized icons, and much more.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div ref={leftRef} className="scroll-fade grid gap-4 sm:grid-cols-2">
            {PERKS.map((perk) => (
              <div
                key={perk.title}
                className="rounded-[1.125rem] border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:border-violet-400/30 hover:bg-white/10"
              >
                <div className="mb-3 text-3xl">{perk.icon}</div>
                <div className="mb-2 text-sm font-semibold text-white">{perk.title}</div>
                <div className="text-xs leading-6 text-slate-300">{perk.desc}</div>
              </div>
            ))}

            <div className="col-span-full pt-2">
              <a href="#download" className="btn-silver-glass inline-flex w-full justify-center px-6 py-4 text-sm font-semibold">
                Claim Your Spot →
              </a>
            </div>
          </div>

          <div
            ref={rightRef}
            className="scroll-fade relative overflow-hidden rounded-[1.75rem] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)]"
          >
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, #1e1b4b 0%, #2e1065 25%, #4c1d95 50%, #1e3a8a 75%, #0f172a 100%)',
              }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(255,255,255,0.04)_50%,transparent_70%)]" />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }}
            />
            <div className="relative aspect-square flex items-center justify-center p-8">
              <div className="grid place-items-center gap-3">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-2xl text-3xl text-white shadow-[0_8px_30px_rgba(124,58,237,0.4)]"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}
                >
                  CM
                </div>
                <div className="text-xs uppercase tracking-[0.12em] text-slate-300">
                  Custom Work — Coming Soon
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
