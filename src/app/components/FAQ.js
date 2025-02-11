// components/FAQ.js
"use client"
import React, { useState } from 'react';
import styles from '../styles/FAQ.module.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close the currently opened question
    } else {
      setOpenIndex(index); // Open the selected question
    }
  };

  return (
    <div className={styles.faqContainer}>
      <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
      <div className={styles.faqList}>
        <div className={styles.faqItem}>
          <div 
            className={styles.question}
            onClick={() => toggleAnswer(0)}
          >
            How do I use the search bar?
          </div>
          {openIndex === 0 && (
            <div className={styles.answer}>
              To use the search bar, simply type the word you are looking for and hit enter.
            </div>
          )}
        </div>
        <div className={styles.faqItem}>
          <div 
            className={styles.question}
            onClick={() => toggleAnswer(1)}
          >
            Can I suggest new features?
          </div>
          {openIndex === 1 && (
            <div className={styles.answer}>
              Yes, we welcome suggestions. Please submit them through the feedback section.
            </div>
          )}
        </div>
        <div className={styles.faqItem}>
          <div 
            className={styles.question}
            onClick={() => toggleAnswer(2)}
          >
            Is there a mobile app?
          </div>
          {openIndex === 2 && (
            <div className={styles.answer}>
              Currently, there is no mobile app, but we are planning one in the future.
            </div>
          )}
        </div>
        <div className={styles.faqItem}>
          <div 
            className={styles.question}
            onClick={() => toggleAnswer(3)}
          >
            How can I contact support?
          </div>
          {openIndex === 3 && (
            <div className={styles.answer}>
              You can contact support via the &quot;Contact Us&quot; page or email us directly.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
