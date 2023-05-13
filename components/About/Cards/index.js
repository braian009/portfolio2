import * as React from "react";

import Card from "../Card";
import { motion } from "framer-motion";

import styles from "./Cards.module.css";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  shown: {
    opacity: 1,
    transition: {
      delay: 0.6,
      duration: 1.2,
      type: "spring",
    },
  },
};

const content = [
  {
    title: "title",
    description:
      "Fugiat veniam cupidatat est sint velit reprehenderit culpa culpa laborum laborum pariatur Lorem. culpa culpa laborum laborum pariatur Lor7m.",
  },
  {
    title: "title",
    description:
      "Fugiat veniam cupidatat est sint velit reprehenderit culpa culpa laborum laborum pariatur Lorem. culpa culpa laborum laborum pariatur Lor7m.",
  },
  {
    title: "title",
    description:
      "Fugiat veniam cupidatat est sint velit reprehenderit culpa culpa laborum laborum pariatur Lorem. culpa culpa laborum laborum pariatur Lor7m.",
  },
];

const Cards = ({ activeCard, onChangeCard }) => {
  return (
    <motion.div
      className={styles.cardsContainer}
      variants={containerVariants}
      initial="hidden"
      whileInView="shown"
    >
      {content.map((card, i) => {
        return (
          <Card
            id={i}
            key={`aboutCard${i}`}
            activeCard={activeCard}
            title={card.title}
            description={card.description}
            onChangeCard={onChangeCard}
          />
        );
      })}
    </motion.div>
  );
};

export default Cards;
