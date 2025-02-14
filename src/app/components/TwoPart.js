// components/TwoPart.js
import React from "react";
import Image from "next/image";
import styles from "../styles/TwoPart.module.css";
import Link from "next/link";

const TwoPart = () => {
  return (
    <section className={styles.twoPartContainer}>
      <div className={styles.leftSide}>
        <Image
          className={styles.image}
          src="/game.png" // make sure to place your image in the public/images folder
          alt="Laptop with analytics"
          width={600} // You can adjust the width and height based on the design
          height={400}
          layout="intrinsic" // maintains the aspect ratio of the image
        />
      </div>
      <div className={styles.rightSide}>
        <h2 className={styles.title}>Want to play exciting games?</h2>
        <p className={styles.description}>
          Are you ready to embark on a thrilling journey through the world of
          words? Our platform is designed to challenge your intellect and
          entertain your senses. Get ready to search, discover, and conquer!
        </p>
        <Link href="/game1/shuffle_game">
          <button className={styles.startButton}>Play Now</button>
        </Link>
      </div>
    </section>
  );
};

export default TwoPart;
