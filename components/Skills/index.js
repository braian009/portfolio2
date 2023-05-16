import * as React from "react";

import TagList from "./TagList";
import { motion } from "framer-motion";

import skillsData from "@/data/skills";
import styles from "./skills.module.css";

const Skills = () => {
  return (
    <div className={styles.container} name="skills">
      <div className={styles.inner}>
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, stiffness: 400, damping: 75 },
          }}
          viewport={{ once: "true" }}
        >
          Skills
        </motion.h1>
        <div>
          <TagList items={skillsData} keyName={"items"} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
