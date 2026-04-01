import React, { useState } from 'react';
import './Pages.css';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-wrapper">
      <div className="page-hero" style={{ minHeight: '40vh' }}>
        <div className="page-hero-content animate-slide-up">
          <span className="page-badge glass">Get In Touch</span>
          <h1>Talk to an <span className="text-gradient">IT Expert</span></h1>
          <p>We design, deploy, and manage modern IT environments. Let us understand your infrastructure challenges.</p>
        </div>
      </div>

      <div className="contact-layout page-section">

        {/* Contact Info */}
        <div className="contact-info">
          <div className="contact-info-card glass-panel">
            <h3>Contact Details</h3>
            <div className="contact-detail">
              <span className="contact-icon">📞</span>
              <div>
                <p className="contact-label">Phone</p>
                <a href="tel:+919100961982" className="contact-value">+91 91009 61982</a>
              </div>
            </div>
            <div className="contact-detail">
              <span className="contact-icon">📧</span>
              <div>
                <p className="contact-label">General Enquiry</p>
                <a href="mailto:info@computerport.in" className="contact-value">info@computerport.in</a>
              </div>
            </div>
            <div className="contact-detail">
              <span className="contact-icon">💼</span>
              <div>
                <p className="contact-label">Sales</p>
                <a href="mailto:sales@computerport.in" className="contact-value">sales@computerport.in</a>
              </div>
            </div>
          </div>

          <div className="contact-info-card glass-panel">
            <h3>Quick Actions</h3>
            <a href="tel:+919100961982" className="quick-action-btn btn-primary" style={{ display: 'block', textAlign: 'center', marginBottom: '0.75rem', textDecoration: 'none' }}>
              📞 Call Now
            </a>
            <a href="mailto:info@computerport.in" className="quick-action-btn btn-secondary" style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}>
              📧 Send Email
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-card glass-panel">
          {submitted ? (
            <div className="form-success">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
              <h3>Message Sent!</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>
                Thank you for reaching out. Our IT experts will get back to you shortly.
              </p>
              <button className="btn-primary" style={{ marginTop: '1.5rem' }} onClick={() => setSubmitted(false)}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <h3 style={{ marginBottom: '1.5rem' }}>Request a Consultation</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input required name="name" value={form.name} onChange={handleChange} placeholder="John Doe" className="form-input" />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@company.com" className="form-input" />
                </div>
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className="form-input" />
              </div>
              <div className="form-group">
                <label>How can we help? *</label>
                <textarea required name="message" value={form.message} onChange={handleChange} placeholder="Describe your IT challenge or what you're looking for..." className="form-input form-textarea" rows={5} />
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1rem' }}>
                Submit Request
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default Contact;
