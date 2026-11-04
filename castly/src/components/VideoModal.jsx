import React, { useEffect, useRef } from 'react';
import './VideoModal.css';

export default function VideoModal({ video, onClose }) {
  const videoRef = useRef(null);

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

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If browser policy blocks unmuted autoplay, smoothly fall back to muted autoplay
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(() => {});
          }
        });
      }
    }
  }, [video]);

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
            key={video.videoUrl}
            ref={videoRef}
            src={video.videoUrl} 
            controls 
            autoPlay 
            playsInline
            className="video-modal-element"
            preload="auto"
          >
            <source src={video.videoUrl} type="video/mp4" />
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
