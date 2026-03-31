import { useEffect, useRef, useState } from 'react';

const LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Features', href: '#features' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Beta', href: '#beta' },
  { label: 'Download', href: '#download' },
  { label: 'Feedback', href: '#feedback' },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState('hero');
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY.current + 10) {
        setHidden(true);
      } else if (y < lastY.current - 5) {
        setHidden(false);
      }
      lastY.current = y;

      // Active section detection
      const sections = LINKS.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.5) {
          setActive(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`glass-navbar${hidden ? ' hidden' : ''}`}>
      {LINKS.map(link => (
        <a
          key={link.href}
          href={link.href}
          className={active === link.href.replace('#', '') ? 'active' : ''}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
