import * as React from "react";

import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import LineDecoration from "@/components/Varied/LineDecoration";

import styles from "./Card.module.css";

const lineVariants = {
  hidden: {
    scaleX: 0,
  },
  shown: {
    scaleX: 1,
    transition: {
      delay: 0.8,
      duration: 1.8,
    },
  },
};

const Card = ({ id, title, description, activeCard, onChangeCard }) => {
  return (
    <motion.div className={styles.cardContainer}>
      <motion.div className={styles.cardTitle}>
        <motion.h3
          whileTap={{ x: 10, transiton: { type: "spring", duration: 0.2 } }}
          whileHover={{
            color: "#398197",
            transition: { duration: 0.4, type: "spring" },
          }}
          onClick={() => onChangeCard(id)}
        >
          {title}
          <AnimatePresence>
            {activeCard === id && (
              <motion.div
                initial={false}
                layoutId="cardTag"
                exit={{opacity: 0}}
                whileInView={{
                  opacity: [0, 1],
                  transition: {
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
                viewport={{ once: "true" }}
              >
                <LineDecoration
                  width={"2px"}
                  height={"90%"}
                  top={"50%"}
                  backgroundColor={"#398197"}
                  translateY={'-50%'}
                  left={"-8px"}
                  luminescence
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.h3>
        <motion.div
          initial="hidden"
          whileInView="shown"
          variants={lineVariants}
          viewport={{ once: "true" }}
        >
          <LineDecoration
            bottom={"0"}
            left={"0"}
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
