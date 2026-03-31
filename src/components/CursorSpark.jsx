import { useEffect, useRef } from 'react';

const SPARK_COLORS = ['#a855f7', '#7c3aed', '#818cf8', '#c4b5fd', '#e879f9', '#fff'];
const SPARK_COUNT = 10;

export default function CursorSpark() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const posRef = useRef({ x: -100, y: -100 });
  const targetRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top = e.clientY + 'px';
      }
    };

    const animate = () => {
      const { x: tx, y: ty } = targetRef.current;
      const px = posRef.current.x + (tx - posRef.current.x) * 0.12;
      const py = posRef.current.y + (ty - posRef.current.y) * 0.12;
      posRef.current = { x: px, y: py };
      if (cursorRef.current) {
        cursorRef.current.style.left = px + 'px';
        cursorRef.current.style.top = py + 'px';
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    const onClick = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      for (let i = 0; i < SPARK_COUNT; i++) {
        const angle = (i / SPARK_COUNT) * 360;
        const dist = 30 + Math.random() * 30;
        const rad = (angle * Math.PI) / 180;
        const tx = Math.cos(rad) * dist;
        const ty = Math.sin(rad) * dist;
        const color = SPARK_COLORS[Math.floor(Math.random() * SPARK_COLORS.length)];

        const spark = document.createElement('div');
        spark.className = 'spark-ray';
        spark.style.left = x + 'px';
        spark.style.top = y + 'px';
        spark.style.background = color;
        spark.style.setProperty('--tx', tx + 'px');
        spark.style.setProperty('--ty', ty + 'px');
        spark.style.width = (3 + Math.random() * 5) + 'px';
        spark.style.height = spark.style.width;
        spark.style.boxShadow = `0 0 6px 2px ${color}`;
        document.body.appendChild(spark);

        setTimeout(() => spark.remove(), 520);
      }
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('click', onClick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('click', onClick);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}
