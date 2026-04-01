import React from 'react'
import { Link } from 'react-router-dom'
import './Pages.css'

const services = [
  {
    title: "Virtualization Solutions",
    icon: "🖥️",
    desc: "Enterprise-grade server virtualization using Proxmox VE, oVirt, and VMware. We design high-availability clusters that reduce hardware costs and eliminate downtime.",
    link: "/compare"
  },
  {
    title: "Proxmox Migration",
    icon: "🔄",
    desc: "As Proxmox Silver Partners in India, we specialize in seamless migrations from VMware, Hyper-V, and Nutanix to Proxmox VE — saving you up to 70% in licensing fees.",
    link: "/compare"
  },
  {
    title: "Private / Hybrid Cloud",
    icon: "☁️",
    desc: "All types of cloud solutions — Public, Private, and Hybrid. We design, deploy, and manage modern cloud environments tailored to your on-premise and remote work requirements.",
    link: "/contact"
  },
  {
    title: "Hyper Converged Infrastructure (HCI)",
    icon: "⚡",
    desc: "Combine compute, storage, and networking into a single unified system. Our HCI implementations eliminate the complexity of traditional 3-tier architectures.",
    link: "/contact"
  }
]

const CloudVirt = () => {
  return (
    <div className="page-wrapper">
      {/* Hero Banner */}
      <div className="page-hero">
        <div className="page-hero-gradient" />
        <div className="page-hero-content animate-slide-up">
          <span className="page-badge glass">Cloud & Virtualization</span>
          <h1>Modern Infrastructure <br /><span className="text-gradient">Without Vendor Lock-in</span></h1>
          <p>
            Computer Port helps businesses simplify IT operations, strengthen resilience, and scale
            infrastructure with confidence. We deploy modern IT environments across on-premise,
            cloud, and hybrid models.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
            <Link to="/contact">
              <button className="btn-primary">Request Consultation</button>
            </Link>
            <Link to="/compare">
              <button className="btn-secondary">Proxmox Migration →</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Partner Badges */}
      <div className="partner-strip glass-panel animate-fade-in">
        <div className="partner-item">
          <span className="partner-dot" style={{ background: '#10b981' }}></span>
          <strong>oVirt Partner</strong> — Listed among 8 Professional Integrators of oVirt globally.
        </div>
        <div className="partner-divider"></div>
        <div className="partner-item">
          <span className="partner-dot" style={{ background: '#3b82f6' }}></span>
          <strong>Proxmox Silver Partner</strong> — Official Proxmox Silver Partner in India.
        </div>
        <div className="partner-divider"></div>
        <div className="partner-item">
          <span className="partner-dot" style={{ background: '#8b5cf6' }}></span>
          <strong>Nakivo Partner</strong> — Certified reseller of Nakivo Backup Solutions.
        </div>
      </div>

      {/* Services Grid */}
      <div className="page-section">
        <h2 className="section-title">Cloud & Virtualisation <span className="text-gradient">Services</span></h2>
        <p className="section-subtitle">End-to-end infrastructure design, deployment, and managed services.</p>
        <div className="services-page-grid">
          {services.map((s, i) => (
            <div key={i} className="service-detail-card glass-panel">
              <div className="service-icon-lg">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <Link to={s.link} className="card-link">
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison CTA */}
      <div className="cta-banner glass-panel">
        <div className="cta-content">
          <h2>Compare Hypervisors <span className="text-gradient">Side by Side</span></h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
            Use our interactive dashboards to compare Proxmox with VMware, Hyper-V, and Nutanix.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/compare">
              <button className="btn-primary">Proxmox vs VMware</button>
            </Link>
            <Link to="/compare">
              <button className="btn-secondary">Proxmox vs Hyper-V</button>
            </Link>
            <Link to="/compare">
              <button className="btn-secondary">Proxmox vs Nutanix</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CloudVirt
