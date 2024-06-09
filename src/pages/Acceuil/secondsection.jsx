import React from 'react';
import './style/SecondSection.css';

const SecondSection = () => {
  return (
    <div className="second-section">
      <h2>Plus de 16000 entreprises et des millions de participants nous font confiance dans le monde entier</h2>
      <div className="logo-container">
       
        <img src="alibaba.png" alt="Alibaba" className="logo" />
        <img src="bmw.png" alt="BMW" className="logo" />
        <img src="volkswagen.png" alt="Volkswagen" className="logo" />
      </div>
    </div>
  );
};

export default SecondSection;
