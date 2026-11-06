import React, { useState } from 'react';
import { TubelightNavbar } from './components/TubelightNavbar';
import { Home, Briefcase, PlaySquare, FileText, Sparkles, Mail } from 'lucide-react';
import Hero from './components/Hero';
import SelectedWork from './components/SelectedWork';
import Reels from './components/Reels';
import Services from './components/Services';
import HowWeThink from './components/HowWeThink';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import VideoModal from './components/VideoModal';
import { useScrollReveal, useScrollProgress } from './hooks/useScrollReveal';

import './App.css';

function App() {
  useScrollReveal();
  const scrollProgress = useScrollProgress();
  const [activeVideo, setActiveVideo] = useState(null);

  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'Work', url: '#work', icon: Briefcase },
    { name: 'Reels', url: '#reels', icon: PlaySquare },
    { name: 'Services', url: '#services', icon: FileText },
    { name: 'About', url: '#about', icon: Sparkles },
    { name: 'Contact', url: '#contact', icon: Mail }
  ];

  const marqueeItems = (
    <>
      <span>STORIES WORTH WATCHING</span>
      <span className="dot">•</span>
      <span>ATTENTION IS EARNED</span>
      <span className="dot">•</span>
      <span>HIGH-RETENTION EDITING</span>
      <span className="dot">•</span>
      <span>MOTION GRAPHICS & VFX</span>
      <span className="dot">•</span>
      <span>SHORT-FORM MASTERY</span>
      <span className="dot">•</span>
      <span>PSYCHOLOGY & STRATEGY</span>
      <span className="dot">•</span>
    </>
  );

  const handleOpenShowreel = () => {
    setActiveVideo({
      title: "Castly.Media Official Showreel",
      category: "Cinematic Showreel",
      desc: "Our best editing, sound design, motion graphics, and visual storytelling.",
      videoUrl: "/videos/Watchshowreel.mp4",
      isVertical: true
    });
  };

  return (
    <>
      <div id="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
      <Cursor />
      <TubelightNavbar items={navItems} />
      
      <main>
        <Hero onOpenShowreel={handleOpenShowreel} />
        
        {/* Marquee/Statement Section */}
        <section className="marquee-section reveal">
          <div className="marquee-container">
            <div className="marquee-content">
              {marqueeItems}
              {marqueeItems}
            </div>
          </div>
        </section>

        <SelectedWork onPlayVideo={setActiveVideo} />
        <Reels onPlayVideo={setActiveVideo} />
        <Services />
        <HowWeThink />
        <Contact />
      </main>

      <Footer />

      {/* Playable Video Lightbox Modal */}
      {activeVideo && (
        <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </>
  );
}

export default App;
