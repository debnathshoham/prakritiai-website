import React from 'react';
import { Users } from 'lucide-react';
import './TeamPage.css';

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Kusumika Sinha Roy, Ph.D.",
      role: "Lead Research Scientist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      description: "Specializing in advanced analytical techniques and method development with over 10 years of experience in pharmaceutical and environmental analysis.",
      credentials: ["Ph.D. in Analytical Chemistry", "15+ Publications"]
    },
    {
      name: "Dr. Sarah Chen",
      role: "Laboratory Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "Leading laboratory operations and strategic research initiatives with expertise in biotechnology and regulatory compliance.",
      credentials: ["Ph.D. in Biotechnology", "20+ Years Experience"]
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Senior Analyst",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Expert in chemical analysis and quality assurance with a focus on pharmaceutical applications and method validation.",
      credentials: ["Ph.D. in Chemistry", "12+ Years Experience"]
    }
  ];

  const teamBenefits = [
    {
      title: "Expertise & Experience",
      description: "Our team combines decades of experience with cutting-edge knowledge in analytical sciences."
    },
    {
      title: "Collaborative Approach",
      description: "We work closely with clients to understand their unique needs and deliver tailored solutions."
    },
    {
      title: "Continuous Learning",
      description: "Regular training and professional development ensure we stay at the forefront of scientific advancement."
    },
    {
      title: "Quality Focus",
      description: "Commitment to accuracy, precision, and reliability in every project we undertake."
    }
  ];

  return (
    <div className="team-page">
      <section className="team-section">
        <div className="team-container">
          <div className="team-header">
            <Users className="team-icon" />
            <h1 className="team-title">Our Team</h1>
            <p className="team-description">
              Meet the dedicated professionals driving our mission forward with expertise, 
              passion, and commitment to scientific excellence.
            </p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member-card">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="member-image"
                />
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-description">{member.description}</p>
                <div className="member-credentials">
                  {member.credentials.map((credential, idx) => (
                    <p key={idx}>{credential}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="benefits-card">
            <h3 className="benefits-title">Why Choose Our Team?</h3>
            <div className="benefits-grid">
              {teamBenefits.map((item, index) => (
                <div key={index} className="benefit-item">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;