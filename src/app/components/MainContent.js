// components/MainContent.js
import styles from "../styles/Home.module.css";
// import Image from "next/image";

const MainContent = () => {
  return (
    <div>
      <section className={styles.mainContent}>
        <div className={styles.textContainer}>
          <h1>English-Welsh.net</h1>
          <p>
            This is not just an ordinary English to Bangla dictionary & Bangla
            to English dictionary. This dictionary has the largest database for
            word meaning. It does not only give you English to Bangla and Bangla
            to English word meaning, it provides English to English word meaning
            along with Antonyms, Synonyms, Examples, Related words and Examples
            from your favorite TV Shows. This dictionary helps you to search
            quickly for Bangla to English translation, English to Bangla
            translation. It has more than 500,000 word meaning and is still
            growing. This English to Bangla dictionary also provides you an
            Android application for your offline use. The dictionary has mainly
            three features: translate English words to Bangla, translate Bangla
            words to English, copy & paste any paragraph in the Read Text box
            then tap on any word to get instant word meaning. This website also
            provides you English Grammar, TOEFL and most common words.
          </p>
          <button className={styles.startBtn}>Start Searching</button>
        </div>
        {/* <div className={styles.imageContainer}>
        <Image
          src="/lobrary.webp"
          alt="Word Wizardry"
          width={500}
          height={500}
        />
      </div> */}
        <div className={styles.imageContainer}>
          <video autoPlay loop muted playsInline className={styles.video}>
            <source src="/EnglishWelsh1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      {/* <div className={styles.buttonContainer}>
        <button className={styles.heroButton}>
          <a
            href="https://www.bdword.com/bengali-to-english-dictionary"
            title="Bangla to English Dictionary"
          >
            Bangla to English Dictionary
          </a>
        </button>
        <button className={styles.heroButton}>
          <a
            href="https://www.bdword.com/english-to-bengali-read-text-with-translation"
            title="Read Text"
          >
            Read Text
          </a>
        </button>
        <button className={styles.heroButton}>
          <a
            href="https://www.bdword.com/english-to-bengali-dictionary-favourite-words"
            title="Browse Favorite Words"
          >
            Favorite Words
          </a>
        </button>
        <button className={styles.heroButton}>
          <a
            href="https://www.bdword.com/english-to-bengali-dictionary-learn-ten-words-everyday"
            title="Learn Ten Words Everyday"
          >
            Learn Words
          </a>
        </button>
        <button className={styles.heroButton}>
          <a
            href="https://www.bdword.com/english-to-bengali-dictionary-vocabulary-game"
            title="Play Vocabulary Games"
          >
            Vocabulary Games
          </a>
        </button>
        <button className={styles.heroButton}>
          <a
            href="https://www.bdword.com/english-to-bengali-dictionary-fill-in-the-blanks-page-1"
            title="Learn Fill in the Blanks"
          >
            Fill in the Blanks
          </a>
        </button>
        <button className={styles.heroButton}>
          <a
            href="https://www.bdword.com/english-to-bengali-dictionary-search-history"
            title="Browse Word Search History"
          >
            Word Search History
          </a>
        </button>
      </div> */}
    </div>
  );
};

export default MainContent;
