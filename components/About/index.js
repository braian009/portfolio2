import * as React from "react";
import Image from "next/image";
import styles from "./about.module.css";
import Cards from "./Cards";
import Summary from "./Summary";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const About = () => {
  const [active, setActive] = React.useState(0);
  const [summaryActive, setSummaryActive] = React.useState(false);

  const onChangeCard = (i) => {
    setActive(i);
  };

  return (
    <div className={styles.aboutContainer}>
      <Image
        src={`/./assets/about/aboutpic${active}.jpg`}
        fill
        alt={""}
        style={{ objectFit: "cover", opacity: 0.04 }}
      />
      <div className={styles.aboutInner}>
        <h1>About</h1>
        <button
          className={styles.toggleButton}
          onClick={() => setSummaryActive(!summaryActive)}
        >
          H
        </button>
        <Cards onChangeCard={onChangeCard} />
      </div>
      <AnimatePresence>
        {summaryActive && (
          <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
            transition={{
              type: 'spring',
              ease: 'easeOut', 
              duration: 0.5,
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
