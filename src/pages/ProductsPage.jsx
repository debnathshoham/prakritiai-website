import React from 'react';
import './ProductsPage.css';

const ProductsPage = ({ navigateTo }) => {
  const products = [
    {
      title: "Laboratory Equipment",
      image: "https://images.unsplash.com/photo-1563642002-3a6d0cb04468?w=400&h=250&fit=crop",
      description: "State-of-the-art instruments and equipment for precise measurements and analysis across various research disciplines.",
      features: ["Spectrophotometers & Microscopes", "Centrifuges & Incubators", "Analytical Balances"]
    },
    {
      title: "Chemical Reagents",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=250&fit=crop",
      description: "High-purity chemicals and reagents sourced from trusted suppliers to ensure reliable and reproducible results.",
      features: ["Analytical Grade Chemicals", "Buffer Solutions", "Specialty Reagents"]
    },
    {
      title: "Testing Services",
      image: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=250&fit=crop",
      description: "Comprehensive analytical testing services including quality control, material characterization, and method development.",
      features: ["Quality Control Testing", "Material Analysis", "Custom Method Development"]
    }
  ];

  return (
    <div className="products-page">
      <section className="products-section">
        <div className="products-container">
          <div className="products-header">
            <h1 className="products-title">Our Products</h1>
            <p className="products-description">
              Comprehensive laboratory solutions designed to meet diverse research and 
              analytical needs across multiple industries.
            </p>
          </div>

          <div className="products-grid">
            {products.map((product, index) => (
              <div key={index} className="product-card">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="product-image"
                />
                <div className="product-content">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-description">{product.description}</p>
                  <ul className="product-features">
                    {product.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="quote-section">
            <button 
              onClick={() => navigateTo('contact')} 
              className="quote-button"
            >
              Request Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;