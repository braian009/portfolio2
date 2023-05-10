import * as React from "react";
import styles from "./navbar.module.css";
import Logo from "./Logo";
import BurgerIcon from "./NavIcon";
import { motion, useScroll } from "framer-motion";
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
  const { scrollX } = useScroll();
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
            <motion.li variants={navItemVariants}>
              About
              <LineDecoration
                top={"50%"}
                right={"0"}
                height={"50%"}
                translateY={"-50%"}
                width={"1px"}
                backgroundColor={"#393939"}
                skew={"15deg"}
                luminescence
              />
            </motion.li>

            <motion.li variants={navItemVariants}>
              Skills
              <LineDecoration
                top={"50%"}
                right={"0"}
                height={"50%"}
                translateY={"-50%"}
                width={"1px"}
                backgroundColor={"#3aa885"}
                skew={"15deg"}
                luminescence
              />
            </motion.li>
            <motion.li variants={navItemVariants}>
              Projects
              <LineDecoration
                top={"50%"}
                right={"0"}
                height={"50%"}
                translateY={"-50%"}
                width={"1px"}
                backgroundColor={"#3aa885"}
                skew={"15deg"}
                luminescence
              />
            </motion.li>
            <motion.li variants={navItemVariants}>
              Contact
              <LineDecoration
                top={"50%"}
                right={"0"}
                height={"50%"}
                translateY={"-50%"}
                width={"1px"}
                backgroundColor={"#3aa885"}
                skew={"15deg"}
                luminescence
              />
            </motion.li>
            <LineDecoration
              top={"0"}
              left={"0"}
              height={"100%"}
              width={"1px"}
              backgroundColor={"#3aa885"}
              luminescence
            />
          </motion.ul>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
