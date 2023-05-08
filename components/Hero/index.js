import * as React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import LineDecoration from "../Skills/TagList/LineDecoration";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <motion.div
          className={styles.picture}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.4,
              type: "spring",
              stiffness: 400,
              damping: 75,
            },
          }}
        >
          <Image src="/./assets/profilepicture.jpg" alt={""} fill />
        </motion.div>
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
                  delay: 3.4,
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
                backgroundColor={"#398197"}
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
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
