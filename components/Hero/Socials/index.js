import * as React from "react";

import { motion } from "framer-motion";
import LinkedinIcon from "@/components/Varied/LinkedinIcon";
import GithubIcon from "@/components/Varied/GithubIcon";
import ListItemAnimated from "@/components/Varied/ListItemAnimated";

import styles from "./Socials.module.css";

const Socials = () => {
  return (
    <ul className={styles.socials}>
      <ListItemAnimated delay={2.4}>
        <LinkedinIcon />
      </ListItemAnimated>
      <ListItemAnimated delay={2.4} >
        <GithubIcon />
      </ListItemAnimated>
    </ul>
  );
};

export default Socials;
