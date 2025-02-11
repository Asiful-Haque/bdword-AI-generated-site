// components/Header.js
import styles from '../styles/Home.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Search</a></li>
          <li><a href="#">About</a></li>
        </ul>
        <button className={styles.getStartedBtn}>Get Started</button>
      </nav>
    </header>
  );
};

export default Header;
