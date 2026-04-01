import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const partners = [
  {
    name: "oVirt",
    badge: "Official Integrator",
    color: "#10b981",
    description: "Computer Port is listed among 8 Professional Integrators of oVirt globally. oVirt is an open-source virtualization management platform built around the KVM hypervisor.",
    highlights: ["Professional Integrator status", "KVM-based virtualization", "Open-source enterprise grade", "High availability clusters"]
  },
  {
    name: "Proxmox",
    badge: "Silver Partner — India",
    color: "#3b82f6",
    description: "We are the official Proxmox Silver Partners in India. Proxmox VE is a complete, open-source server management platform for enterprise virtualization.",
    highlights: ["Official Silver Partner India", "Proxmox VE deployments", "Migration from VMware/Hyper-V", "Proxmox Backup Server"]
  },
  {
    name: "Nakivo",
    badge: "Certified Reseller",
    color: "#8b5cf6",
    description: "Computer Port is a certified partner and reseller of Nakivo Backup & Replication — a fast, reliable, and affordable backup solution for VMware, Hyper-V, Nutanix, and more.",
    highlights: ["Certified Reseller", "Disaster Recovery solutions", "Ransomware protection", "Cloud backup & replication"]
  },
  {
    name: "InfraServer",
    badge: "Infrastructure Solutions",
    color: "#f59e0b",
    description: "Through InfraServer, we provide high-performance server and workstation hardware solutions tailored for enterprise infrastructure needs.",
    highlights: ["Custom server builds", "AMD EPYC & Intel Xeon", "Workstation solutions", "Infrastructure consulting"]
  }
];

const Partners = () => {
  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <div className="page-hero-content animate-slide-up">
          <span className="page-badge glass">Trusted Partnerships</span>
          <h1>Our Technology <span className="text-gradient">Partners</span></h1>
          <p>
            Our strategic partnerships with leading open-source and enterprise technology vendors
            allow us to deliver best-in-class infrastructure solutions to our clients.
          </p>
        </div>
      </div>

      <div className="page-section">
        <div className="partners-grid">
          {partners.map((p, i) => (
            <div key={i} className="partner-card glass-panel" style={{ borderTop: `3px solid ${p.color}` }}>
              <div className="partner-card-header">
                <h2 style={{ fontSize: '2rem', fontWeight: '800' }}>{p.name}</h2>
                <span className="partner-card-badge" style={{ background: `${p.color}22`, color: p.color, border: `1px solid ${p.color}44` }}>
                  {p.badge}
                </span>
              </div>
              <p className="partner-card-desc">{p.description}</p>
              <ul className="partner-highlights">
                {p.highlights.map((h, j) => (
                  <li key={j}>
                    <span style={{ color: p.color }}>✓</span> {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Teaser */}
      <div className="cta-banner glass-panel">
        <div className="cta-content">
          <h2>Hear from Our <span className="text-gradient">Clients</span></h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
            Mr. Gururajan, Vice President at Redington, shares his experience working with Computer Port.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/testimonials">
              <button className="btn-primary">View Testimonials</button>
            </Link>
            <Link to="/contact">
              <button className="btn-secondary">Get in Touch</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
