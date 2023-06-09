import * as react from "react";

import { motion } from "framer-motion";
import LineDecoration from "@/components/Varied/LineDecoration";

import styles from "./InfoText.module.css";

const InfoText = () => {
  return (
    <div className={styles.infoText}>
      <div className={styles.name}>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,

            transition: {
              type: "spring",
              stiffness: 400,
              damping: 75,
              duration: 0.4,
              delay: 1.2,
            },
          }}
          viewport={{ once: "true" }}
        >
          Braian
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: 100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 75,
              duration: 0.4,
              delay: 1.6,
            },
          }}
          viewport={{ once: "true" }}
        >
          Yanquin
        </motion.h1>
      </div>

      <motion.h4
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { delay: 2, duration: 0.8 },
        }}
        viewport={{ once: "true" }}
        whileHover={{color: "#f8f8f8"}}
      >
        Fullstack developer
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: [0, 1],
            transition: {
              delay: 3,
              duration: 1.2,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          viewport={{ once: "true" }}
        >
          <LineDecoration
            left={"0"}
            top={"0"}
            height={"100%"}
            width={"2px"}
            luminescence
            backgroundColor={"#2c8c6d"}
          />
        </motion.div>
      </motion.h4>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { delay: 2, duration: 0.8 },
        }}
        viewport={{ once: "true" }}
      >
        Driven by learning and inspired by the possibilities in my near future
      </motion.p>
    </div>
  );
};

export default InfoText;
