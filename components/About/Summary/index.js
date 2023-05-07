import * as React from "react";
import styles from "./summary.module.css";
import { motion } from "framer-motion";

const Summary = () => {
  return (
    <div className={styles.summaryContainer}>
      <div>
        <h4>some title of some kind</h4>
        <p>
          Non qui velit consequat sit aute nulla elit qui aute exercitation et
          qui. Non qui velit consequat sit aute nulla elit qui aute exercitation
          et qui. Non qui velit consequat sit aute nulla elit qui aute
          exercitation et qui.
        </p>
      </div>
      <ul>
        <li>some value</li>
        <li>some value</li>
        <li>some value</li>
        <li>some value</li>
      </ul>
    </div>
  );
};

export default Summary;
