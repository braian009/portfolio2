import * as React from "react";

import LineDecoration from "@/components/Varied/LineDecoration";
import { motion } from "framer-motion";

import styles from './Location.module.css';

const Location = () => {
  return (
    <motion.div
      className={styles.location}
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
      Rio Negro, Argentina.
      <LineDecoration
        width={"100vw"}
        height={"1px"}
        bottom={"0"}
        left={"0"}
        backgroundColor={"#bfd7de"}
        luminescence
      />
    </motion.div>
  );
};

export default Location;
