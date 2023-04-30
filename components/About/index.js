import * as React from "react";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutInner}>
        <h1>About</h1>

        <div className={styles.cardsContainer}>
          <div className={styles.cardContainer}>
            <h3>title</h3>
            <p>
              Fugiat veniam cupidatat est sint velit reprehenderit culpa culpa
              laborum laborum pariatur Lorem. culpa culpa laborum laborum
              pariatur Lorem.
            </p>
          </div>
          <div className={styles.cardContainer}>
            <h3>title</h3>
            <p>
              Fugiat veniam cupidatat est sint velit reprehenderit culpa culpa
              laborum laborum pariatur Lorem. culpa culpa laborum laborum
              pariatur Lorem.
            </p>
          </div>
          <div className={styles.cardContainer}>
            <h3>title</h3>
            <p>
              Fugiat veniam cupidatat est sint velit reprehenderit culpa culpa
              laborum laborum pariatur Lorem. culpa culpa laborum laborum
              pariatur Lorem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
