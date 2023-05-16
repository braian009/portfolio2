import * as React from "react";

import Image from "next/image";
import Cards from "./Cards";
import Summary from "./Summary";

import { motion, AnimatePresence } from "framer-motion";
import InfoIcon from "../Varied/InfoIcon";

import styles from "./about.module.css";


const About = () => {
  const [active, setActive] = React.useState(0);
  const [summaryActive, setSummaryActive] = React.useState(false);

  const onChangeCard = (i) => {
    setActive(i);
  };

  return (
    <div className={styles.aboutContainer} name="about">
      <Image
        src={`/assets/about/aboutpic${active}.jpg`}
        fill
        alt={""}
        style={{ objectFit: "cover", opacity: 0.04 }}
      />
      <div className={styles.aboutInner}>
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, stiffness: 400, damping: 75 },
          }}
          viewport={{ once: "true" }}
        >
           About me
        </motion.h1>

        <button
          className={styles.toggleButton}
          onClick={() => setSummaryActive(!summaryActive)}
        >
          <InfoIcon />
        </button>
        <Cards activeCard={active} onChangeCard={onChangeCard} />
      </div>
      <AnimatePresence>
        {summaryActive && (
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              width: "100%",
              backgroundImage: `url(/assets/about/clouds.jpg)`,

              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.4,
            }}
          >
            <Summary />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;
