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
      >
        Nisi id enim veniam nulla minim veniam laboris eiusmod excepteur
        eiusmod. Ullamco officia.
      </motion.p>
    </div>
  );
};

export default InfoText;
