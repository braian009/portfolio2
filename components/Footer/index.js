import * as React from "react";
import LineDecoration from "../Varied/LineDecoration";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div>
          Developed by <b>Braian Yanquín</b>
          <LineDecoration
            width={"11em"}
            top={"50%"}
            left={"-11em"}
            translateY={"-50%"}
            height={"1px"}
            backgroundColor={"#398197"}
            opacity={"0.4"}
          />
          <LineDecoration
            width={"11em"}
            top={"50%"}
            right={"-11em"}
            translateY={"-50%"}
            height={"1px"}
            backgroundColor={"#398197"}
            opacity={"0.4"}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
