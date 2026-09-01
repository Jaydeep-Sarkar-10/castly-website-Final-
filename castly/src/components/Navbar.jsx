import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        CASTLY<span>.</span>
      </div>
      <div className="nav-links">
        <a href="#work">Work</a>
        <a href="#reels">Reels</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
      </div>
      <div className="nav-right">
        <a href="#contact" className="btn-nav" data-cursor="open">Start a Project</a>
      </div>
    </nav>
  );
}
