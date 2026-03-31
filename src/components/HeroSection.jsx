import { CrowdCanvas } from './skiper39';
import groupPhoto from '../assets/group_photo.jpeg';

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        background: '#050508',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
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
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
        <CrowdCanvas src={groupPhoto} rows={4} cols={3} />
      </div>

      {/* Dark gradient fade at top and bottom */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '200px',
        background: 'linear-gradient(to bottom, #050508 0%, transparent 100%)',
        zIndex: 2,
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '240px',
        background: 'linear-gradient(to top, #050508 0%, transparent 100%)',
        zIndex: 2,
        pointerEvents: 'none',
      }} />

      {/* Hero content */}
      <div style={{
        position: 'relative',
        zIndex: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 20px',
      }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(124,58,237,0.15)',
          border: '1px solid rgba(124,58,237,0.3)',
          borderRadius: '50px',
          padding: '6px 18px',
          marginBottom: '28px',
          fontSize: '12px',
          fontWeight: '600',
          letterSpacing: '0.12em',
          color: '#c4b5fd',
          textTransform: 'uppercase',
        }}>
          <span style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#a855f7',
            boxShadow: '0 0 8px #a855f7',
            display: 'inline-block',
          }} />
          Now in Beta
        </div>

        {/* Main title */}
        <h1
          className="font-doto"
          style={{
            fontSize: 'clamp(3.5rem, 13vw, 11rem)',
            fontWeight: 900,
            margin: 0,
            lineHeight: 0.9,
            letterSpacing: '0.06em',
            color: '#ffffff',
            textShadow: '0 0 60px rgba(168,85,247,0.5), 0 0 120px rgba(124,58,237,0.3)',
          }}
        >
          CAMPUS
        </h1>
        <h1
          className="font-doto"
          style={{
            fontSize: 'clamp(3.5rem, 13vw, 11rem)',
            fontWeight: 900,
            margin: '0 0 24px',
            lineHeight: 0.9,
            letterSpacing: '0.06em',
            background: 'linear-gradient(135deg, #c4b5fd 0%, #818cf8 50%, #a855f7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          MYTRA
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(12px, 1.5vw, 15px)',
          color: 'rgba(255,255,255,0.45)',
          letterSpacing: '0.18em',
          fontVariant: 'small-caps',
          textTransform: 'uppercase',
          marginBottom: '40px',
          fontWeight: 500,
        }}>
          Built by Ka-ama
        </p>

        {/* Download button */}
        <a href="#download" className="btn-silver-glass">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download APK
        </a>

        {/* Scroll hint */}
        <div style={{
          marginTop: '56px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          opacity: 0.35,
        }}>
          <span style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)',
          }} />
        </div>
      </div>
    </section>
  );
}
