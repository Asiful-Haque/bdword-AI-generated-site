// components/FeatureSection.js
import React from 'react';
import FeatureCard from './FeatureCard';
import styles from '../styles/FeatureSection.module.css';

const FeatureSection = () => {
  return (
    <section className={styles.featureSection}>
      <h2 className={styles.sectionTitle}>Explore Our Word Features</h2>
      <div className={styles.cardContainer}>
        <FeatureCard 
          title="Epic Word Search" 
          imageSrc="next.jpg" 
          description="Uncover the vast world of words with our epic search tool."
        />
        <FeatureCard 
          title="Daily Word Challenge" 
          imageSrc="next.jpg" 
          description="Test your vocabulary every day with our word challenges."
        />
        <FeatureCard 
          title="Word of the Day" 
          imageSrc="next.jpg" 
          description="Discover a new word every day and expand your lexicon."
        />
        <FeatureCard 
          title="Community Buzz" 
          imageSrc="next.jpg" 
          description="Engage with the community and share your word discoveries."
        />
      </div>
    </section>
  );
};

export default FeatureSection;
