
import * as React from 'react';
import styles from './navbar.module.css';
import Logo from './Logo';
import BurgerIcon from './BurgerIcon';


const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.navLogo}>
            <Logo/>
        </div>
        <div className={styles.navMenu}>
            <button><BurgerIcon/></button>
            <ul>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
