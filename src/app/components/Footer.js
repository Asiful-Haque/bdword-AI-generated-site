// components/Footer.js
import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <p>
          © 2024-2026 | English Bangla Dictionary | All Rights Reserved By <a href="#" className={styles.link}>English-Welsh</a>
        </p>
      </div>
      <div className={styles.right}>
        <a href="#" className={styles.link}>About Us</a>
        <a href="#" className={styles.link}>Privacy</a>
        <a href="#" className={styles.link}>Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
