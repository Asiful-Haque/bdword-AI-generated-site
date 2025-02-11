// components/FeatureCard.js
import React from 'react';
import styles from '../styles/FeatureSection.module.css';

const FeatureCard = ({ title, imageSrc, description }) => {
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={imageSrc} alt={title} />
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

export default FeatureCard;
// 