// components/TwoPart.js
import React from 'react';
import Image from 'next/image';
import styles from '../styles/TwoPart.module.css';

const TwoPart = () => {
  return (
    <section className={styles.twoPartContainer}>
      <div className={styles.leftSide}>
        <Image
          className={styles.image}
          src="next.svg" // make sure to place your image in the public/images folder
          alt="Laptop with analytics"
          width={500} // You can adjust the width and height based on the design
          height={300}
          layout="intrinsic" // maintains the aspect ratio of the image
        />
      </div>
      <div className={styles.rightSide}>
        <h2 className={styles.title}>Join the Word Revolution</h2>
        <p className={styles.description}>
          Are you ready to embark on a thrilling journey through the world of words? Our platform is designed to challenge your intellect and entertain your senses. Get ready to search, discover, and conquer!
        </p>
        <button className={styles.startButton}>Start Now</button>
      </div>
    </section>
  );
};

export default TwoPart;
