import React from 'react';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './style/Reviews.css';

const reviews = [
  {
    name: 'Alice',
    role: 'Formateur',
    rating: 5,
    text: 'Excellent plateforme pour enseigner et partager ses connaissances.',
  },
  {
    name: 'Charlie',
    role: 'Développeur',
    rating: 5,
    text: 'Une interface utilisateur très intuitive et facile à utiliser.',
  },
  {
    name: 'David',
    role: 'Designer',
    rating: 4,
    text: 'J\'aime les fonctionnalités de collaboration offertes par la plateforme.',
  },
];

const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: 0,
      opacity: 0,
      x: direction === 'left' ? -80 : direction === 'right' ? 80 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

const Reviews = () => {
  return (
    <div className="reviews-container">
        <hr/>
        <h1 className="reviews-title">Les impressions d'usage entre les formateurs et les apprenants</h1>
      {reviews.map((review, index) => (
        <motion.div
          key={index}
          className="review-card"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          variants={fadeIn(index % 2 === 0 ? 'left' : 'right', index * 0.2)}
        >
          <div className="review-header">
            <div className="user-name">{review.name}</div>
            <div className="rating">
              {[...Array(5)].map((star, i) => (
                <FaStar key={i} color={i < review.rating ? '#ffc107' : '#e4e5e9'} />
              ))}
            </div>
          </div>
          <div className="review-text">{review.text}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default Reviews;
