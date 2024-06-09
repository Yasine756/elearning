import React from 'react';
import { FaStar } from 'react-icons/fa';
import './style/fifthsection.css'
const courses = {
  Développement: {
    'Développement Web': [
      'Science des données',
      'Développement mobile',
      'Langages de programmation',
      'Développement de jeux',
      'Conception et développement de bases de données',
      'Tests de logiciels',
      'Génie logiciel',
      'Outils de développement logiciel',
      'Développement sans code'
    ]
  },
  Business: {
    'Création d\'entreprise': ['Planification', 'Financement', 'Marketing']
  },
  'Santé et bien-être': {
    Méditation: ['Techniques de méditation', 'Pratiques quotidiennes', 'Avantages']
  }
};

const Card = ({ image, title, course, rating, price }) => (
  <div className="card">
    <img src={image} alt={title} />
    <h2>{title}</h2>
    <p>{course}</p>
    <div className="rating">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} color={i < rating ? '#ffc107' : '#e4e5e9'} />
      ))}
    </div>
    <p>${price}</p>
    <button>Apprendre</button>
  </div>
);

const FifthSection = () => {
  const getRandomPrice = () => (Math.random() * (100 - 20) + 20).toFixed(2);

  return (
    <div>
      <h1>Consulter les cours tendances</h1>
      <div className="cards">
        <Card
          image="software.jpg"
          title="Développement Web"
          course={courses.Développement['Développement Web'][0]}
          rating={4}
          price={getRandomPrice()}
        />
        <Card
          image="sante.jpg"
          title="Business"
          course={courses.Business['Création d\'entreprise'][0]}
          rating={5}
          price={getRandomPrice()}
        />
        <Card
          image="busness.jpg"
          title="Santé et bien-être"
          course={courses['Santé et bien-être'].Méditation[0]}
          rating={3}
          price={getRandomPrice()}
        />
      </div>
    </div>
  );
};

export default FifthSection;
