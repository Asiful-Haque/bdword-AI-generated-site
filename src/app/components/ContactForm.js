// components/ContactForm.js
import React from "react";
import styles from "../styles/ContactForm.module.css";

const ContactForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contactBox}>
            <h2>Get in Touch with Us Today!</h2>
            {/* <div className="contactInfo">0 */}
            <div className={styles.contactInfo}>
                <p>+1-800-555-0199</p>
                <button className={styles.button}>Call Us</button>
            </div>
            <hr />
            <div className={styles.contactInfo}>
                <p>info@wordexplorer.com</p>
                <button className={styles.button}>Email Us</button>
            </div>
            <hr />
            <div className={styles.contactInfo}>
                <p>Bangladesh</p>
                <button className={styles.button}>Show Map</button>
            </div>
            <hr />
      </div>
      <div className={styles.formBox}>
        <h2>We Love Hearing from You!</h2>
        <input type="text" placeholder="Name" className={styles.input} />
        <input type="email" placeholder="Email" className={styles.input} />
        <input type="tel" placeholder="Phone" className={styles.input} />
        <button className={styles.submitButton}>Send Message</button>
      </div>
    </div>
  );
};

export default ContactForm;
