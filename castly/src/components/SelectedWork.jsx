import React from 'react';
import './SelectedWork.css';

export default function SelectedWork({ onPlayVideo }) {
  const projects = [
    {
      id: 1,
      client: "Apex Performance",
      category: "Creative Editing & VFX",
      industry: "E-Commerce / Fitness",
      desc: "Fast-paced visual storytelling featuring sound design, kinetic text, and seamless motion graphics.",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
      videoUrl: "https://vjs.zencdn.net/v/oceans.mp4",
      isVertical: false
    },
    {
      id: 2,
      client: "Protocol Alpha",
      category: "Brand Breakdown & Motion Graphics",
      industry: "Tech & Venture Capital",
      desc: "Distilling complex technical whitepapers into a compelling 60-second visual brand breakdown.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
      isVertical: false
    },
    {
      id: 3,
      client: "The Modern Visionary",
      category: "Personal Brand Storytelling",
      industry: "Creator Economy",
      desc: "Cinematic documentary-style narrative tailored to build high-trust authority and deep viewer connection.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
      videoUrl: "https://vjs.zencdn.net/v/oceans.mp4",
      isVertical: false
    },
    {
      id: 4,
      client: "Monolith Estates",
      category: "Cinematic Direction & Paid Ads",
      industry: "Luxury Real Estate",
      desc: "Visual-first architectural walkthrough with immersive soundscapes designed for high-net-worth buyers.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
      isVertical: false
    }
  ];

  return (
    <section className="work-section" id="work">
      <div className="work-header reveal">
        <span className="section-label">Portfolio & Case Studies</span>
        <h2 className="section-title">Selected Work</h2>
        <p className="work-subtitle">
          Showcasing our best short-form videos, motion graphics, and high-retention storytelling across diverse industries. Click any project to play.
        </p>
      </div>

      <div className="work-grid">
        {projects.map((project, idx) => (
          <div 
            key={project.id} 
            className={`work-item reveal ${idx % 2 === 1 ? 'align-right' : ''}`}
            data-cursor="play"
            onClick={() => onPlayVideo && onPlayVideo(project)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onPlayVideo && onPlayVideo(project);
              }
            }}
          >
            <div className="work-image-wrapper">
              <img src={project.image} alt={project.client} className="work-image" />
              <div className="work-badge-overlay">
                <span className="industry-badge">{project.industry}</span>
              </div>
              <div className="play-indicator">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
            </div>
            <div className="work-info">
              <div className="work-info-main">
                <h3 className="work-client">{project.client}</h3>
                <span className="work-category">{project.category}</span>
              </div>
              <p className="work-desc">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
