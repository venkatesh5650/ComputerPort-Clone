import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCards.css';

const services = [
  {
    title: "Managed IT Services",
    description: "Proactive monitoring, patch management, and 24/7 RMM coverage so your business never experiences unexpected downtime.",
    icon: "activity",
    color: "#10b981",
    link: "/security"
  },
  {
    title: "Cloud & Hybrid Infrastructure",
    description: "Public, Private, and Hybrid Cloud environments including Proxmox VE, oVirt, and VMware designed for limitless scalability.",
    icon: "cloud",
    color: "var(--color-secondary)",
    link: "/cloud"
  },
  {
    title: "Cyber Security Services",
    description: "Zero-Trust IAM, 2FA/OTP enforcement, and Vulnerability Assessments that protect every layer of your digital environment.",
    icon: "shield",
    color: "var(--color-accent)",
    link: "/security"
  },
  {
    title: "Identity & Access Management",
    description: "Centralized RBAC, Single Sign-On (SSO), and privileged user controls ensuring the right people access the right resources.",
    icon: "key",
    color: "#f59e0b",
    link: "/security"
  },
  {
    title: "Backup & Disaster Recovery",
    description: "Nakivo-powered automated backup schedules tested for fast RPO and RTO, protecting business continuity at all times.",
    icon: "save",
    color: "#3b82f6",
    link: "/security"
  },
  {
    title: "Proxmox Migration",
    description: "As Proxmox Silver Partners in India, we migrate VMware, Hyper-V, and Nutanix workloads with zero data loss.",
    icon: "server",
    color: "#ef4444",
    link: "/compare"
  }
];

const Icons = {
  server: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>,
  shield: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
  cloud: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>,
  activity: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>,
  key: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>,
  save: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
};

const ServiceCards = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-header animate-slide-up">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Our Core <span className="text-gradient">Services</span>
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Reduce IT downtime, improve security posture, and optimize costs — without sacrificing performance.
          </p>
        </div>

        <div className="cards-grid">
          {services.map((service, index) => (
            <Link 
              key={index}
              to={service.link}
              className="service-card glass-panel"
              style={{ animationDelay: `${index * 0.1}s`, textDecoration: 'none', display: 'flex', flexDirection: 'column' }}
            >
              <div className="icon-wrapper" style={{ color: service.color, background: `${service.color}18` }}>
                {Icons[service.icon]}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="card-footer">
                <span style={{ color: service.color, fontWeight: '600', fontSize: '0.9rem' }}>Learn More →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
