import * as React from "react";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h1>Contact me</h1>
        <div className={styles.socialsContainer}>
            <ul>
                <li>4</li>
                <li>4</li>
                <li>4</li>
            </ul>
        </div>
      </div>
    </div>
  );
};


export default Contact;