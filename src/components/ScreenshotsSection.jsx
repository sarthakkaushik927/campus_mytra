import { useEffect, useRef } from 'react';
import DomeGallery from './domegallery';

import ss1 from '../screenshorts/1.jpeg';
import ss2 from '../screenshorts/2.jpeg';
import ss3 from '../screenshorts/3.jpeg';
import ss4 from '../screenshorts/4.jpeg';
import ss5 from '../screenshorts/5.jpeg';
import ss6 from '../screenshorts/6.jpeg';
import ss7 from '../screenshorts/7.jpeg';
import ss8 from '../screenshorts/8.jpeg';
import ss9 from '../screenshorts/9.jpeg';

const SCREENSHOTS = [
  { src: ss1, alt: 'App screen 1' },
  { src: ss2, alt: 'App screen 2' },
  { src: ss3, alt: 'App screen 3' },
  { src: ss4, alt: 'App screen 4' },
  { src: ss5, alt: 'App screen 5' },
  { src: ss6, alt: 'App screen 6' },
  { src: ss7, alt: 'App screen 7' },
  { src: ss8, alt: 'App screen 8' },
  { src: ss9, alt: 'App screen 9' },
];

export default function ScreenshotsSection() {
  const headerRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const els = [headerRef.current, ctaRef.current].filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.2 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="gallery"
      style={{
        background: '#050508',
        padding: '80px 0 60px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background ambience */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '800px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(79,70,229,0.1) 0%, transparent 70%)',
        filter: 'blur(100px)',
        pointerEvents: 'none',
      }} />

      {/* Section header */}
      <div
        ref={headerRef}
        className="scroll-fade"
        style={{ textAlign: 'center', padding: '0 20px 20px' }}
      >
        <p style={{
          fontSize: '12px',
          fontWeight: 600,
          letterSpacing: '0.2em',
          color: '#7c3aed',
          textTransform: 'uppercase',
          marginBottom: '14px',
        }}>
          App Preview
        </p>
        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 4rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          color: '#fff',
          margin: '0 0 16px',
        }}>
          See It In Action
        </h2>
        <p style={{
          fontSize: '16px',
          color: 'rgba(255,255,255,0.45)',
          maxWidth: '460px',
          marginInline: 'auto',
          lineHeight: 1.7,
        }}>
          Drag to explore. Click any screenshot to enlarge. Every screen crafted for the campus experience.
        </p>
      </div>

      {/* DomeGallery */}
      <div style={{ width: '100%', height: '80vh', position: 'relative' }}>
        <DomeGallery
          images={SCREENSHOTS}
          grayscale={false}
          overlayBlurColor="#050508"
          fit={0.68}
          minRadius={480}
          segments={32}
          dragDampening={2}
          imageBorderRadius="16px"
          openedImageBorderRadius="20px"
          openedImageWidth="340px"
          openedImageHeight="600px"
          maxVerticalRotationDeg={8}
        />
      </div>

      {/* CTA */}
      <div
        ref={ctaRef}
        className="scroll-fade"
        style={{ textAlign: 'center', paddingTop: '40px' }}
      >
        <a href="#download" className="btn-silver-glass">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download the App
        </a>
      </div>
    </section>
  );
}
