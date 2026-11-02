import React from 'react';
import './Reels.css';

export default function Reels({ onPlayVideo }) {
  const reels = [
    {
      id: 1,
      title: "The 3-Second Hook Rule",
      platform: "Instagram Reel",
      category: "Retention Psychology",
      duration: "0:28",
      thumbnail: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://vjs.zencdn.net/v/oceans.mp4",
      desc: "Stop-the-scroll psychological hook designed to boost watch-time above 85%.",
      isVertical: true
    },
    {
      id: 2,
      title: "Kinetic Typography Breakdown",
      platform: "TikTok",
      category: "Motion Graphics & VFX",
      duration: "0:34",
      thumbnail: "https://images.unsplash.com/photo-1503376712351-1f50a8b9e6dc?auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
      desc: "Multi-layered kinetic typography with synchronized sound effects and 3D camera tracker.",
      isVertical: true
    },
    {
      id: 3,
      title: "Creator Authority Engine",
      platform: "YouTube Short",
      category: "Personal Brand",
      duration: "0:45",
      thumbnail: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://vjs.zencdn.net/v/oceans.mp4",
      desc: "High-credibility talking head edit with punch-ins, b-roll overlays, and graphic highlights.",
      isVertical: true
    },
    {
      id: 4,
      title: "Story Loop Framework",
      platform: "Instagram Reel",
      category: "Scriptwriting",
      duration: "0:31",
      thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
      desc: "Infinite loop narrative structure that prompts viewers to rewatch seamlessly.",
      isVertical: true
    },
    {
      id: 5,
      title: "High-ROAS Product Drop",
      platform: "TikTok Ad",
      category: "Paid Advertising",
      duration: "0:22",
      thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://vjs.zencdn.net/v/oceans.mp4",
      desc: "Direct-response e-commerce hook with fast rhythmic cuts and clear call to action.",
      isVertical: true
    },
    {
      id: 6,
      title: "Real Estate Micro-Tour",
      platform: "YouTube Short",
      category: "Cinematic Showcase",
      duration: "0:38",
      thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
      desc: "Architectural vertical showcase with speed ramps and ambient audio mastering.",
      isVertical: true
    }
  ];

  return (
    <section className="reels-section" id="reels">
      <div className="reels-header reveal">
        <span className="section-label">Short-Form Mastery</span>
        <h2 className="section-title">Reels, Shorts & TikTok</h2>
        <p className="reels-subtitle">
          Built for the scroll. Click any vertical reel to watch our high-retention pacing, sound design, and motion graphics in action.
        </p>
      </div>

      <div className="reels-scroll-container">
        <div className="reels-gallery">
          {reels.map((reel) => (
            <div 
              key={reel.id} 
              className="reel-item" 
              data-cursor="play"
              onClick={() => onPlayVideo && onPlayVideo(reel)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onPlayVideo && onPlayVideo(reel);
                }
              }}
            >
              <div className="reel-media">
                <img src={reel.thumbnail} alt={reel.title} />
                <div className="reel-top-badges">
                  <span className="reel-platform-tag">{reel.platform}</span>
                  <span className="reel-duration">{reel.duration}</span>
                </div>
                <div className="reel-overlay">
                  <div className="reel-play-btn">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
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
