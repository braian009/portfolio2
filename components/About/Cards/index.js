import * as React from "react";

import Card from "../Card";
import { motion } from "framer-motion";

import aboutData from "@/data/about";
import styles from "./Cards.module.css";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  shown: {
    opacity: 1,
    transition: {
      delay: 0.6,
      duration: 4.5,
      type: "spring",
    },
  },
};

const Cards = ({ activeCard, onChangeCard }) => {
  return (
    <motion.div
      className={styles.cardsContainer}
      variants={containerVariants}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: "true" }}
    >
      {aboutData.map((card, i) => {
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
