import * as React from "react";
import styles from "./contact.module.css";
import EnvelopeIcon from "../Varied/EnvelopeIcon";
import LinkedinIcon from "../Varied/LinkedinIcon";
import WhatsappIcon from "../Varied/WhatsappIcon";
import { motion } from "framer-motion";
import BrandIcon from "../Varied/BrandIcon";
import LineDecoration from "../Varied/LineDecoration";
import ListItemAnimated from "../Varied/ListItemAnimated";


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
              delay: 0.4,
            },
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
            <ListItemAnimated delay={0.8}>
              <a
                href="https://linkedin.com/in/braian-yanquin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon />
              </a>
            </ListItemAnimated>
            <ListItemAnimated delay={1.2}
            >
              <button onClick={handleSendEmail}>
                <EnvelopeIcon />
              </button>
            </ListItemAnimated>
            <ListItemAnimated delay={1.6}
            >
              <a
                href="https://wa.me/5492944700327"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsappIcon />
              </a>
            </ListItemAnimated>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
