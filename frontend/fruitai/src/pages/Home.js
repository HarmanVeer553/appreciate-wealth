// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css'; // Import the CSS file for styling

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="app-title">Fruit.Ai</h1>
      <p className="app-subtitle">"Be Healthy!"</p>
      
      <div className="services">
        <button className="service-btn chat" onClick={() => navigate('/chat')}>Chat</button>
        <button className="service-btn translator" onClick={() => navigate('/translator')}>Translator</button>
        <button className="service-btn faqs" onClick={() => navigate('/faqs')}>FAQs</button>
        <button className="service-btn about" onClick={() => navigate('/about')}>About</button>
      </div>
      
      <div className="footer-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default Home;
