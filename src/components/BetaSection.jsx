import { useEffect, useRef } from 'react';

const PERKS = [
  { icon: '🎨', title: 'Custom App Icon', desc: 'Get a personalized app icon with your photo or campus branding.' },
  { icon: '🏷️', title: 'Exclusive Banner', desc: 'Your name on a custom banner featured inside the app.' },
  { icon: '⚡', title: 'Early Access', desc: 'Play new challenges weeks before public release.' },
  { icon: '🏆', title: 'Beta Badge', desc: 'A permanent beta tester badge on your profile.' },
];

export default function BetaSection() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const els = [leftRef.current, rightRef.current].filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.15 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="beta"
      ref={sectionRef}
      style={{
        background: '#050508',
        padding: '120px 40px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* BG blobs */}
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          bottom: '-20%',
          right: '-10%',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(79,70,229,0.12) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }} />
        <div style={{
          position: 'absolute',
          top: '-10%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }} />
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Top label */}
        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
          <p style={{
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.2em',
            color: '#a855f7',
            textTransform: 'uppercase',
            marginBottom: '14px',
          }}>
            Limited Spots
          </p>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.8rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: '#fff',
            margin: '0 0 16px',
          }}>
            Join 100 Beta Testers
          </h2>
          <p style={{
            fontSize: '17px',
            color: 'rgba(255,255,255,0.45)',
            maxWidth: '500px',
            marginInline: 'auto',
            lineHeight: 1.7,
          }}>
            Be among the first 100 users and unlock exclusive benefits — custom banners, personalized icons, and much more.
          </p>
        </div>

        {/* Two column */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
        }}>
          {/* Left — perk cards */}
          <div
            ref={leftRef}
            className="scroll-fade"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}
          >
            {PERKS.map(perk => (
              <div
                key={perk.title}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '18px',
                  padding: '24px',
                  transition: 'border-color 0.2s, background 0.2s',
                }}
              >
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>{perk.icon}</div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
                  {perk.title}
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>
                  {perk.desc}
                </div>
              </div>
            ))}

            {/* CTA */}
            <div style={{ gridColumn: '1 / -1', paddingTop: '8px' }}>
              <a
                href="#download"
                className="btn-silver-glass"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Claim Your Spot →
              </a>
            </div>
          </div>

          {/* Right — gradient art placeholder */}
          <div
            ref={rightRef}
            className="scroll-fade"
            style={{
              borderRadius: '28px',
              overflow: 'hidden',
              aspectRatio: '1',
              position: 'relative',
              boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {/* Gradient placeholder for future custom artwork */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, #1e1b4b 0%, #2e1065 25%, #4c1d95 50%, #1e3a8a 75%, #0f172a 100%)',
            }} />
            {/* Shimmer overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.04) 50%, transparent 70%)',
            }} />
            {/* Grid pattern */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }} />
            {/* Center content */}
            <div style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '18px',
                background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                boxShadow: '0 8px 30px rgba(124,58,237,0.4)',
              }}>
                CM
              </div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }}>
                Custom Work — Coming Soon
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
