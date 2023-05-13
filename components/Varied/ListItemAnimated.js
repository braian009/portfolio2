import * as React from "react";
import { motion } from "framer-motion";

const itemVariant = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  shown: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i,
      type: "spring",
      stiffness: 400,
      damping: 75,
      duration: 0.4,
    },
  }),
  onHover: {
    scale: 1.05,
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

const ListItemAnimated = ({ children, delay }) => {
  return (
    <motion.li
      variants={itemVariant}
      whileHover="onHover"
      whileTap="onTap"
      custom={delay}
      initial="hidden"
      whileInView="shown"
    >
      {children}
    </motion.li>
  );
};

export default ListItemAnimated;
