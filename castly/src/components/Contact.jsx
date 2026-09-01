import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header reveal">
          <h2 className="contact-title">Have a project in mind?</h2>
          <p className="contact-subtitle">Let's create something that makes them stop and stay.</p>
        </div>

        <div className="contact-content">
          <form className="contact-form reveal">
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="your@email.com" required />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Brand / Company</label>
                <input type="text" placeholder="Brand name" />
              </div>
              <div className="form-group">
                <label>Project Type</label>
                <input type="text" placeholder="e.g. Cinematic Edit, Brand Breakdown" />
              </div>
            </div>

            <div className="form-group">
              <label>Budget</label>
              <select defaultValue="">
                <option value="" disabled>Select a range</option>
                <option value="<5k">Under $5k</option>
                <option value="5k-10k">$5k - $10k</option>
                <option value="10k-25k">$10k - $25k</option>
                <option value="25k+">$25k+</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Tell us about your project..." rows="4" required></textarea>
            </div>

            <button type="submit" className="btn-submit" data-cursor="open">
              START A PROJECT &rarr;
            </button>
          </form>

          <div className="contact-sidebar reveal">
            <div className="sidebar-block">
              <h3>Connect</h3>
              <a href="https://www.instagram.com/castly.media" target="_blank" rel="noreferrer" className="social-link" data-cursor="open">
                Instagram
              </a>
            </div>
            <div className="sidebar-block">
              <h3>Location</h3>
              <p>Remote / Worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
