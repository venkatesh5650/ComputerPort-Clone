import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">

        <div className="footer-column brand-column">
          <h2 className="text-gradient">Computer Port</h2>
          <p className="footer-description">
            Secure, scalable, and cost-effective IT solutions designed to support
            business growth, resilience, and compliance.
          </p>
          <div className="footer-contact">
            <a href="tel:+919100961982" className="footer-contact-item">📞 +91 91009 61982</a>
            <a href="mailto:info@computerport.in" className="footer-contact-item">📧 info@computerport.in</a>
            <a href="mailto:sales@computerport.in" className="footer-contact-item">📧 sales@computerport.in</a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li><Link to="/cloud">Virtualization</Link></li>
            <li><Link to="/cloud">Proxmox Migration</Link></li>
            <li><Link to="/cloud">Private / Hybrid Cloud</Link></li>
            <li><Link to="/security">RMM Services</Link></li>
            <li><Link to="/security">Security & IAM</Link></li>
            <li><Link to="/security">Backup & Restore</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/partners">Partners</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Quick Actions</h3>
          <ul>
            <li><Link to="/contact" className="footer-cta-link">📅 Book Consultation</Link></li>
            <li><Link to="/contact" className="footer-cta-link">👤 Talk to Expert</Link></li>
            <li><Link to="/cloud">Proxmox vs VMware</Link></li>
            <li><Link to="/cloud">Proxmox vs Hyper-V</Link></li>
          </ul>
        </div>

      </div>

      <div className="footer-partners">
        <span className="footer-partners-label">Trusted Partners:</span>
        <div className="footer-partners-list">
          <Link to="/partners" className="footer-partner-badge">oVirt</Link>
          <Link to="/partners" className="footer-partner-badge">Proxmox Silver</Link>
          <Link to="/partners" className="footer-partner-badge">Nakivo</Link>
          <Link to="/partners" className="footer-partner-badge">InfraServer</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright &copy; {new Date().getFullYear()} Computer Port IT Solutions. All rights reserved.</p>
        <p style={{ marginTop: '0.25rem', fontSize: '0.8rem', opacity: 0.6 }}>Powered by Computer Port IT Solutions</p>
      </div>
    </footer>
  );
};

export default Footer;
