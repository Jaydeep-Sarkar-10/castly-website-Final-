import React, { useEffect } from 'react';
import { TubelightNavbar } from './components/TubelightNavbar';
import { Home, Briefcase, PlaySquare, FileText, Mail } from 'lucide-react';
import Hero from './components/Hero';
import SelectedWork from './components/SelectedWork';
import Reels from './components/Reels';
import Services from './components/Services';
import HowWeThink from './components/HowWeThink';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import { useScrollReveal, useScrollProgress } from './hooks/useScrollReveal';

import './App.css';

function App() {
  useScrollReveal();
  const scrollProgress = useScrollProgress();

  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'Work', url: '#work', icon: Briefcase },
    { name: 'Reels', url: '#reels', icon: PlaySquare },
    { name: 'Services', url: '#services', icon: FileText },
    { name: 'Contact', url: '#contact', icon: Mail }
  ];

  const marqueeItems = (
    <>
      <span>CINEMATIC EDITING</span>
      <span className="dot">•</span>
      <span>STRATEGIC CONTENT</span>
      <span className="dot">•</span>
      <span>BRAND BREAKDOWNS</span>
      <span className="dot">•</span>
      <span>ATTENTION ARBITRAGE</span>
      <span className="dot">•</span>
    </>
  );

  return (
    <>
      <div id="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
      <Cursor />
      <TubelightNavbar items={navItems} />
      
      <main>
        <Hero />
        
        {/* Marquee/Statement Section */}
        <section className="marquee-section reveal">
          <div className="marquee-container">
            <div className="marquee-content">
              {marqueeItems}
              {marqueeItems}
            </div>
          </div>
        </section>

        <HowWeThink />
        <SelectedWork />
        <Reels />
        <Services />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
