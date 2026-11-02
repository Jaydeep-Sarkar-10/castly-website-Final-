import React, { useState } from 'react';
import './Services.css';

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      num: "01",
      title: "INSTAGRAM REELS, SHORTS & TIKTOK",
      desc: "Platform-native short-form video engineered for algorithmic reach, high retention, and audience growth.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "02",
      title: "SHORT-FORM VIDEO EDITING",
      desc: "Fast-paced, high-retention cuts, seamless transitions, sound design, and color grading that command focus.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "03",
      title: "MOTION GRAPHICS & VISUAL EFFECTS",
      desc: "Custom kinetic typography, 3D elements, paper-tear textures, and motion overlays to enhance storytelling.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "04",
      title: "SCRIPTWRITING & STORYTELLING",
      desc: "Psychology-backed narrative hooks and scripts that transform raw concepts into stories people choose to watch.",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "05",
      title: "CONTENT STRATEGY & CREATIVE DIRECTION",
      desc: "Comprehensive content blueprints tailored to your brand identity, business targets, and target audience.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "06",
      title: "PAID ADVERTISING CONTENT",
      desc: "Direct-response video creatives designed to convert cold viewers into high-intent customers and drive ROAS.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-header reveal">
          <span className="section-label">Capabilities & Services</span>
          <h2 className="section-title">What We Do</h2>
          <p className="services-subtitle">
            We specialize in creating high-quality short-form video content for social media platforms. Our focus is to make content production effortless for our clients while maintaining unparalleled creativity, quality, and consistency.
          </p>
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
                <div className="service-text-group">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.desc}</p>
                </div>
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
