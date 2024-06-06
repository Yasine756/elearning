import React from 'react';
import './HeroPage.css'; // Assurez-vous que ce chemin est correct

const HeroSection = () => {
    return (
        <div className="hero-container">
            <div className="hero-text">
                <h1>Des compétences qui vous font évoluer</h1>
                <p>La technologie et le monde du travail évoluent rapidement. Avec nous, vous êtes plus rapide. Obtenez les compétences pour atteindre vos objectifs et rester compétitif.</p>
                <button>Abonnement pour les entreprises</button>
            </div>
            <img src="online.jpg" alt="Compétences en ligne" className="hero-image" />
        </div>
    );
};

export default HeroSection;
