import * as React from "react";

import ListItemAnimated from "@/components/Varied/ListItemAnimated";
import LinkedinIcon from "@/components/Varied/LinkedinIcon";
import GithubIcon from "@/components/Varied/GithubIcon";

import styles from "./Socials.module.css";

const Socials = () => {
  return (
    <ul className={styles.socials}>
      <ListItemAnimated delay={2.4}>
        <a
          href="https://linkedin.com/in/braian-yanquin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon />
        </a>
      </ListItemAnimated>
      <ListItemAnimated delay={2.4}>
        <a
          href="https://github.com/braian009"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </a>
      </ListItemAnimated>
    </ul>
  );
};

export default Socials;
