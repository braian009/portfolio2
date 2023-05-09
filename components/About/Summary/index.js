import * as React from "react";
import styles from "./summary.module.css";
import { motion } from "framer-motion";
import LineDecoration from "@/components/Skills/TagList/LineDecoration";

const Summary = () => {
  return (
    <div className={styles.summaryContainer}>
      <div>
        <h4>some title of some kind</h4>
        <p>
          Non qui velit consequat sit aute nulla elit qui aute exercitation et
          qui. Non qui velit consequat sit aute nulla elit qui aute exercitation
          et qui. Non qui velit consequat sit aute nulla elit qui aute motion.
          exercitation et qui.
        </p>
        <LineDecoration
          left={"0"}
          bottom={"0"}
          top={"0"}
          width={"2px"}
          height={"100%"}
          backgroundColor={"#f8f8f8"}
          luminescence
        />
      </div>
      <ul>
        <motion.li
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
          some value
          <LineDecoration
            left={"0"}
            right={"0"}
            bottom={"0"}
            height={"2px"}
            backgroundColor={"#f8f8f8"}
            luminescence
          />
        </motion.li>
        <motion.li
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
          some value
          <LineDecoration
            left={"0"}
            right={"0"}
            bottom={"0"}
            height={"2px"}
            backgroundColor={"#f8f8f8"}
            luminescence
          />
        </motion.li>
        <motion.li
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
          some value
          <LineDecoration
            left={"0"}
            right={"0"}
            bottom={"0"}
            height={"2px"}
            backgroundColor={"#f8f8f8"}
            luminescence
          />
        </motion.li>
        <motion.li
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
          some value
          <LineDecoration
            left={"0"}
            right={"0"}
            bottom={"0"}
            height={"2px"}
            backgroundColor={"#f8f8f8"}
            luminescence
          />
        </motion.li>
      </ul>
    </div>
  );
};

export default Summary;
