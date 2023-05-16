import * as React from "react";

import { motion } from "framer-motion";
import LineDecoration from "@/components/Varied/LineDecoration";
import LocationIcon from "@/components/Varied/LocationIcon";

import styles from "./Location.module.css";

const Location = () => {
  return (
    <motion.div
      className={styles.location}
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          type: "spring",
          stiffness: 400,
          damping: 75,
        },
      }}
      viewport={{ once: "true" }}
    >
      <div>
        <LocationIcon />
      </div>
      Rio Negro, Argentina.
      <motion.div
        layout
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 2.4, delay: 2.4 } }}
        viewport={{ once: "true" }}
      >
        <LineDecoration
          width={"100%"}
          height={"1px"}
          bottom={"0"}
          left={"0"}
          backgroundColor={"#bfd7de"}
          luminescence
        />
      </motion.div>
    </motion.div>
  );
};

export default Location;
