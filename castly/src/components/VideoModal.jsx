import React, { useEffect, useRef } from 'react';
import './VideoModal.css';

export default function VideoModal({ video, onClose }) {
  const videoRef = useRef(null);

  // Handle escape key and lock body scroll
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

  // Pause all background videos while modal is open to free GPU decoder pipelines
  useEffect(() => {
    if (!video) return;

    // Find all other video elements on the page (Hero, SelectedWork, Reels)
    const otherVideos = Array.from(document.querySelectorAll('video')).filter(
      (v) => v !== videoRef.current
    );

    // Track which background videos were actively playing so we can restore them on close
    const pausedByModal = [];
    otherVideos.forEach((v) => {
      if (!v.paused) {
        pausedByModal.push(v);
        try {
          v.pause();
        } catch (_) {}
      }
    });

    return () => {
      // Resume only the videos that were playing before
      pausedByModal.forEach((v) => {
        try {
          v.play().catch(() => {});
        } catch (_) {}
      });
    };
  }, [video]);

  // Handle modal video playback smoothly
  useEffect(() => {
    if (!video || !videoRef.current) return;

    const currentVid = videoRef.current;
    const playPromise = currentVid.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Fall back to muted autoplay if browser autoplay policy restricts unmuted audio
        if (currentVid) {
          currentVid.muted = true;
          currentVid.play().catch(() => {});
        }
      });
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
