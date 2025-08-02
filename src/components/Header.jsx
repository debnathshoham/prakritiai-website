import React from 'react';
import './Header.css';
import PrakritiAILogo from '../assets/PrakritiAI.svg'

const Header = ({ currentPage, navigateTo }) => {
  const navItems = [
    { key: 'home', label: 'HOME' },
    { key: 'products', label: 'PRODUCTS' },
    { key: 'rd', label: 'R&D' },
    { key: 'team', label: 'TEAM' },
    { key: 'contact', label: 'CONTACT' }
  ];

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo-section" onClick={() => navigateTo('home')}>
            <img 
              src={PrakritiAILogo} 
              alt="PrakritiAI Logo"
              className="logo-img"
            />
        </div>

        {/* Navigation */}
        <nav className="nav">
          {navItems.map(item => (
           <button
              key={item.key}
              onClick={() => navigateTo(item.key)}
              className={`header-nav-button ${currentPage === item.key ? 'active' : ''}`}
            >
              {item.label}
            </button> 
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="mobile-menu">
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;