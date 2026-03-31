import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import dsaImg from "../assets/dsa_challenge.jpeg";
import chessImg from "../assets/chess_challenge.jpeg";
import unoImg from "../assets/uno_challenge.jpeg";

const content = [
  {
    title: "DSA Challenge",
    description:
      "Compete in timed DSA challenges, climb the leaderboard, and sharpen your problem-solving skills with curated algorithm puzzles crafted for campus coders. Master data structures under pressure and prove your mettle against the best minds on campus.",
    content: (
      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-2xl">
        <img
          src={dsaImg}
          className="h-full w-full object-cover"
          alt="DSA Challenge"
        />
      </div>
    ),
  },
  {
    title: "Chess Challenge",
    description:
      "Play live chess against campus rivals. Rated matches, puzzles, and opening tutorials — elevate your game from dorm room to tournament champion. Outsmart every move and rise through the campus chess rankings with strategy and precision.",
    content: (
      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-2xl">
        <img
          src={chessImg}
          className="h-full w-full object-cover"
          alt="Chess Challenge"
        />
      </div>
    ),
  },
  {
    title: "UNO Challenge",
    description:
      "Fast-paced UNO with campus-themed wild cards. Create rooms, invite friends, and see who survives the draw-four cascade. Bragging rights await the last card standing. Wild cards, wild fun — only on campus_mytra.",
    content: (
      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-2xl">
        <img
          src={unoImg}
          className="h-full w-full object-cover"
          alt="UNO Challenge"
        />
      </div>
    ),
  },
];

export default function ScrollStack() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="bg-[var(--bg,#050508)]"
    >
      {/* Section header */}
      <div className="px-4 pt-[100px] pb-16 text-center">
        <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--accent3,#a855f7)] mb-4">
          What's Inside
        </p>
        <h2 className="text-[clamp(2rem,5vw,4rem)] font-extrabold tracking-[-0.03em] text-[var(--text,#e8e8e8)] m-0">
          Challenges Await
        </h2>
        <p className="mt-4 text-[17px] text-[var(--text-muted,#888899)] max-w-[500px] mx-auto leading-[1.7]">
          Three arenas. Infinite rivalry. All on one campus app.
        </p>
      </div>

      {/* Full-width Sticky Scroll */}
      <div className="w-full">
        <StickyScroll content={content} />
      </div>
    </section>
  );
}
