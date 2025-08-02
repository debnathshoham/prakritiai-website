import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = ({ navigateTo }) => {
  const quickLinks = [
    { key: 'home', label: 'Home' },
    { key: 'products', label: 'Products' },
    { key: 'rd', label: 'R&D' },
    { key: 'team', label: 'Team' }
  ];

  return (
    <footer className="footer">
      {/* Watermark */}
      <div className="footer-watermark">
        <div className="watermark-text">
          PRAKRITI AI
        </div>
      </div>

      <div className="footer-container">
        <div className="footer-content">
          {/* Contact Info */}
          <div className="footer-contact-section">
            <h3>Contact Us</h3>
            <div className="footer-contact-list">
              <div className="contact-item">
                <Mail size={20} className="contact-icon" />
                <span>info@prakritiai.com</span>
              </div>
              <div className="contact-item">
                <Phone size={20} className="contact-icon" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <MapPin size={20} className="contact-icon" />
                <span>123 Lab Street, Science City</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="links-section">
            <h4>Quick Links</h4>
            <div className="links-grid">
              {quickLinks.map(item => (
                <button
                  key={item.key}
                  onClick={() => navigateTo(item.key)}
                  className="link-button"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright">
          <p>© 2025 PrakritiAI Technologies Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;