import React, { useState } from 'react';
import ButtonWithIcon from '@/components/ui/button-witn-icon';
import './Contact.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brand: '',
    website: '',
    service: '',
    details: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header reveal">
          <span className="section-label">Get In Touch</span>
          <h2 className="contact-title">Have a project in mind?</h2>
          <p className="contact-subtitle">
            Let's turn your ideas into high-quality video stories that capture attention and drive growth.
          </p>
        </div>

        <div className="contact-content">
          {submitted ? (
            <div className="contact-success reveal">
              <div className="success-icon">✓</div>
              <h3 className="success-title">Message Received</h3>
              <p className="success-desc">
                Thank you, {formData.name || 'there'}! We're excited to learn more about your brand. Our creative team will review your inquiry and get back to you within 24 hours.
              </p>
              <button 
                type="button" 
                className="btn-secondary" 
                onClick={() => setSubmitted(false)}
                style={{ marginTop: '24px' }}
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form className="contact-form reveal" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input 
                    id="name"
                    name="name"
                    type="text" 
                    placeholder="Your full name" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input 
                    id="email"
                    name="email"
                    type="email" 
                    placeholder="name@company.com" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="brand">Brand or Business Name</label>
                  <input 
                    id="brand"
                    name="brand"
                    type="text" 
                    placeholder="Your brand / company" 
                    value={formData.brand}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="website">Website or Social Profile</label>
                  <input 
                    id="website"
                    name="website"
                    type="text" 
                    placeholder="@handle or yourwebsite.com" 
                    value={formData.website}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Required *</label>
                <select 
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="" disabled>Select service needed</option>
                  <option value="reels-shorts-tiktok">Instagram Reels, Shorts & TikTok</option>
                  <option value="video-editing">Short-form Video Editing</option>
                  <option value="motion-graphics">Motion Graphics & Visual Effects</option>
                  <option value="scriptwriting">Scriptwriting & Storytelling</option>
                  <option value="content-strategy">Content Strategy & Creative Direction</option>
                  <option value="paid-ads">Paid Advertising Content</option>
                  <option value="full-production">Full Content Production Retainer</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="details">Project Details *</label>
                <textarea 
                  id="details"
                  name="details"
                  placeholder="Tell us about your project, content goals, current posting volume, and target timeline..." 
                  rows="4" 
                  required
                  value={formData.details}
                  onChange={handleChange}
                ></textarea>
              </div>

              <ButtonWithIcon 
                type="submit" 
                text="Let's Collaborate" 
                data-cursor="open" 
              />
            </form>
          )}

          <div className="contact-sidebar reveal">
            <div className="sidebar-block">
              <h3>Direct Email</h3>
              <a href="mailto:hello@castly.media" className="social-link" data-cursor="open">
                hello@castly.media
              </a>
            </div>

            <div className="sidebar-block">
              <h3>Instagram</h3>
              <a href="https://www.instagram.com/castly.media" target="_blank" rel="noreferrer" className="social-link" data-cursor="open">
                @castly.media &rarr;
              </a>
            </div>

            <div className="sidebar-block">
              <h3>Creative Philosophy</h3>
              <p className="sidebar-quote">
                “Attention is earned.<br/>Stories make it stay.”
              </p>
            </div>

            <div className="sidebar-block">
              <h3>Location & Collaboration</h3>
              <p>Remote / Worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
