import React from 'react';
import { Lightbulb, Beaker } from 'lucide-react';
import './RnDPage.css';

const RnDPage = () => {
  const researchAreas = [
    {
      title: "Advanced Research Projects",
      description: "Collaborative research initiatives focusing on breakthrough technologies and methodologies in analytical chemistry and materials science."
    },
    {
      title: "Innovation Lab",
      description: "Dedicated space for experimental research and prototype development equipped with cutting-edge instrumentation."
    },
    {
      title: "Industry Partnerships",
      description: "Strategic collaborations with leading companies and academic institutions to accelerate innovation and technology transfer."
    }
  ];

  const currentResearch = [
    {
      title: "Nanotechnology Applications",
      description: "Exploring novel applications of nanomaterials in analytical chemistry and biotechnology."
    },
    {
      title: "Green Chemistry",
      description: "Developing environmentally sustainable analytical methods and processes."
    },
    {
      title: "Biosensor Development",
      description: "Creating next-generation biosensors for rapid detection and monitoring applications."
    },
    {
      title: "AI-Driven Analysis",
      description: "Integrating artificial intelligence and machine learning into analytical workflows."
    }
  ];

  return (
    <div className="rnd-page">
      <section className="rnd-section">
        <div className="rnd-container">
          <div className="rnd-header">
            <Lightbulb className="rnd-icon" />
            <h1 className="rnd-title">Research & Development</h1>
            <p className="rnd-description">
              Pushing the boundaries of scientific knowledge through innovative research and development initiatives.
            </p>
          </div>

          <div className="innovation-section">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&h=400&fit=crop" 
                alt="Research Laboratory" 
                className="innovation-image"
              />
            </div>
            <div className="innovation-content">
              <h2>Innovation at Our Core</h2>
              <p className="innovation-intro">
                Our research and development division is dedicated to advancing scientific knowledge and 
                developing breakthrough technologies that address real-world challenges.
              </p>
              
              <div className="research-areas">
                {researchAreas.map((item, index) => (
                  <div key={index} className="research-item">
                    <Beaker className="research-icon" />
                    <div className="research-item-content">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="current-research-card">
            <h3 className="current-research-title">Current Research Areas</h3>
            <div className="current-research-grid">
              {currentResearch.map((area, index) => (
                <div key={index} className="current-research-item">
                  <h4>{area.title}</h4>
                  <p>{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RnDPage;