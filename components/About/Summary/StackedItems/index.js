import React from "react";

import { motion } from "framer-motion";
import LineDecoration from "@/components/Skills/TagList/LineDecoration";
import styles from "./StackedItems.module.css";

const StackedItems = ({ items }) => {
  return (
    <ul className={styles.stackedItemsContainer}>
      {items.map((item, i) => {
        return (
          <motion.li
            key={`stackedItem${i}`}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.4,
                delay: 0.4,
                type: "spring",
                stiffness: 400,
                damping: 75,
              },
            }}
          >
            {item}
            <LineDecoration
              left={"0"}
              right={"0"}
              bottom={"0"}
              height={"2px"}
              backgroundColor={"#f8f8f8"}
              luminescence
            />
          </motion.li>
        );
      })}
    </ul>
  );
};

export default StackedItems;
