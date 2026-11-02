import React from 'react';
import './HowWeThink.css';

export default function HowWeThink() {
  const pillars = [
    {
      num: "01",
      title: "Storytelling",
      desc: "Turning ordinary ideas into compelling, emotionally resonant stories people actually choose to watch."
    },
    {
      num: "02",
      title: "Psychology",
      desc: "Understanding algorithmic triggers and human psychology: what makes thumbs freeze and viewers stay hooked."
    },
    {
      num: "03",
      title: "Creative Editing",
      desc: "Deploying motion graphics, seamless pacing, sound design, and visual effects to amplify the narrative."
    },
    {
      num: "04",
      title: "Strategy",
      desc: "Architecting every video around your target demographic, business objectives, and unique brand voice."
    },
    {
      num: "05",
      title: "Consistency",
      desc: "Establishing a dependable, high-quality production cadence so your brand stays top-of-mind without burnout."
    }
  ];

  const process = [
    { step: "HOOK", desc: "Why they stop scrolling." },
    { step: "STORY", desc: "Why they care." },
    { step: "RETENTION", desc: "Why they keep watching." },
    { step: "ACTION", desc: "What they do next." }
  ];

  const collaborators = [
    "Content Creators",
    "Personal Brands",
    "Business Owners",
    "Startups",
    "E-commerce Brands",
    "Entrepreneurs",
    "Coaches & Consultants",
    "Real Estate Professionals",
    "Growing Companies"
  ];

  return (
    <section className="think-section" id="about">
      <div className="think-container">
        
        {/* About Intro */}
        <div className="think-header reveal">
          <span className="section-label">Who We Are</span>
          <h2 className="section-title">We Don't Just Create Content.<br/>We Create Stories People Choose To Watch.</h2>
          <p className="think-desc">
            Castly.Media is a creative team passionate about storytelling, video production, and digital content. We collaborate with ambitious brands, founders, and creators to turn raw ideas into high-impact video content that captures attention, builds connections, and drives meaningful growth.
          </p>
          <div className="think-philosophy">
            <span className="quote-mark">“</span>
            <span>Attention is earned. Stories make it stay.</span>
          </div>
        </div>

        {/* What Makes Us Different - 5 Pillars */}
        <div className="difference-block reveal">
          <div className="difference-header">
            <span className="section-label">What Makes Castly Different</span>
            <h3 className="sub-section-title">Beyond Generic Video Editing</h3>
            <p className="difference-subtext">
              We don't believe in creating videos just for the sake of posting. Every piece of content is engineered with intention, psychology, and creative craft.
            </p>
          </div>

          <div className="pillars-grid">
            {pillars.map((item, idx) => (
              <div key={idx} className="pillar-card">
                <span className="pillar-num">{item.num}</span>
                <h4 className="pillar-title">{item.title}</h4>
                <p className="pillar-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Psychological Process Flow */}
        <div className="process-wrapper reveal">
          <span className="section-label">The Attention Framework</span>
          <div className="think-process">
            {process.map((p, idx) => (
              <React.Fragment key={idx}>
                <div className="process-item">
                  <h3 className="process-step">{p.step}</h3>
                  <p className="process-desc">{p.desc}</p>
                </div>
                {idx < process.length - 1 && (
                  <div className="process-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Who We Work With */}
        <div className="collaborators-block reveal">
          <span className="section-label">Who We Work With</span>
          <h3 className="sub-section-title">Built For Ambitious Brands & Creators</h3>
          <div className="collaborators-tags">
            {collaborators.map((name, idx) => (
              <span key={idx} className="collaborator-tag">
                {name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
