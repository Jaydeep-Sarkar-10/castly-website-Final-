import React from 'react';
import ButtonWithIcon from '@/components/ui/button-witn-icon';
import { Calendar, Video, Clock } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const CALENDAR_LINK = "https://calendar.app.google/AnyV5UNNss7qAsuD6";

  const benefits = [
    {
      num: "01",
      title: "Story & Strategy Breakdown",
      desc: "Analyze your brand, audience psychology, and content hooks that command attention."
    },
    {
      num: "02",
      title: "Content Production Roadmap",
      desc: "Custom high-retention schedule tailored for Instagram Reels, YouTube Shorts, and TikTok."
    },
    {
      num: "03",
      title: "Direct Creative Partnership",
      desc: "Retainer options, turnarounds, and creative direction to scale your video presence."
    }
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header reveal">
          <span className="section-label">Book A Call &bull; Let's Collaborate</span>
          <h2 className="contact-title">Have a project in mind?</h2>
          <p className="contact-subtitle">
            Skip the back-and-forth emails. Pick a time on our calendar that fits your schedule for a direct creative strategy consultation.
          </p>
        </div>

        <div className="contact-content">
          <div className="booking-card reveal">
            <div className="booking-card-top">
              <div className="booking-tag">
                <span className="booking-dot"></span>
                <span>Direct 1-on-1 Creative Session</span>
              </div>
              <div className="booking-meta-badges">
                <span className="booking-badge">
                  <Clock size={13} />
                  <span>15–30 Min</span>
                </span>
                <span className="booking-badge">
                  <Video size={13} />
                  <span>Google Meet</span>
                </span>
                <span className="booking-badge">
                  <Calendar size={13} />
                  <span>Instant Booking</span>
                </span>
              </div>
            </div>

            <div className="booking-card-body">
              <h3 className="booking-heading">Let's Build Something Impossible To Ignore</h3>
              <p className="booking-subheading">
                Whether you're looking for high-retention short-form editing, kinetic motion graphics, or a complete monthly content engine, let's connect and bring your vision to life.
              </p>

              <div className="booking-points">
                {benefits.map((b, idx) => (
                  <div key={idx} className="booking-point">
                    <span className="point-num">{b.num}</span>
                    <div className="point-text">
                      <h4>{b.title}</h4>
                      <p>{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="booking-card-footer">
              <ButtonWithIcon 
                href={CALENDAR_LINK}
                text="Let's Collaborate"
                data-cursor="open"
              />
              <span className="booking-hint">
                Opens directly in Google Calendar Appointments
              </span>
            </div>
          </div>

          <div className="contact-sidebar reveal">
            <div className="sidebar-block">
              <h3>Schedule Call</h3>
              <a 
                href={CALENDAR_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link" 
                data-cursor="open"
              >
                Google Calendar Link &rarr;
              </a>
            </div>

            <div className="sidebar-block">
              <h3>Direct Email</h3>
              <a 
                href="mailto:heycastly@gmail.com" 
                className="social-link" 
                data-cursor="open"
              >
                heycastly@gmail.com
              </a>
            </div>

            <div className="sidebar-block">
              <h3>Direct Phone / WhatsApp</h3>
              <div className="phone-links">
                <a 
                  href="tel:+917717570115" 
                  className="social-link" 
                  data-cursor="open"
                >
                  +91 77175 70115
                </a>
                <a 
                  href="tel:+918284995524" 
                  className="social-link" 
                  data-cursor="open"
                >
                  +91 82849 95524
                </a>
              </div>
            </div>

            <div className="sidebar-block">
              <h3>Instagram</h3>
              <a 
                href="https://www.instagram.com/castly.media" 
                target="_blank" 
                rel="noreferrer" 
                className="social-link" 
                data-cursor="open"
              >
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
