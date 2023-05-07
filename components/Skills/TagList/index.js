import * as React from "react";
import styles from "./taglist.module.css";
import { motion } from "framer-motion";
import LineHorizontal from "./LineHorizontal";

const TagList = ({ items, keyName }) => {
  return (
    <motion.ul
      className={styles.tagsContainer}
      initial={{
        opacity: 0,
        x: 100,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.4,
          type: "spring",
          stiffness: 400,
          damping: 75,
        },
      }}
    >
      {items.map((item, i) => {
        return (
          <li key={`${keyName}-${i}`} className={styles.tagContainer}>
            {item}
            <LineHorizontal
              height={"2px"}
              width={"50%"}
              backgroundColor={"#3aa885"}
              side={"bottom"}
              borderRadius={"0"}
              skew={"-35deg"}
            />
          </li>
        );
      })}
    </motion.ul>
  );
};

export default TagList;
