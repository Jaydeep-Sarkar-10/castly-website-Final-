import React from 'react';
import './SelectedWork.css';

export default function SelectedWork() {
  const projects = [
    {
      id: 1,
      client: "Project One",
      category: "Cinematic Edit",
      image: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      client: "Project Two",
      category: "Brand Breakdown",
      image: "https://images.unsplash.com/photo-1535016120720-40c746a51d80?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      client: "Project Three",
      category: "Content Strategy",
      image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&w=1200&q=80",
    }
  ];

  return (
    <section className="work-section" id="work">
      <div className="work-header reveal">
        <span className="section-label">Selected Work</span>
        <h2 className="section-title">Case Studies</h2>
      </div>

      <div className="work-grid">
        {projects.map((project, idx) => (
          <div 
            key={project.id} 
            className={`work-item reveal ${idx % 2 === 1 ? 'align-right' : ''}`}
            data-cursor="play"
          >
            <div className="work-image-wrapper">
              <img src={project.image} alt={project.client} className="work-image" />
              <div className="play-indicator">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
            </div>
            <div className="work-info">
              <h3 className="work-client">{project.client}</h3>
              <span className="work-category">{project.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
