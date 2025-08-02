import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './BannerSlider.css';

const BannerSlider = ({ banners }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [banners.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % banners.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);

  return (
    <section className="banner-slider">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`banner-slide ${index === currentSlide ? 'active' : 'inactive'}`}
        >
          <div
            className="banner-background"
            style={{ backgroundImage: `url(${banner.image})` }}
          >
            <div className="banner-overlay"></div>
            <div className="banner-content-container">
              <div className="banner-content">
                <h1 className="banner-title">{banner.title}</h1>
                <p className="banner-subtitle">{banner.subtitle}</p>
                <button className="banner-button">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="nav-button prev"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="nav-button next"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="indicators-container">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default BannerSlider;