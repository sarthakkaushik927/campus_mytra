import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dsaImg from "../assets/dsa_challenge.jpeg";
import chessImg from "../assets/chess_challenge.jpeg";
import unoImg from "../assets/uno_challenge.jpeg";

gsap.registerPlugin(ScrollTrigger);

const challenges = [
  {
    id: 0,
    title: "DSA Challenge",
    description:
      "Compete in timed DSA challenges, climb the leaderboard, and sharpen your problem-solving skills with curated algorithm puzzles crafted for campus coders. Master data structures under pressure and prove your mettle against the best minds on campus.",
    image: dsaImg,
    gradient: "from-violet-600 to-purple-500",
  },
  {
    id: 1,
    title: "Chess Challenge",
    description:
      "Play live chess against campus rivals. Rated matches, puzzles, and opening tutorials — elevate your game from dorm room to tournament champion. Outsmart every move and rise through the campus chess rankings with strategy and precision.",
    image: chessImg,
    gradient: "from-indigo-600 to-violet-600",
  },
  {
    id: 2,
    title: "UNO Challenge",
    description:
      "Fast-paced UNO with campus-themed wild cards. Create rooms, invite friends, and see who survives the draw-four cascade. Bragging rights await the last card standing. Wild cards, wild fun — only on campus_mytra.",
    image: unoImg,
    gradient: "from-purple-500 to-indigo-600",
  },
];

export default function ScrollStack() {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const mainTriggerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    if (!section || !pin) return;

    // Kill existing trigger
    if (mainTriggerRef.current) {
      mainTriggerRef.current.kill();
    }

    // Create main scroll trigger that pins and tracks progress
    mainTriggerRef.current = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: `+=${window.innerHeight * (challenges.length - 1)}`,
      pin: pin,
      pinSpacing: true,
      scrub: 0.5,
      onUpdate: (self) => {
        const progress = self.progress;
        const newIndex = Math.min(
          Math.floor(progress * challenges.length),
          challenges.length - 1
        );
        setActiveIndex(newIndex);
      },
    });

    return () => {
      if (mainTriggerRef.current) {
        mainTriggerRef.current.kill();
      }
    };
  }, []);

  const activeChallenge = challenges[activeIndex];

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative bg-[#050508]"
    >
      <div ref={pinRef} className="h-screen flex flex-col overflow-hidden bg-[#050508]">
        {/* Section Header */}
        <div className="px-4 pt-16 pb-4 text-center shrink-0">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-500 mb-3"
          >
            What's Inside
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-[-0.03em] text-[#e8e8e8]"
          >
            Challenges Await
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-base text-[#888899] max-w-[450px] mx-auto leading-relaxed"
          >
            Three arenas. Infinite rivalry. All on one campus app.
          </motion.p>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-8 lg:px-16 min-h-0">
          <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <div className="order-2 lg:order-1 relative h-[180px] sm:h-[160px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#e8e8e8] mb-3">
                    {activeChallenge.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#888899] leading-relaxed max-w-md">
                    {activeChallenge.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div
                className={`relative w-full max-w-[320px] lg:max-w-[380px] aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br ${activeChallenge.gradient} p-[2px]`}
              >
                <div className="w-full h-full rounded-2xl overflow-hidden bg-[#0a0a12]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeIndex}
                      src={activeChallenge.image}
                      alt={activeChallenge.title}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 1.1, y: -20 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="pb-8 flex justify-center gap-3 shrink-0">
          {challenges.map((challenge, index) => (
            <button
              key={challenge.id}
              onClick={() => {
                const section = sectionRef.current;
                if (section && mainTriggerRef.current) {
                  const trigger = mainTriggerRef.current;
                  const totalScroll = trigger.end - trigger.start;
                  const targetScroll = trigger.start + (totalScroll * (index / challenges.length));
                  window.scrollTo({ top: targetScroll, behavior: 'smooth' });
                }
              }}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === activeIndex
                  ? "w-8 bg-purple-500"
                  : "w-1.5 bg-[#333] hover:bg-[#555]"
              }`}
            />
          ))}
        </div>

        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1a1a2e]">
          <motion.div
            className="h-full bg-gradient-to-r from-violet-600 to-purple-500"
            initial={{ width: "0%" }}
            animate={{ width: `${((activeIndex + 1) / challenges.length) * 100}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>
      </div>
    </section>
  );
}
