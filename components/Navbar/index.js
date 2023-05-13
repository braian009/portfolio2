import * as React from "react";
import styles from "./navbar.module.css";
import Logo from "./Logo";
import BurgerIcon from "./NavIcon";
import { motion, useScroll } from "framer-motion";
import BrandIcon from "../Varied/BrandIcon";
import LineDecoration from "../Varied/LineDecoration";

const navListVariants = {
  open: {
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 0.4,
      staggerChildren: 0.07,
      delayChildren: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 75,
    },
  },
  close: {
    opacity: 0,
    clipPath: "inset(0% 0% 0% 100%)",
    transition: {
      duration: 0.4,
      type: "spring",
      stiffness: 400,
      damping: 75,
    },
  },
};

const navItemVariants = {
  open: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      ease: "easeOut",
      type: "spring",

      duration: 0.4,
    },
  },
  close: {
    opacity: 0,
    x: -30,
    y: -20,
    transition: {
      ease: "easeOut",
      type: "spring",
      duration: 0.4,
    },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.nav
      className={styles.container}
      initial={{ opacity: 0, y: -50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 75,
          duration: 0.6,
          delay: 2.4,
        },
      }}
      viewport={{ once: "true" }}
    >
      <div className={styles.inner}>
        <div className={styles.navLogo}>
          <BrandIcon />
        </div>
        <motion.div
          className={styles.navMenu}
          animate={`${isOpen ? "open" : "close"}`}
        >
          <button onClick={() => setIsOpen(!isOpen)}>
            <BurgerIcon />
          </button>
          <motion.ul variants={navListVariants}>
            <motion.li variants={navItemVariants}>
              About
              <LineDecoration
                width={"100vw"}
                height={"1px"}
                top={"50%"}
                translateY={"-50%"}
                backgroundColor={"#3aa885"}
                right={"-100vw"}
                luminescence
              />
            </motion.li>

            <motion.li variants={navItemVariants}>
              Skills
              <LineDecoration
                width={"100vw"}
                height={"1px"}
                top={"50%"}
                translateY={"-50%"}
                backgroundColor={"#3aa885"}
                right={"-100vw"}
                luminescence
              />
            </motion.li>
            <motion.li variants={navItemVariants}>
              Projects
              <LineDecoration
                width={"100vw"}
                height={"1px"}
                top={"50%"}
                translateY={"-50%"}
                backgroundColor={"#3aa885"}
                right={"-100vw"}
                luminescence
              />
            </motion.li>
            <motion.li variants={navItemVariants}>
              Contact
              <LineDecoration
                width={"100vw"}
                height={"1px"}
                top={"50%"}
                translateY={"-50%"}
                backgroundColor={"#3aa885"}
                right={"-100vw"}
                luminescence
              />
            </motion.li>
            
          </motion.ul>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
