import * as React from "react";
import styles from "./navbar.module.css";
import Logo from "./Logo";
import BurgerIcon from "./BurgerIcon";
import { motion, useScroll } from "framer-motion";

const navListVariants = {
  open: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 0.7,
      staggerChildren: 0.07,
      delayChildren: 0.2,
      type: "spring",
    },
  },
  close: {
    clipPath: "inset(0% 0% 0% 100%)",
    transition: {
      duration: 0.7,
      type: "spring",
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
  const { scrollX } = useScroll();
  return (
    <motion.nav className={styles.container}
    initial={{ opacity: 0, y: -50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 75,
                  duration: 0.6,
                  delay: 3,
                },
              }}
    >
      <div className={styles.inner}>
        <div className={styles.navLogo}>
          <Logo />
        </div>
        <motion.div
          className={styles.navMenu}
          animate={`${isOpen ? "open" : "close"}`}
        >
          <button onClick={() => setIsOpen(!isOpen)}>
            <BurgerIcon />
          </button>
          <motion.ul variants={navListVariants}>
            <motion.li variants={navItemVariants}>About</motion.li>
            <motion.li variants={navItemVariants}>Skills</motion.li>
            <motion.li variants={navItemVariants}>Projects</motion.li>
            <motion.li variants={navItemVariants}>Contact</motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
