import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const Testimonials = () => {
  return (
    <div className="page-wrapper">
      <div className="page-hero" style={{ minHeight: '40vh' }}>
        <div className="page-hero-content animate-slide-up">
          <span className="page-badge glass">Client Stories</span>
          <h1>What Our Clients <span className="text-gradient">Say</span></h1>
          <p>Real stories from enterprise clients who trust Computer Port for their critical IT infrastructure.</p>
        </div>
      </div>

      <div className="page-section">

        {/* Featured Testimonial */}
        <div className="testimonial-featured glass-panel">
          <div className="testimonial-video-wrapper">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/6LCJuZZika0?start=22"
              title="Testimonial – Mr. Gururajan – Vice President (Redington)"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ borderRadius: '0.5rem' }}
            ></iframe>
          </div>
          <div className="testimonial-info">
            <div className="testimonial-quote-icon">"</div>
            <p className="testimonial-quote">
              Computer Port delivered exactly what we needed — a robust, scalable, and secure IT infrastructure
              that supports our enterprise operations with zero compromise on reliability or performance.
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">GR</div>
              <div>
                <p className="author-name">Mr. Gururajan</p>
                <p className="author-role">Vice President, Redington</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="stats-row">
          <div className="stat-card glass-panel">
            <h3 className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: '800' }}>8+</h3>
            <p>oVirt Professional Integrators</p>
          </div>
          <div className="stat-card glass-panel">
            <h3 className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: '800' }}>100%</h3>
            <p>SLA-Driven Delivery</p>
          </div>
          <div className="stat-card glass-panel">
            <h3 className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: '800' }}>Enterprise</h3>
            <p>SMB & Large Scale Ready</p>
          </div>
        </div>

      </div>

      <div className="cta-banner glass-panel">
        <div className="cta-content">
          <h2>Ready to Be Our <span className="text-gradient">Next Success Story?</span></h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
            Talk to our IT experts and start your infrastructure journey today.
          </p>
          <Link to="/contact">
            <button className="btn-primary">Request a Consultation</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
