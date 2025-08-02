import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import './ContactPage.css';

const ContactPage = () => {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "info@prakritiai.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: MapPin, label: "Address", value: "123 Lab Street\nScience City, SC 12345" }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <div className="contact-page">
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-header">
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-description">
              Get in touch with our team to discuss your laboratory needs and discover how we can 
              support your research and analytical requirements.
            </p>
          </div>

          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-card">
              <h3 className="form-title">Send us a Message</h3>
              <form className="contact-form">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input 
                    type="text" 
                    className="form-input"
                    placeholder="Your Name" 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input 
                    type="email" 
                    className="form-input"
                    placeholder="your@email.com" 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input 
                    type="text" 
                    className="form-input"
                    placeholder="Subject" 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea 
                    className="form-textarea"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button type="submit" className="form-button">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info & Hours */}
            <div className="contact-info">
              <div className="info-card">
                <h3 className="info-title">Contact Information</h3>
                <div className="contact-info-list">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="contact-info-item">
                      <contact.icon className="contact-icon" />
                      <div className="contact-info-content">
                        <p>{contact.label}</p>
                        <p>{contact.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="info-card">
                <h3 className="info-title">Office Hours</h3>
                <div className="office-hours-list">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="office-hours-item">
                      <span className="office-hours-day">{schedule.day}</span>
                      <span className="office-hours-time">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;