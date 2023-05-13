import * as React from "react";
import styles from "./contact.module.css";
import EnvelopeIcon from "../Varied/EnvelopeIcon";
import LinkedinIcon from "../Varied/LinkedinIcon";
import WhatsappIcon from "../Varied/WhatsappIcon";
import { motion } from "framer-motion";
import BrandIcon from "../Varied/BrandIcon";
import LineDecoration from "../Varied/LineDecoration";

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
      <BrandIcon />
      <div className={styles.inner}>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
          transition: {
            duration: 1.2,
            delay: 0.4
          }
          }}
        >
          Contact me
          <LineDecoration
            width={"100vw"}
            height={"1px"}
            left={"-100vw"}
            top={"50%"}
            backgroundColor={"#bfd7de"}
            luminescence
          />
          <LineDecoration
            width={"100vw"}
            height={"1px"}
            right={"-100vw"}
            top={"50%"}
            backgroundColor={"#bfd7de"}
            luminescence
          />
        </motion.h1>
        <div className={styles.socialsContainer}>
          <ul>
            <motion.li
              variants={itemVariant}
              whileHover="onHover"
              whileTap="onTap"
              custom={"1.2"}
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
              custom={"1.6"}
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
              custom={"2"}
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
