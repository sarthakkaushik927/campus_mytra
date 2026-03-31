import { useEffect, useRef, useState } from 'react';

const SIZE_INFO = [
  { label: 'APK Size', value: '~80 MB' },
  { label: 'Android Version', value: 'Android 8.0+' },
  { label: 'Required Storage', value: '~80 MB' },
  { label: 'RAM Recommended', value: '2 GB+' },
  { label: 'Architecture', value: 'ARM64, x86_64' },
];

const CHIP_INFO = [
  { label: 'Android 8.0+', color: '#2563eb' },
  { label: 'Free to Install', color: '#ef4444' },
  { label: 'No Play Store Required', color: '#facc15' },
  { label: 'Secure APK', color: '#22c55e' },
  { label: 'Fast Setup', color: '#8b5cf6' },
];

export default function DownloadSection() {
  const [showGuide, setShowGuide] = useState(false);
  const headRef = useRef(null);

  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <section
        id="download"
        style={{
          background: '#050508',
          padding: '120px 40px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* BG glow */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }} />

        <div
          ref={headRef}
          className="scroll-fade"
          style={{ position: 'relative', zIndex: 1 }}
        >
          <p style={{
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.2em',
            color: '#7c3aed',
            textTransform: 'uppercase',
            marginBottom: '14px',
          }}>
            Get the App
          </p>

          <h2 style={{
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: '#fff',
            margin: '0 0 16px',
          }}>
            Download Campus Mytra
          </h2>

          <p style={{
            fontSize: '17px',
            color: 'rgba(255,255,255,0.45)',
            maxWidth: '460px',
            marginInline: 'auto',
            lineHeight: 1.7,
            marginBottom: '48px',
          }}>
            Available as an Android APK. Install in seconds and start competing with your campus.
          </p>

          {/* Main download button */}
          <a href="#" className="btn-silver-glass" style={{ fontSize: '16px', padding: '16px 48px' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download APK Free <img src="src/assets/android.png" alt="android " style={{ width: '35px', height: '40px' }} />
          </a>

          {/* Size guide link */}
          <div style={{ marginTop: '20px' }}>
            <button
              onClick={() => setShowGuide(true)}
              style={{
                background: 'none',
                border: 'none',
                color: 'rgba(255,255,255,0.35)',
                fontSize: '13px',
                cursor: 'none',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
                letterSpacing: '0.03em',
                transition: 'color 0.2s',
              }}
            >
              View Size Guide & Requirements
            </button>
          </div>

          {/* Platform chips */}
          <div style={{
            marginTop: '48px',
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            {CHIP_INFO.map((chip) => (
              <div
                key={chip.label}
                style={{
                  background: `${chip.color}20`,
                  border: `1px solid ${chip.color}`,
                  borderRadius: '50px',
                  padding: '9px 18px',
                  fontSize: '15px',
                  color: '#fff',
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                  boxShadow: `0 0 0 1px ${chip.color}30, 0 10px 24px ${chip.color}20`,
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                  e.currentTarget.style.boxShadow = `0 0 0 1px ${chip.color}, 0 18px 36px ${chip.color}3d`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = `0 0 0 1px ${chip.color}30, 0 10px 24px ${chip.color}20`;
                }}
              >
                {chip.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Size Guide Modal */}
      {showGuide && (
        <div
          className="modal-backdrop"
          onClick={() => setShowGuide(false)}
        >
          <div
            className="modal-box"
            onClick={e => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setShowGuide(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '18px',
                background: 'none',
                border: 'none',
                color: 'rgba(255,255,255,0.5)',
                fontSize: '22px',
                cursor: 'none',
                lineHeight: 1,
              }}
            >
              ×
            </button>

            <h3 style={{
              fontSize: '20px',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '8px',
            }}>
              Size Guide & Requirements
            </h3>
            <p style={{
              fontSize: '13px',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '28px',
              lineHeight: 1.6,
            }}>
              Before downloading, make sure your device meets these requirements.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {SIZE_INFO.map(item => (
                <div
                  key={item.label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '14px 18px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '12px',
                  }}
                >
                  <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)' }}>{item.label}</span>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: '#c4b5fd' }}>{item.value}</span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="btn-silver-glass"
              style={{ marginTop: '24px', width: '100%', justifyContent: 'center' }}
            >
              Download APK →
            </a>
          </div>
        </div>
      )}
    </>
  );
}
