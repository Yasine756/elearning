import React, { useState, useEffect } from 'react';
import './style/Support.css';
import { MdOutlineSyncProblem } from "react-icons/md";
import { toast } from 'react-toastify';
import { GoCheckCircle } from "react-icons/go";
import axios from 'axios';

const generateId = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';
  for (let i = 0; i < 8; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
};

const SupportForm = () => {
  const [step, setStep] = useState(1);
  const [reclamationId, setReclamationId] = useState('');
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [probleme, setProblem] = useState('');
  const [description, setDescription] = useState('');
  const [role, setRole] = useState('formateur');

  useEffect(() => {
    setReclamationId(generateId());
  }, []);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    try {
      const { data } = await axios.post('http://localhost:5000/api/reclamation', { nom, email, probleme, description, role });
      toast.success(data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: '#000',
          color: '#fff',
        },
        icon: <GoCheckCircle style={{ color: 'green', fontSize: '24px' }} />,
      });
    } catch (error) {
      console.log(error);
      toast.error(error.message.data, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: '#000',
          color: '#fff',
        },
        icon: <MdOutlineSyncProblem style={{ color: 'red', fontSize: '24px' }} />,
      });
    }
  };

  return (
    <div>
      <h1>Support technique</h1>
      <p><MdOutlineSyncProblem /> Veuillez remplir le formulaire ci-dessous pour soumettre une réclamation.</p>
      <div className="support-container">
        <div className="image-container">
          <img src="support.jpg" alt="Support Technique" />
        </div>
        <div className="form-container">
          <div className="progress-bar">
            <div className={`circle ${step >= 1 ? 'active' : ''}`}>1</div>
            <div className={`line ${step >= 2 ? 'active' : ''}`}></div>
            <div className={`circle ${step >= 2 ? 'active' : ''}`}>2</div>
            <div className={`line ${step >= 3 ? 'active' : ''}`}></div>
            <div className={`circle ${step >= 3 ? 'active' : ''}`}>3</div>
          </div>
          {step === 1 && (
            <div className="form-step">
              <h2>Etape 1</h2>
              <p>Id de votre Reclamation </p>
              <input type="text" value={reclamationId} readOnly />
              <input type="text" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} />
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <button onClick={nextStep}>Suivant</button>
            </div>
          )}
          {step === 2 && (
            <div className="form-step">
              <h2>Etape 2</h2>
              <input type="text" placeholder="Problème" value={probleme} onChange={(e) => setProblem(e.target.value)} />
              <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
              <button onClick={prevStep}>Précédent</button>
              <button onClick={nextStep}>Suivant</button>
            </div>
          )}
          {step === 3 && (
            <div className="form-step">
              <h2>Etape 3</h2>
              <h3>Vous réclamez en tant que :</h3>
              <select className='select' value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="formateur" >Formateur</option>
                <option value="etudiant">Etudiant</option>
              </select>
              <button onClick={prevStep}>Précédent</button>
              <button onClick={handleSubmit}>Soumettre</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SupportForm;
