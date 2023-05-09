import * as React from "react";

import { motion } from "framer-motion";

import styles from './Socials.module.css';

const Socials = () => {
  return (
    <motion.div
      className={styles.socials}
      initial={{ x: 100, opacity: 0 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          delay: 2.4,
          duration: 0.4,
          type: "spring",
          stiffness: 400,
          damping: 75,
        },
      }}
    >
      <div>4</div>
      <div>4</div>
      <div>4</div>
    </motion.div>
  );
};

export default Socials;
