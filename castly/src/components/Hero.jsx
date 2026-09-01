import React from 'react';
import TextType from './TextType';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-bg">
        {/* Placeholder for actual reel video */}
        <div className="hero-noise"></div>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title reveal">
          <TextType 
            texts={[
              "TURN\n  ATTENTION\nINTO LEADS.", 
              "MAKE THEM\n  STOP.\nMAKE THEM\n  STAY."
            ]}
            typingSpeed={120}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
            deletingSpeed={80}
            variableSpeedEnabled={false}
            cursorBlinkDuration={0.5}
          />
        </h1>
        <div className="hero-bottom reveal">
          <p className="hero-desc">
            We craft cinematic, high-retention editing and strategic brand breakdown content that makes them stop and stay.
          </p>
          <a href="#work" className="btn-primary" data-cursor="view">See Our Work</a>
        </div>
      </div>
    </section>
  );
}
