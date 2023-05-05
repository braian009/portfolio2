import * as React from "react";
import styles from "./cards.module.css";

const Cards = ({ onChangeCard }) => {
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.cardContainer}>
        <h3 onClick={() => onChangeCard(0)}>title</h3>
        <p>
          Fugiat veniam cupidatat est sint velit reprehenderit culpa culpa
          laborum laborum pariatur Lorem. culpa culpa laborum laborum pariatur
          Lorem.
        </p>
      </div>
      <div className={styles.cardContainer}>
        <h3 onClick={() => onChangeCard(1)}>title</h3>
        <p>
          Fugiat veniam cupidatat est sint velit reprehenderit culpa culpa
          laborum laborum pariatur Lorem. culpa culpa laborum laborum pariatur
          Lorem.
        </p>
      </div>
      <div className={styles.cardContainer}>
        <h3 onClick={() => onChangeCard(2)}>title</h3>
        <p>
          Fugiat veniam cupidatat est sint velit reprehenderit culpa culpa
          laborum laborum pariatur Lorem. culpa culpa laborum laborum pariatur
          Lorem.
        </p>
      </div>
    </div>
  );
};

export default Cards;
