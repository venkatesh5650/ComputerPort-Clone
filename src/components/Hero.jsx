import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-background-gradient"></div>

      <div className="hero-content animate-slide-up">
        <div className="hero-badge glass">
          <span className="badge-dot"></span>
          Proxmox Silver Partner in India
        </div>

        <h1 className="hero-title">
          Secure, Scalable, &amp; <br />
          <span className="text-gradient">Cost-Effective IT Solutions</span>
        </h1>

        <p className="hero-subtitle">
          Computer Port helps businesses simplify IT operations, strengthen security,
          and scale infrastructure with confidence — across on-premise, cloud, and hybrid models.
        </p>

        <div className="hero-cta-group">
          <Link to="/contact">
            <button className="btn-primary hero-btn">Request a Consultation</button>
          </Link>
          <Link to="/testimonials">
            <button className="btn-secondary hero-btn-alt">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              Client Testimonials
            </button>
          </Link>
        </div>
      </div>

      <div className="hero-graphic glass-panel animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <div className="server-rack">
          <div className="server-blade active">
            <span className="status-indicator"></span> Proxmox Virtualization — Active
          </div>
          <div className="server-blade active">
            <span className="status-indicator"></span> 2FA / Zero-Trust — Enforced
          </div>
          <div className="server-blade">
            <span className="status-indicator"></span> VMware Migration — Scheduled
          </div>
          <div className="server-blade active">
            <span className="status-indicator"></span> Nakivo Backup — Synced
          </div>
        </div>

        <div className="hero-trust-row">
          <div className="trust-badge">
            <span className="trust-dot" style={{ background: '#10b981' }}></span>
            oVirt Partner
          </div>
          <div className="trust-badge">
            <span className="trust-dot" style={{ background: '#3b82f6' }}></span>
            Proxmox Silver
          </div>
          <div className="trust-badge">
            <span className="trust-dot" style={{ background: '#8b5cf6' }}></span>
            Nakivo Reseller
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
