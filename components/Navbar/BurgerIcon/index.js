import { motion } from "framer-motion";

const iconVariants = {
  active: {
    rotate: 180,
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 400,
      damping: 75,
    },
  },
  notActive: {
    rotate: 0,
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 400,
      damping: 75,
    },
  },
};

const BurgerIcon = ({ isActive }) => {
  return (
    <motion.svg
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.99 }}
      animate={isActive ? "active" : "notActive"}
      variants={iconVariants}
      width="100px"
      height="100px"
      viewBox="-2.4 -2.4 28.80 28.80"
      fill="none"
      stroke="#000000"
      strokeWidth="0.00024000000000000003"
      transform="rotate(0)"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"
          fill="#000000"
        />{" "}
      </g>
    </motion.svg>
  );
};

export default BurgerIcon;
