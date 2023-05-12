import * as React from "react";
import styles from "./contact.module.css";
import EnvelopeIcon from "../Varied/EnvelopeIcon";
import LinkedinIcon from "../Varied/LinkedinIcon";
import WhatsappIcon from "../Varied/WhatsappIcon";
import { motion } from "framer-motion";

const itemVariant = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  shown: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i,
      type: "spring",
      stiffness: 400,
      damping: 75,
    },
  }),
  onHover: {
    scale: 1.1,
    transition: {
      duration: 0.4,
      type: "spring",
    },
  },
  onTap: {
    scale: 0.99,
    transition: {
      duration: 0.4,
      type: "spring",
    },
  },
};

const Contact = () => {
  const side = process.browser ? "client" : "server";

  const handleSendEmail = () => {
    if (side === "server") return;

    const mailToLink = "mailto:braianyanquin@gmail.com";

    window.location.href = mailToLink;
  };
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h1>Contact me</h1>
        <div className={styles.socialsContainer}>
          <ul>
            <motion.li
              variants={itemVariant}
              whileHover="onHover"
              whileTap="onTap"
              custom={"0.4"}
              initial="hidden"
              whileInView="shown"
            >
              <a
                href="https://linkedin.com/in/braian-yanquin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon />
              </a>
            </motion.li>
            <motion.li
              variants={itemVariant}
              whileHover="onHover"
              whileTap="onTap"
              custom={"0.8"}
              initial="hidden"
              whileInView="shown"
            >
              <button onClick={handleSendEmail}>
                <EnvelopeIcon />
              </button>
            </motion.li>
            <motion.li
              variants={itemVariant}
              whileHover="onHover"
              whileTap="onTap"
              custom={"1.2"}
              initial="hidden"
              whileInView="shown"
            >
              <a
                href="https://wa.me/5492944700327"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsappIcon />
              </a>
            </motion.li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
