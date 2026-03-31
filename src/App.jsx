import { useState } from 'react';
import './index.css';

import CursorSpark from './components/CursorSpark';
import StairsPreloader from './components/StairsPreloader';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ScrollStack from './components/ScrollStack_final';
// import ScreenshotsSection from './components/ScreenshotsSection';
import BetaSection from './components/BetaSection';
import DownloadSection from './components/DownloadSection';
import FeedbackSection from './components/FeedbackSection';
import Footer from './components/Footer';
import Screenshorts from './components/Screenshorts';

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <>
      {/* Custom cursor & spark effect */}
      <CursorSpark />

      {/* Stairs preloader — unmounts after animation */}
      {!preloaderDone && (
        <StairsPreloader onDone={() => setPreloaderDone(true)} />
      )}

      {/* Main page content */}
      <div
        style={{
          opacity: preloaderDone ? 1 : 0,
          transition: 'opacity 0.5s ease',
          minHeight: '100svh',
        }}
      >
        <Navbar />
        <HeroSection />
        <Screenshorts />
        <ScrollStack />
        {/* <ScreenshotsSection /> */}

        <BetaSection />
        <DownloadSection />
        <FeedbackSection />
        <Footer />
      </div>
    </>
  );
}
