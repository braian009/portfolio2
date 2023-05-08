import * as React from "react";
import styles from "./cards.module.css";
import { motion } from "framer-motion";


const containerVariants = {
  hidden: {
    opacity: 0,
  },
  shown: {
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 1.2,
      type: 'spring',
    }
  }
}

const Cards = ({ onChangeCard }) => {
  return (
    <motion.div className={styles.cardsContainer} variants={containerVariants} initial='hidden' whileInView='shown'>
      <motion.div className={styles.cardContainer} >
        <h3 onClick={() => onChangeCard(0)}>title</h3>
        <p>
          Fugiat veniam cupidatat est sint velit reprehenderit culpa culpa
          laborum laborum pariatur Lorem. culpa culpa laborum laborum pariatur
          Lorem.
        </p>
      </motion.div>
      <motion.div className={styles.cardContainer} >
        <h3 onClick={() => onChangeCard(1)}>title</h3>
        <p>
          Fugiat veniam cupidatat est sint velit reprehenderit culpa culpa
          laborum laborum pariatur Lorem. culpa culpa laborum laborum pariatur
          Lorem.
        </p>
      </motion.div>
      <motion.div className={styles.cardContainer} >
        <h3 onClick={() => onChangeCard(2)}>title</h3>
        <p>
          Fugiat veniam cupidatat est sint velit reprehenderit culpa culpa
          laborum laborum pariatur Lorem. culpa culpa laborum laborum pariatur
          Lorem.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Cards;
