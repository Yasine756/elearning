import React from 'react';
import './style/Footer.css'; // Assurez-vous de créer un fichier CSS pour le style


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>E-learnning Business</h4>
                    <ul>
                        <li>Enseigner sur E-learnning</li>
                        <li>Téléchargez l'application</li>
                        <li>À propos d'E-learnning</li>
                        <li>Contactez-nous</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Carrières</h4>
                    <ul>
                        <li>Blog</li>
                        <li>Aide et support</li>
                        <li>Affilié</li>
                        <li>Investisseurs</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Conditions</h4>
                    <ul>
                        <li>Politique de confidentialité</li>
                        <li>Paramètres des cookies</li>
                        <li>Plan du site</li>
                        <li>Déclaration d'accessibilité</li>
                    </ul>
                </div>
                <div className="footer-logo">
                    <img src="logo.png" alt="Logo" />
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 E-learnning, Inc.</p>
                <div className="footer-language">
                    <span role="img" aria-label="globe">🌐</span> Français
                </div>
            </div>
        </footer>
    );
}

export default Footer;
