import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import RnDPage from './pages/RnDPage.jsx';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage.jsx';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'products': return <ProductsPage navigateTo={navigateTo} />;
      case 'rd': return <RnDPage />;
      case 'team': return <TeamPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white w-full">
      <Header currentPage={currentPage} navigateTo={navigateTo} />
      {renderPage()}
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default App;