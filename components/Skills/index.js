import * as React from "react";
import styles from "./skills.module.css";
import skills from "@/data/skills";
import TagList from "./TagList";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, stiffness: 400, damping: 75 },
          }}
        >
          Skills
        </motion.h1>
        <div>
          <TagList items={skills} keyName={"items"} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
