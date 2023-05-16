import * as React from "react";

import { motion } from "framer-motion";
import BurgerIcon from "./BurgerIcon";
import LineDecoration from "../Varied/LineDecoration";
import BrandIcon from "../Varied/BrandIcon";
import { Link } from "react-scroll";

import styles from "./navbar.module.css";

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
      duration: 2.4,
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
      duration: 0.8,
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
          <motion.ul variants={navListVariants}>
            <Link to="about" smooth={true} offset={-50} duration={500}>
              <motion.li
                variants={navItemVariants}
                whileHover={{ color: "#3e6b79" }}
              >
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
            </Link>
            <Link to="skills" smooth={true} offset={-50} duration={500}>
              <motion.li
                variants={navItemVariants}
                whileHover={{ color: "#3e6b79" }}
              >
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
            </Link>
            <Link to="projects" smooth={true} offset={-10} duration={500}>
              <motion.li
                variants={navItemVariants}
                whileHover={{ color: "#3e6b79" }}
              >
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
            </Link>
            <Link to="contact" smooth={true} offset={-50} duration={500}>
              <motion.li
                variants={navItemVariants}
                whileHover={{ color: "#3e6b79" }}
              >
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
            </Link>
          </motion.ul>
          <button
            onClick={(event) => {
              event.stopPropagation();
              setIsOpen(!isOpen);
              console.log("clickeado");
            }}
          >
            <BurgerIcon isActive={isOpen} />
          </button>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
