import * as React from "react";
import styles from "./summary.module.css";
import { motion } from "framer-motion";
import LineDecoration from "@/components/Varied/LineDecoration";
import StackedItems from "./StackedItems";

const values = ["some value", "some value", "some value", "some value"];

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
      style={{
        position: "absolute",
        width: "100%",
        top: 0,
        bottom: 0,
      }}
    >
      <div>
        <h4>some title of some kind</h4>
        <p>
          Non qui velit consequat sit aute nulla elit qui aute exercitation et
          qui. Non qui velit consequat sit aute nulla elit qui aute exercitation
          et qui. Non qui velit consequat sit aute nulla elit qui aute motion.
          exercitation et qui.
        </p>
        <LineDecoration
          width={"4px"}
          height={"100%"}
          bottom={"0"}
          backgroundColor={"hsl(194, 45%, 21%)"}
          left={"-8px"}
        />
      </div>
      <StackedItems items={values} />
    </motion.div>
  );
};

export default Summary;
