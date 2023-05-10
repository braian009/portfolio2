import * as React from "react";
import styles from "./TagLis.module.css";
import { motion } from "framer-motion";
import LineDecoration from "../../Varied/LineDecoration";

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
      
      {items.map((item, i) => {
        return (
          <li key={`${keyName}-${i}`} className={styles.tagContainer}>
            {item}
            <motion.div
              initial="hidden"
              whileInView="shown"
              variants={lineVariants}
            >
              <LineDecoration
                height={"2px"}
                width={"50%"}
                backgroundColor={"#398197"}
                translateX={'-50%'}
                bottom={'0'}
                left={'50%'}
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
