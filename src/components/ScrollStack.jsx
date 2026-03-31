import { useEffect, useRef } from 'react';
import dsaImg from '../assets/dsa_challenge.jpeg';
import chessImg from '../assets/chess_challenge.jpeg';
import unoImg from '../assets/uno_challenge.jpeg';

const FEATURES = [
  {
    id: 'dsa',
    label: 'DSA Challenge',
    title: 'Master Data\nStructures',
    desc: 'Compete in timed DSA challenges, climb the leaderboard, and sharpen your problem-solving skills with curated algorithm puzzles crafted for campus coders.',
    tag: 'Competitive Coding',
    color: '#7c3aed',
    accent: '#a855f7',
    img: dsaImg,
    top: '0px',
    zIndex: 10,
  },
  {
    id: 'chess',
    label: 'Chess Challenge',
    title: 'Outsmart\nEvery Move',
    desc: 'Play live chess against campus rivals. Rated matches, puzzles, and opening tutorials — elevate your game from dorm room to tournament champion.',
    tag: 'Strategy & Mind',
    color: '#1e3a5f',
    accent: '#38bdf8',
    img: chessImg,
    top: '60px',
    zIndex: 11,
  },
  {
    id: 'uno',
    label: 'UNO Challenge',
    title: 'Wild Cards\nWild Fun',
    desc: "Fast-paced UNO with campus-themed wild cards. Create rooms, invite friends, and see who survives the draw-four cascade. Bragging rights await.",
    tag: 'Multiplayer Fun',
    color: '#7f1d1d',
    accent: '#f87171',
    img: unoImg,
    top: '120px',
    zIndex: 12,
  },
];

function FeatureCard({ feature, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('visible');
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      className="stack-card"
      style={{
        top: feature.top,
        zIndex: feature.zIndex,
        background: `linear-gradient(135deg, #0a0a14 0%, #070710 100%)`,
        borderTop: `1px solid rgba(255,255,255,0.06)`,
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${feature.color}33 0%, transparent 70%)`,
          filter: 'blur(80px)',
          top: isEven ? '-10%' : 'auto',
          bottom: isEven ? 'auto' : '-10%',
          left: isEven ? '-5%' : 'auto',
          right: isEven ? 'auto' : '-5%',
        }} />
      </div>

      <div
        ref={cardRef}
        className="scroll-fade"
        style={{
          maxWidth: '1100px',
          width: '100%',
          margin: '0 auto',
          padding: '0 40px',
          display: 'grid',
          gridTemplateColumns: isEven ? '1fr 1fr' : '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}
      >
        {/* Text block */}
        <div style={{ order: isEven ? 0 : 1 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: `${feature.color}22`,
            border: `1px solid ${feature.accent}44`,
            borderRadius: '50px',
            padding: '5px 14px',
            marginBottom: '20px',
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '0.12em',
            color: feature.accent,
            textTransform: 'uppercase',
          }}>
            {feature.tag}
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: '#ffffff',
            marginBottom: '20px',
            whiteSpace: 'pre-line',
          }}>
            {feature.title}
          </h2>

          <p style={{
            fontSize: '16px',
            lineHeight: 1.75,
            color: 'rgba(255,255,255,0.55)',
            maxWidth: '460px',
            marginBottom: '36px',
          }}>
            {feature.desc}
          </p>

          <a
            href="#download"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: feature.accent,
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.05em',
              textDecoration: 'none',
              borderBottom: `1px solid ${feature.accent}55`,
              paddingBottom: '2px',
              transition: 'gap 0.2s',
            }}
          >
            Try the Challenge
            <span>→</span>
          </a>
        </div>

        {/* Image block */}
        <div style={{ order: isEven ? 1 : 0 }}>
          <div style={{
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            aspectRatio: '4/3',
            boxShadow: `0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)`,
          }}>
            <img
              src={feature.img}
              alt={feature.label}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            {/* Image overlay gradient */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(135deg, ${feature.color}33 0%, transparent 60%)`,
            }} />
            {/* Label chip on image */}
            <div style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              background: 'rgba(5,5,8,0.75)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '50px',
              padding: '6px 14px',
              fontSize: '12px',
              fontWeight: 600,
              color: '#fff',
              letterSpacing: '0.05em',
            }}>
              {feature.label}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ScrollStack() {
  return (
    <section
      id="features"
      style={{ background: '#050508' }}
    >
      {/* Section header */}
      <div style={{
        textAlign: 'center',
        padding: '100px 20px 60px',
      }}>
        <p style={{
          fontSize: '12px',
          fontWeight: 600,
          letterSpacing: '0.2em',
          color: '#7c3aed',
          textTransform: 'uppercase',
          marginBottom: '16px',
        }}>
          What's Inside
        </p>
        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 4rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          color: '#fff',
          margin: 0,
        }}>
          Challenges Await
        </h2>
        <p style={{
          marginTop: '16px',
          fontSize: '17px',
          color: 'rgba(255,255,255,0.45)',
          maxWidth: '500px',
          marginInline: 'auto',
          lineHeight: 1.7,
        }}>
          Three arenas. Infinite rivalry. All on one campus app.
        </p>
      </div>

      {/* Stacked cards */}
      <div className="scroll-stack-wrapper">
        {FEATURES.map((feature, i) => (
          <FeatureCard key={feature.id} feature={feature} index={i} />
        ))}
      </div>

      {/* Bottom padding so content after can scroll into view */}
      <div style={{ height: '100vh' }} />
    </section>
  );
}
