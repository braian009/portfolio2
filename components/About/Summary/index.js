import * as React from "react";
import styles from "./summary.module.css";
import { motion } from "framer-motion";
import LineDecoration from "@/components/Skills/TagList/LineDecoration";
import StackedItems from "./StackedItems";

const values = ['some value', 'some value', 'some value', 'some value'];

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
      <StackedItems items={values}/>
    </div>
  );
};

export default Summary;
