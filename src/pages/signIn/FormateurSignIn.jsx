import React from 'react';
import './SignInStyle.css';


function FormateurSignIn() {
  return (
    <div className="signin-container">
      <h2>Connectez-vous à votre compte E-learning</h2>
      <div className="social-login">
        <button className="social-button">
          <img src="google.png" alt="Google" />
          Continuer avec Google
        </button>
        <button className="social-button">
          <img src="facebook.png"alt="Facebook" />
          Continuer avec Facebook
        </button>
        <button className="social-button">
          <img src="apple.png" alt="Apple" />
          Continuer avec Apple
        </button>
      </div>
      <form className="signin-form">
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Mot de passe" />
        <button type="submit">Se connecter</button>
      </form>
      
      <p id='forgot_password'><a href="/forgot-password">Mot de passe oublié ?</a></p>
      <p>Vous n'avez pas de compte ? <a href="/signup">Inscrivez-vous</a></p>
    </div>
  );
}

export default FormateurSignIn;
