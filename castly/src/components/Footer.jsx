import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">CASTLY<span>.</span></div>
          <p className="footer-copy">&copy; {new Date().getFullYear()} Castly Media.</p>
        </div>
        <div className="footer-links">
          <a href="https://www.instagram.com/castly.media" target="_blank" rel="noreferrer" data-cursor="open">Instagram</a>
          <a href="#contact" data-cursor="open">Contact</a>
        </div>
      </div>
    </footer>
  );
}
