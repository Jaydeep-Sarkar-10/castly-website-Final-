import React from 'react';
import './HowWeThink.css';

export default function HowWeThink() {
  const process = [
    { step: "HOOK", desc: "Why they stop scrolling." },
    { step: "STORY", desc: "Why they care." },
    { step: "RETENTION", desc: "Why they keep watching." },
    { step: "ACTION", desc: "What they do next." }
  ];

  return (
    <section className="think-section" id="about">
      <div className="think-container">
        <div className="think-header reveal">
          <span className="section-label">How We Think</span>
          <h2 className="section-title">Beyond Editing</h2>
          <p className="think-desc">
            We don't just cut clips. We architect attention. Every frame is optimized for human psychology to maximize retention and conversion.
          </p>
        </div>

        <div className="think-process">
          {process.map((p, idx) => (
            <React.Fragment key={idx}>
              <div className="process-item reveal">
                <h3 className="process-step">{p.step}</h3>
                <p className="process-desc">{p.desc}</p>
              </div>
              {idx < process.length - 1 && (
                <div className="process-arrow reveal">
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
    </section>
  );
}
