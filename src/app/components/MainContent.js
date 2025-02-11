// components/MainContent.js
import styles from '../styles/Home.module.css';
import Image from 'next/image';

const MainContent = () => {
  return (
    <section className={styles.mainContent}>
      <div className={styles.textContainer}>
        <h1>Word Wizardry</h1>
        <p>Unleash your inner lexicon sorcerer! Dive into a world of words and discover the magic hidden in every letter. Ready to conjure some vocabulary?</p>
        <button className={styles.startBtn}>Start Searching</button>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/lobrary.webp" alt="Word Wizardry" width={500} height={500} />
      </div>
    </section>
  );
};

export default MainContent;
