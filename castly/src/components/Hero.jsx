import React from 'react';
import TextType from './TextType';
import './Hero.css';

export default function Hero({ onOpenShowreel }) {
  return (
    <section className="hero-section" id="home">
      <div className="hero-bg">
        <video 
          className="hero-video-loop"
          autoPlay 
          loop 
          muted 
          playsInline
          poster="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1920&q=80"
        >
          <source src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
        </video>
        <div className="hero-noise"></div>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-badge reveal">
          <span className="hero-badge-dot"></span>
          <span>CREATIVE VIDEO PRODUCTION & DIGITAL STORYTELLING</span>
        </div>

        <h1 className="hero-title reveal">
          <TextType 
            texts={[
              "WE MAKE CONTENT\n  IMPOSSIBLE\nTO IGNORE.",
              "STORIES PEOPLE\n  CHOOSE\nTO WATCH.",
              "ATTENTION IS EARNED.\n  STORIES\nMAKE IT STAY."
            ]}
            typingSpeed={110}
            pauseDuration={1800}
            showCursor
            cursorCharacter="_"
            deletingSpeed={70}
            variableSpeedEnabled={false}
            cursorBlinkDuration={0.5}
          />
        </h1>

        <div className="hero-bottom reveal">
          <p className="hero-desc">
            We're a creative team turning ideas, brands, and stories into high-quality video content that captures attention and drives growth.
          </p>
          
          <div className="hero-actions">
            <a href="#contact" className="btn-primary" data-cursor="open">Let's Work Together</a>
            <a href="#work" className="btn-secondary" data-cursor="view">Explore Our Work</a>
            <button 
              type="button" 
              onClick={onOpenShowreel} 
              className="btn-showreel" 
              data-cursor="play"
              title="Watch Showreel"
            >
              <span className="showreel-icon">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </span>
              <span>Watch Showreel</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
