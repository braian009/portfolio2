import * as React from "react";
import styles from "./taglist.module.css";
import { motion } from "framer-motion";
import LineHorizontal from "./LineHorizontal";
import LineVertical from "./LineVertical";

const TagList = ({ items, keyName }) => {
  const listVariants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    shown: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.4,
        type: "spring",
        stiffness: 400,
        damping: 75,
        when: 'beforeChildren',
        staggerChildren: 0.5,
      },
    },
  };

  const lineVariants = {
    hidden: {
      opacity: 0,
    },
    shown: {
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 1.2,
      },
    },
  };

  return (
    <motion.ul
      className={styles.tagsContainer}
      initial="hidden"
      whileInView="shown"
      variants={listVariants}
    >
      <LineVertical
        side={"left"}
        width={"1px"}
        height={"80%"}
        skew={"0deg"}
        backgroundColor={"#3aa885"}
        borderRadius={"0px"}
        luminescence={true}
      />
      {items.map((item, i) => {
        return (
          <li key={`${keyName}-${i}`} className={styles.tagContainer}>
            {item}
            <motion.div
              initial="hidden"
              whileInView="shown"
              variants={lineVariants}
            >
              <LineHorizontal
                height={"2px"}
                width={"50%"}
                backgroundColor={"#3aa885"}
                side={"bottom"}
                borderRadius={"0"}
                skew={"-35deg"}
                luminescence={true}
              />
            </motion.div>
          </li>
        );
      })}
    </motion.ul>
  );
};

export default TagList;
