import React from 'react'
import { Link } from 'react-router-dom'
import './Pages.css'

const securityServices = [
  {
    title: "2FA / OTP Solutions",
    icon: "🔐",
    color: "#8b5cf6",
    desc: "Strengthen access security with Two-Factor Authentication (2FA) and One-Time Password (OTP) solutions. Prevent unauthorized access to critical business systems and remote desktops.",
    link: "/contact"
  },
  {
    title: "Identity & Access Management (IAM)",
    icon: "🪪",
    color: "#3b82f6",
    desc: "Centralize and control who has access to what. Our IAM implementations provide role-based access control (RBAC), Single Sign-On (SSO), and privileged user management.",
    link: "/contact"
  },
  {
    title: "Vulnerability Assessment (VAM)",
    icon: "🛡️",
    color: "#ef4444",
    desc: "Proactively identify and remediate security gaps before attackers can exploit them. Our assessments cover network, endpoint, application, and cloud environments.",
    link: "/contact"
  },
  {
    title: "Remote Monitoring & Management (RMM)",
    icon: "📡",
    color: "#10b981",
    desc: "24/7 automated monitoring, patch management, and threat detection across all endpoints. We ensure your IT infrastructure is always healthy and compliant.",
    link: "/contact"
  },
  {
    title: "Backup & Disaster Recovery",
    icon: "💾",
    color: "#f59e0b",
    desc: "Partner-backed backup solutions powered by Nakivo. We implement automated, tested backup schedules with fast recovery point objectives (RPO) and recovery time (RTO).",
    link: "/contact"
  }
]

const Security = () => {
  return (
    <div className="page-wrapper">
      {/* Hero */}
      <div className="page-hero" style={{ background: 'radial-gradient(circle at top left, rgba(139,92,246,0.15) 0%, transparent 50%), radial-gradient(circle at bottom right, rgba(239,68,68,0.1) 0%, transparent 50%)' }}>
        <div className="page-hero-content animate-slide-up">
          <span className="page-badge glass" style={{ color: '#8b5cf6', borderColor: 'rgba(139,92,246,0.4)' }}>
            Security & Compliance
          </span>
          <h1>Security-First, <br /><span className="text-gradient-accent">Compliance-Ready</span></h1>
          <p>
            We design and deploy Zero-Trust security architectures that protect your business
            from modern threats — without slowing down productivity. Proven experience supporting
            SMBs and Enterprises with SLA-driven, compliance-aware delivery.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
            <Link to="/contact">
              <button className="btn-primary">Get a Security Audit</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="page-section">
        <div className="why-grid">
          <div className="why-card glass-panel">
            <h3>✅ Reduce Downtime & Risk</h3>
            <p>Proactive RMM monitoring detects threats and failures before they impact your business operations.</p>
          </div>
          <div className="why-card glass-panel">
            <h3>🔒 Compliance Ready</h3>
            <p>Our designs align with industry compliance standards. Security-first architecture built for audit readiness.</p>
          </div>
          <div className="why-card glass-panel">
            <h3>🌐 Secure Hybrid Work</h3>
            <p>Enable remote and hybrid work confidently with Zero-Trust policies and verified access controls.</p>
          </div>
          <div className="why-card glass-panel">
            <h3>📞 SLA-Driven Support</h3>
            <p>Dedicated support teams backed by full SLAs. You're never alone in a security incident.</p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="page-section">
        <h2 className="section-title">Security <span className="text-gradient-accent">Services</span></h2>
        <p className="section-subtitle">
          A comprehensive portfolio of services to protect every layer of your IT environment.
        </p>
        <div className="services-page-grid">
          {securityServices.map((s, i) => (
            <div key={i} className="service-detail-card glass-panel" style={{ borderTop: `3px solid ${s.color}` }}>
              <div className="service-icon-lg">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <Link to={s.link} style={{ color: s.color }} className="card-link">
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="cta-banner glass-panel">
        <div className="cta-content">
          <h2>Ready to Strengthen <span className="text-gradient">Your Security Posture?</span></h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
            Talk to our experts and design the right IT strategy for your business. <br />
            📞 <strong>+91 91009 61982</strong> &nbsp;|&nbsp; 📧 <strong>info@computerport.in</strong>
          </p>
          <Link to="/contact">
            <button className="btn-primary">Book an Appointment</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Security
