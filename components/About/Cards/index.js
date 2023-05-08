import * as React from "react";
import styles from "./cards.module.css";
import { motion } from "framer-motion";
import LineDecoration from "@/components/Skills/TagList/LineDecoration";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  shown: {
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 1.2,
      type: "spring",
    },
  },
};

const lineVariants = {
  hidden: {
    scaleX: 0,
  },
  shown: {
    scaleX: 1,
    transition: {
      delay: 0.9,
      duration: 1.4,
    },
  },
};

const Cards = ({ onChangeCard }) => {
  return (
    <motion.div
      className={styles.cardsContainer}
      variants={containerVariants}
      initial="hidden"
      whileInView="shown"
    >
      <motion.div className={styles.cardContainer}>
        <motion.div className={styles.cardTitle}>
          <motion.h3
            whileTap={{ x: 10, transiton: { type: "spring", duration: 0.2 } }}
            whileHover={{
              scaleX: 1.02,
              color: "#398197",
              transition: { duration: 0.3, type: "spring" },
            }}
            onClick={() => onChangeCard(0)}
          >
            title
          </motion.h3>
          <motion.div
            initial="hidden"
            whileInView="shown"
            variants={lineVariants}
          >
            <LineDecoration
              bottom={"0"}
              right={"-100vw"}
              width={"100vw"}
              backgroundColor={"#398197"}
              height={"1px"}
              opacity={"0.5"}
            />
          </motion.div>
        </motion.div>

        <p>
          Fugiat veniam cupidatat est sint velit reprehenderit culpa culpa
          laborum laborum pariatur Lorem. culpa culpa laborum laborum pariatur
          Lorem.
        </p>
      </motion.div>
      <motion.div className={styles.cardContainer}>
        <div className={styles.cardTitle}>
          <motion.h3
            whileTap={{ x: 10, transiton: { type: "spring", duration: 0.2 } }}
            whileHover={{
              scaleX: 1.02,
              color: "#398197",
              transition: { duration: 0.3, type: "spring" },
            }}
            onClick={() => onChangeCard(1)}
          >
            title
          </motion.h3>
          <motion.div
            initial="hidden"
            whileInView="shown"
            variants={lineVariants}
          >
            <LineDecoration
              bottom={"0"}
              right={"-100vw"}
              width={"100vw"}
              backgroundColor={"#398197"}
              height={"1px"}
              opacity={"0.5"}
            />
          </motion.div>
        </div>

        <p>
          Fugiat veniam cupidatat est sint velit reprehenderit culpa culpa
          laborum laborum pariatur Lorem. culpa culpa laborum laborum pariatur
          Lor7m.
        </p>
      </motion.div>
      <motion.div className={styles.cardContainer}>
        <div className={styles.cardTitle}>
          <motion.h3
            whileTap={{ x: 10, transiton: { type: "spring", duration: 0.2 } }}
            whileHover={{
              scaleX: 1.02,
              color: "#398197",
              transition: { duration: 0.3, type: "spring" },
            }}
            onClick={() => onChangeCard(2)}
          >
            title
          </motion.h3>
          <motion.div
            initial="hidden"
            whileInView="shown"
            variants={lineVariants}
          >
            <LineDecoration
              bottom={"0"}
              right={"-100vw"}
              width={"100vw"}
              backgroundColor={"#398197"}
              height={"1px"}
              opacity={"0.5"}
            />
          </motion.div>
        </div>

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
