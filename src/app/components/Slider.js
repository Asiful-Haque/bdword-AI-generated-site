// components/TestimonialSlider.js
"use client"
import React, { useState } from 'react';
import styles from '../styles/Slider.module.css';

const Slider = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider}>
        <div className={styles.testimonialCard}>
          <h3>{testimonials[currentIndex].name}</h3>
          <p>{testimonials[currentIndex].message}</p>
          <span>{testimonials[currentIndex].date}</span>
        </div>
      </div>

      <div className={styles.navigation}>
        <button className={styles.navButton} onClick={prevTestimonial}>
          ◀
        </button>
        <button className={styles.navButton} onClick={nextTestimonial}>
          ▶
        </button>
      </div>
    </div>
  );
};

export default Slider;
