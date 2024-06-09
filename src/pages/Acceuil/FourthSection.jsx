import React, { useState, useEffect } from 'react';
import './style/FourthSection.css'; // Assurez-vous d'inclure votre fichier CSS

const data = {
  "Développement": {
    "Développement Web": [
      "Science des données",
      "Développement mobile",
      "Langages de programmation",
      "Développement de jeux",
      "Conception et développement de bases de données",
      "Tests de logiciels",
      "Génie logiciel",
      "Outils de développement logiciel",
      "Développement sans code"
    ],
    "Développement Mobile": [
      "Développement Android",
      "Développement iOS",
      "Développement multiplateforme",
      "Conception d'applications mobiles"
    ]
  },
  "Business": {
    "Création d'entreprise": ["Planification", "Financement", "Marketing"],
    "Gestion de projet": ["Initiation", "Planification", "Exécution"],
    "Stratégie d'entreprise": ["Analyse SWOT", "Développement stratégique", "Implémentation"]
  },
  "Finance et comptabilité": {
    "Comptabilité financière": ["Principes comptables", "États financiers", "Audit"],
    "Analyse financière": ["Ratios financiers", "Analyse des flux de trésorerie", "Évaluation d'entreprise"],
    "Gestion des investissements": ["Portefeuilles d'investissement", "Analyse des risques", "Optimisation des rendements"]
  },
  "Informatique et logiciels": {
    "Sécurité informatique": ["Cryptographie", "Sécurité réseau", "Sécurité des applications"],
    "Systèmes d'exploitation": ["Windows", "Linux", "MacOS"],
    "Applications logicielles": ["Microsoft Office", "Google Workspace", "Logiciels spécifiques"]
  },
  "Productivité bureautique": {
    "Excel": ["Fonctions de base", "Tableaux croisés dynamiques", "Macros"],
    "Gestion de temps": ["Techniques de productivité", "Outils de gestion du temps", "Applications"],
    "Outils collaboratifs": ["Slack", "Trello", "Microsoft Teams"]
  },
  "Design": {
    "Design graphique": ["Photoshop", "Illustrator", "InDesign"],
    "UI/UX": ["Principes de design", "Prototypage", "Tests utilisateur"],
    "Illustration": ["Techniques de dessin", "Illustration numérique", "Illustration vectorielle"]
  },
  "Marketing": {
    "Marketing digital": ["SEO", "Publicité en ligne", "Marketing de contenu"],
    "SEO": ["Recherche de mots-clés", "Optimisation on-page", "Backlinks"],
    "Publicité": ["Google Ads", "Facebook Ads", "Campagnes publicitaires"]
  },
  "Mode de vie": {
    "Santé et fitness": ["Entraînements", "Nutrition", "Récupération"],
    "Nutrition": ["Plans de repas", "Suppléments", "Nutrition sportive"],
    "Bien-être": ["Méditation", "Mindfulness", "Développement personnel"]
  },
  "Photographie et vidéo": {
    "Techniques de photographie": ["Composition", "Éclairage", "Édition"],
    "Montage vidéo": ["Premiere Pro", "Final Cut Pro", "Techniques d'édition"],
    "Production vidéo": ["Planification", "Tournage", "Post-production"]
  },
  "Santé et bien-être": {
    "Méditation": ["Techniques de méditation", "Pratiques quotidiennes", "Avantages"],
    "Yoga": ["Asanas", "Pranayama", "Méditation"],
    "Soins personnels": ["Routines de soins", "Produits de soins", "Conseils de bien-être"]
  },
  "Musique": {
    "Instruments de musique": ["Guitare", "Piano", "Batterie"],
    "Production musicale": ["Logiciels de production", "Techniques de mixage", "Mastering"],
    "Théorie musicale": ["Notes et accords", "Harmonie", "Composition"]
  },
  "Formations et diplômes": {
    "Préparation aux examens": ["Méthodes d'étude", "Pratiques d'examen", "Gérer le stress"],
    "Certifications professionnelles": ["PMP", "CFA", "CPA"],
    "Cours académiques": ["Mathématiques", "Sciences", "Littérature"]
  }
};

const getRandomElements = (arr, num) => {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

const FourthSection = () => {
  const [selectedFiliere, setSelectedFiliere] = useState(null);
  const [randomFilieres, setRandomFilieres] = useState([]);

  useEffect(() => {
    const allFilieres = [];
    Object.values(data).forEach(domain => {
      allFilieres.push(...Object.keys(domain));
    });
    setRandomFilieres(getRandomElements(allFilieres, 6));
  }, []);

  const handleFiliereClick = (filiere) => {
    setSelectedFiliere(filiere);
  };

  return (
    <div className="fourth-section">
      <h1>Une large sélection de cours</h1>
      <p>
        Choisissez parmi plus de 220 000 vidéos de cours en ligne. De nouveaux cours sont ajoutés tous les mois.
      </p>
      <ul className="filieres-list">
        {randomFilieres.map((filiere) => (
          <li
            key={filiere}
            className={`filiere-item ${selectedFiliere === filiere ? 'selected' : ''}`}
            onClick={() => handleFiliereClick(filiere)}
          >
            {filiere}
          </li>
        ))}
      </ul>
      {selectedFiliere && (
        <div className="cours-list">
          <h3>Cours de {selectedFiliere}</h3>
          <ul>
            {Object.entries(data).map(([domain, filieres]) => 
              filieres[selectedFiliere] ? 
                getRandomElements(filieres[selectedFiliere], 3).map((course) => (
                  <li key={course}>{course}</li>
                )) 
              : null
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FourthSection;
