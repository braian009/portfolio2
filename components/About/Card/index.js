import * as React from "react";

import { motion } from "framer-motion";
import LineDecoration from "@/components/Varied/LineDecoration";

import styles from "./Card.module.css";

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

const Card = ({ id, title, description, onChangeCard }) => {
  return (
    <motion.div className={styles.cardContainer}>
      <motion.div className={styles.cardTitle}>
        <motion.h3
          whileTap={{ x: 10, transiton: { type: "spring", duration: 0.2 } }}
          whileHover={{
            scaleX: 1.02,
            color: "#398197",
            transition: { duration: 0.3, type: "spring" },
          }}
          onClick={() => onChangeCard(id)}
        >
          {title}
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

      <p>{description}</p>
    </motion.div>
  );
};

export default Card;
