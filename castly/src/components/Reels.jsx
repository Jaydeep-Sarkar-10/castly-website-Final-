import React from 'react';
import './Reels.css';

export default function Reels() {
  const reels = [
    {
      id: 1,
      title: "Brand Breakdown: Nike",
      category: "Educational",
      thumbnail: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      title: "Cinematic Edit: Automotive",
      category: "Lifestyle",
      thumbnail: "https://images.unsplash.com/photo-1503376712351-1f50a8b9e6dc?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      title: "Creator Hook Hook Strategy",
      category: "Strategy",
      thumbnail: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      title: "Storytelling Framework",
      category: "Educational",
      thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=600&q=80",
    }
  ];

  return (
    <section className="reels-section" id="reels">
      <div className="reels-header reveal">
        <span className="section-label">Built for the scroll</span>
        <h2 className="section-title">Vertical <br/> Format</h2>
      </div>

      <div className="reels-scroll-container">
        <div className="reels-gallery">
          {reels.map((reel) => (
            <div key={reel.id} className="reel-item" data-cursor="play">
              <div className="reel-media">
                <img src={reel.thumbnail} alt={reel.title} />
                <div className="reel-overlay">
                  <div className="reel-play-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="reel-info">
                <h4 className="reel-title">{reel.title}</h4>
                <span className="reel-category">{reel.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
