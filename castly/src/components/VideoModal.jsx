import React, { useEffect } from 'react';
import './VideoModal.css';

export default function VideoModal({ video, onClose }) {
  useEffect(() => {
    if (!video) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow || 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [video, onClose]);

  if (!video) return null;

  return (
    <div className="video-modal-backdrop" onClick={onClose}>
      <div 
        className={`video-modal-container ${video.isVertical ? 'vertical' : 'landscape'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="video-modal-close" 
          onClick={onClose} 
          aria-label="Close video"
          data-cursor="open"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="video-modal-player-wrap">
          <video 
            src={video.videoUrl || "https://vjs.zencdn.net/v/oceans.mp4"} 
            controls 
            autoPlay 
            playsInline
            className="video-modal-element"
            poster={video.thumbnail || video.image}
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="video-modal-meta">
          <div className="video-modal-badge">{video.category || "Showcase"}</div>
          <h3 className="video-modal-title">{video.title || video.client || "Castly.Media Showcase"}</h3>
          {video.desc && <p className="video-modal-desc">{video.desc}</p>}
        </div>
      </div>
    </div>
  );
}
