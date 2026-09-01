import React, { useState } from 'react';
import './Services.css';

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    { num: "01", title: "CINEMATIC EDITING", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80" },
    { num: "02", title: "BRAND BREAKDOWNS", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" },
    { num: "03", title: "CONTENT STRATEGY", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" },
    { num: "04", title: "CREATOR CONTENT", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80" },
    { num: "05", title: "BRAND STORYTELLING", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80" }
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-header reveal">
          <span className="section-label">Capabilities</span>
          <h2 className="section-title">What We Do</h2>
        </div>

        <div className="services-list">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-item reveal"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              data-cursor="view"
            >
              <div className="service-content">
                <span className="service-num">{service.num}</span>
                <h3 className="service-title">{service.title}</h3>
              </div>
              
              <div className={`service-image-preview ${hoveredIndex === index ? 'active' : ''}`}>
                <img src={service.image} alt={service.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
