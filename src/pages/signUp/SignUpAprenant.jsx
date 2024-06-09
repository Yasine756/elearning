import React, { useState } from 'react';
import './style/signUp.css';

const SignUpApprenant = () => {
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      password: '',
      receiveOffers: false,
    });
  
    const handleChange = (e) => {
      const { name, value, checked, type } = e.target;
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form data:', formData);
    };
  
    return (
      <div className="signup-container">
        <h2>Inscrivez-vous et commencez à apprendre</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="fullName"
              placeholder="Nom complet"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              name="receiveOffers"
              checked={formData.receiveOffers}
              onChange={handleChange}
            />
            <label>
              Je souhaite recevoir des offres spéciales, des recommandations personnalisées et des conseils d'apprentissage.
            </label>
          </div>
          <button type="submit" className="submit-button">S'inscrire</button>
        </form>
        <p className="terms">
          En vous inscrivant, vous acceptez nos <a href="E-learnning">Conditions d'utilisation</a> et notre <a href="E-learnning">Politique de confidentialité</a>.
        </p>
        <p className="login-link">
          Vous avez déjà un compte ? <a href="E-learnning">Se connecter</a>
        </p>
      </div>
    );
  };
  
  export default SignUpApprenant;