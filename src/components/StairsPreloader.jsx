import { useEffect, useRef, useState } from 'react';
import { AuroraText } from "@/components/ui/aurora-text";

const PANEL_COUNT = 7;
const PANEL_COLORS = [
  '#ffffffff', '#ffffffff', '#ffffffff', '#ffffffff', '#ffffffff', '#ffffffff', '#ffffffff'
];

export default function StairsPreloader({ onDone }) {
  const panelRefs = useRef([]);
  const [lettersVisible, setLettersVisible] = useState(false);
  const text = 'CAMPUS MYTRA';

  useEffect(() => {
    // Show text after tiny delay
    const t0 = setTimeout(() => setLettersVisible(true), 200);

    // Staggered panel exit: each panel slides up with offset delay
    const timers = [];
    const BASE_DELAY = 400;
    const STAGGER = 90;
    const DURATION = 520;

    panelRefs.current.forEach((panel, i) => {
      if (!panel) return;
      const delay = BASE_DELAY + i * STAGGER;
      const t = setTimeout(() => {
        panel.style.transition = `transform ${DURATION}ms cubic-bezier(0.76, 0, 0.24, 1)`;
        panel.style.transform = 'translateY(100%)';
      }, delay);
      timers.push(t);
    });

    // Call onDone after all panels finish
    const totalTime = BASE_DELAY + (PANEL_COUNT - 1) * STAGGER + DURATION + 80;
    const doneTimer = setTimeout(() => {
      if (onDone) onDone();
    }, totalTime);

    return () => {
      clearTimeout(t0);
      timers.forEach(clearTimeout);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <>
      {/* Letter-by-letter title */}
      <div className="preloader-text" style={{ zIndex: 99991 }}>
        {text.split('').map((ch, i) => (
          <span
            key={i}
            style={{
              display: 'inline-block',
              opacity: lettersVisible ? 1 : 0,
              transform: lettersVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.4s ease ${i * 0.05}s, transform 0.4s ease ${i * 0.05}s`,
              marginRight: ch === ' ' ? '0.4em' : '0.02em',
            }}
          >
            <AuroraText>{ch}</AuroraText>
          </span>
        ))}
      </div>

      {/* Stair panels */}
      <div
        className="stairs-preloader"
        style={{ flexDirection: 'row' }}
      >
        {Array.from({ length: PANEL_COUNT }).map((_, i) => (
          <div
            key={i}
            ref={el => (panelRefs.current[i] = el)}
            className="stair-panel"
            style={{
              background: PANEL_COLORS[i],
              willChange: 'transform',
            }}
          />
        ))}
      </div>
    </>
  );
}
