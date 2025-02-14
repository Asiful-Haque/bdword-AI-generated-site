// Add this line at the top to specify this as a Client Component
"use client";

import React, { useState, useEffect, useCallback  } from 'react';
import styles from "../styles/Wordgame.module.css";


export default function WordGame({ originalWord }) {
  const [shuffledLetters, setShuffledLetters] = useState([]);
  const [userInput, setUserInput] = useState([]);
  const [message, setMessage] = useState('');
  const [droppedIndexes, setDroppedIndexes] = useState([]);

  // Separate shuffleWord function for reusability
  const shuffleWord = (word) => {
    const letters = word.split('');
    for (let i = letters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    return letters;
  };

  useEffect(() => {
    // Shuffle the letters when the component mounts
    setShuffledLetters(shuffleWord(originalWord));
  }, [originalWord]);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index);
  };

  const handleCheckMatch = useCallback(() => {
    const userWord = userInput.join(''); // Make sure to use the latest userInput
    if (userWord === originalWord) {
      setMessage("Congratulations! You've matched the word!");
    } else {
      setMessage("Try again!");
    }
  }, [userInput, originalWord]); 

  useEffect(() => {
    if (userInput.length === originalWord.length) {
      handleCheckMatch();
    }
  }, [userInput.length, originalWord.length, handleCheckMatch]);

  const handleDrop = (e) => {
    const index = e.dataTransfer.getData("text/plain");
    if (index) {
      const letter = shuffledLetters[index]; // Get the letter using the index
      setUserInput((prev) => [...prev, letter]);
      setDroppedIndexes((prev) => [...prev, parseInt(index)]); // Store the dropped index
    }
  };

  const handleReset = () => {
    setUserInput([]);
    setMessage('');
    setShuffledLetters(shuffleWord(originalWord)); // Use shuffleWord for reshuffling
    setDroppedIndexes([]); // Clear dropped indexes
  };

  return (
    <div className={styles.gameContainerForAvoidingGlobalStyles}>
      <div className={styles.wordGame}>
        <h2>Word Match Game</h2>
        <div className={styles.shuffledLetters}>
          {shuffledLetters.map((letter, index) => (
            <div
              key={index}
              draggable={!droppedIndexes.includes(index)} // Only allow dragging if index is not in droppedIndexes
              onDragStart={(e) => handleDragStart(e, index)}
              className={`${styles.letter} ${droppedIndexes.includes(index) ? styles.dropped : ''} ${styles.shuffledLetters}`}
            >
              {letter}
            </div>
          ))}
        </div>

        <div
          className={styles.dropArea}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <div className={styles.bind}>
            <h3>Drop Letters Here</h3>
            <div className={styles.userInput}>
              {userInput.map((letter, index) => (
                <span key={index} className={styles.droppedLetter}>{letter}</span>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          {/* <button className='chk-btn' onClick={handleCheckMatch}>Check Match</button> */}
          <button className={styles.chkBtn} onClick={handleReset}>Reset</button>
          <button className={styles.chkBtn} onClick={() => window.location.reload()}>
            Try Another
          </button>
          {message && <h4>{message}</h4>}
        </div>
      </div>
    </div>
  );
};