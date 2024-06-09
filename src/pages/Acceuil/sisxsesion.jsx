import React from 'react';
import './style/SixSession.css';
import { useNavigate } from 'react-router-dom';

const SixSession = React.forwardRef((props, ref) => {
    const { animateButton } = props;
    const navigate=useNavigate()
    const Formateur=()=>{
      navigate('/devenirForm')
    }
  return (
    <div ref={ref} className="six-session">
      <img src="instructor.jpg" alt="Instructor" className="instructor-image" />
      <div className="text-content">
        <h1>Devenir Formateur</h1>
        <p>
        Nos formateurs du monde entier donnent des cours à des millions de participants sur notre plateforme E-learning. Nous vous offrons les outils et les compétences nécessaires pour enseigner ce que vous aimez.
        </p>
        <button className={`cta-button ${animateButton ? 'animate' : ''}`} onClick={Formateur}>
          Commencez à enseigner dès aujourd'hui
        </button>
      </div>
    </div>
  );
});

export default SixSession;
