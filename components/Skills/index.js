import * as React from "react";
import styles from "./skills.module.css";
import skills from "@/data/skills";
import TagList from "./TagList";


const Skills = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h1>Skills</h1>
        <div>
          <TagList items={skills} keyName={'items'}/>
        </div>
      </div>
    </div>
  );
};

export default Skills;
