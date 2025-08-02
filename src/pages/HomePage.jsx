import React from 'react';
import { Play } from 'lucide-react';
import BannerSlider from '../components/BannerSlider';
import { bannerData } from '../data/bannerData';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <BannerSlider banners={bannerData} />
      
      {/* About Us Section */}
      <section className="about-section">
        <div className="about-container">
          <h2 className="about-title">About Us</h2>
          <p className="about-description">
            We are a leading laboratory dedicated to advancing scientific research and innovation. 
            Our commitment to excellence drives us to deliver cutting-edge solutions that transform 
            industries and improve lives worldwide.
          </p>

          {/* Vision & Mission */}
          <div className="vision-mission-grid">
            <div className="vision-mission-item">
              <h3 className="vision-mission-title">Our Vision</h3>
              <p className="vision-mission-text">
                To be the global leader in laboratory innovation, pioneering breakthrough 
                technologies that transform industries and improve lives worldwide. We envision 
                a future where our cutting-edge research and development solutions drive 
                scientific advancement and create meaningful impact across diverse sectors.
              </p>
            </div>
            <div className="vision-mission-item">
              <h3 className="vision-mission-title">Our Mission</h3>
              <p className="vision-mission-text">
                To deliver exceptional laboratory services and innovative solutions through 
                rigorous research, state-of-the-art technology, and dedicated expertise. 
                We are committed to maintaining the highest standards of quality and precision 
                while fostering collaborative partnerships that accelerate scientific discovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratory Video Section */}
      <section className="video-section">
        <div className="video-container">
          <div className="video-header">
            <h2 className="video-title">Our Laboratory in Action</h2>
            <p className="video-description">
              See our state-of-the-art facilities and meet our team in action as we 
              push the boundaries of scientific research and innovation.
            </p>
          </div>

          <div className="video-wrapper">
            <div className="video-player">
              <div className="video-thumbnail">
                <img 
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=450&fit=crop" 
                  alt="Laboratory Video Thumbnail" 
                  className="video-image"
                />
                <div className="video-overlay">
                  <button className="play-button">
                    <Play size={48} fill="currentColor" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;