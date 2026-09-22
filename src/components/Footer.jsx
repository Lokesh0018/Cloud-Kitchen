import React from 'react';
import '../styles/HeaderFooter.css';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div>
            <div className="logo-section" style={{ marginBottom: '1rem' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '32px', color: 'var(--primary)' }}>restaurant_menu</span>
              <span className="logo-text">Cloud Kitchen</span>
            </div>
            <p className="footer-desc">
              Crafting kinetic, chef-driven culinary experiences delivered fresh to your door from our state-of-the-art cloud kitchens.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Global Kitchen network" className="social-btn">
                <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: '18px' }}>public</span>
              </a>
              <a href="#" aria-label="Customer support channel" className="social-btn">
                <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: '18px' }}>chat</span>
              </a>
              <a href="#" aria-label="Direct communication channel" className="social-btn">
                <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: '18px' }}>alternate_email</span>
              </a>
            </div>
          </div>

          <div>
            <div className="footer-col-title">Quick Links</div>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Chef's Curated Menu</a></li>
              <li><a href="#" className="footer-link">My Order Cart</a></li>
              <li><a href="#" className="footer-link">Real-Time Order Tracker</a></li>
              <li><a href="#" className="footer-link">Our Culinary Standards</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Dispatch Kitchen</div>
            <div className="contact-info">
              <p className="contact-item">
                <span className="material-symbols-outlined" aria-hidden="true" style={{ color: 'var(--primary)', fontSize: '18px' }}>schedule</span>
                11:00 AM – 11:30 PM Everyday
              </p>
              <p className="contact-item">
                <span className="material-symbols-outlined" aria-hidden="true" style={{ color: 'var(--primary)', fontSize: '18px' }}>pin_drop</span>
                44 Culinary District, Central Hub
              </p>
              <p className="contact-item">
                <span className="material-symbols-outlined" aria-hidden="true" style={{ color: 'var(--primary)', fontSize: '18px' }}>call</span>
                +1 (800) 555-CLOVE
              </p>
              <p className="contact-item">
                <span className="material-symbols-outlined" aria-hidden="true" style={{ color: 'var(--primary)', fontSize: '18px' }}>forum</span>
                WhatsApp: +1 (800) 555-2568
              </p>
            </div>
          </div>

          <div>
            <div className="footer-col-title">Live Telemetry</div>
            <p className="footer-desc" style={{ marginBottom: '0.5rem' }}>
              Average prep-to-dispatch latency is currently running below nominal targets.
            </p>
            <div className="telemetry-box">
              <div className="telemetry-header">
                <span className="telemetry-label">Kitchen Load</span>
                <span className="telemetry-value">Optimal • 82%</span>
              </div>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div>© 2024 Cloud Kitchen Platform. All rights reserved.</div>
          <div className="legal-links">
            <a href="#" className="legal-link">Privacy Policy</a>
            <a href="#" className="legal-link">Terms of Service</a>
            <a href="#" className="legal-link">Kitchen Hygiene Certifications</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
