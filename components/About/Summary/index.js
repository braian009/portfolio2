import * as React from "react";

import StackedItems from "./StackedItems";
import LineDecoration from "@/components/Varied/LineDecoration";
import { motion } from "framer-motion";

import styles from "./summary.module.css";

const values = [
  "The fundamentals first",
  "Books and documentations as source",
  "Attention to details",
  "Few sessions, long hours",
];

const Summary = () => {
  return (
    <motion.div
      className={styles.summaryContainer}
      initial={{ opacity: 0, x: 100 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.4,
          delay: 0.6,
          type: "spring",
          stiffness: 400,
          damping: 75,
        },
      }}
      viewport={{ once: "true" }}
      style={{
        position: "absolute",
        width: "100%",
        top: 0,
        bottom: 0,
      }}
    >
      <div>
        <h4>Things that shaped my learning</h4>
        <p>
          The learning process wasn&apos;t easy at all, insecurities about my
          knowledge were recurring. But today I can say that I&apos;m in a
          situation of satisfaction and enthusiasm for what I&apos;ve learned
          and for what is to come. Here are some of the key aspects of my
          journey, which in some way resume my personal approach to learn and
          work:
        </p>
        <LineDecoration
          width={"4px"}
          height={"100%"}
          bottom={"0"}
          backgroundColor={"#bfd7de"}
          left={"-8px"}
        />
      </div>
      <StackedItems items={values} />
    </motion.div>
  );
};

export default Summary;
