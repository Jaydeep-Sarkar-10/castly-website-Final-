import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">CASTLY<span>.MEDIA</span></div>
          <p className="footer-tagline">Stories worth watching.</p>
          <p className="footer-philosophy">Attention is earned. Stories make it stay.</p>
          <p className="footer-copy">&copy; {new Date().getFullYear()} Castly.Media. All rights reserved.</p>
        </div>
        <div className="footer-links">
          <a href="#home" data-cursor="open">Home</a>
          <a href="#about" data-cursor="open">About</a>
          <a href="#work" data-cursor="open">Work</a>
          <a href="#reels" data-cursor="open">Reels</a>
          <a href="#services" data-cursor="open">Services</a>
          <a href="https://www.instagram.com/castly.media" target="_blank" rel="noreferrer" data-cursor="open">Instagram</a>
          <a href="#contact" data-cursor="open">Contact</a>
        </div>
      </div>
    </footer>
  );
}
