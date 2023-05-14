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
      duration: 4.5,
      type: "spring",
    },
  },
};

const content = [
  {
    title: "Origins",
    description:
      "Having taken python as an initial tool, after some automations and small projects, django for the backend was the way to go next to postgreSQL",
  },
  {
    title: "Progress",
    description:
      "Today learning is more inclined to the frontend, the use of react and its extensive ecosystem through next.js is what keeps me busy and entertained at the moment",
  },
  {
    title: "Aspirations",
    description:
      "The goal ahead is to get a long-term job that allows me to grow both professionally and personally, contributing my knowledge to achieve common team goals.",
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
