import * as React from "react";
import styles from "./skills.module.css";
import skills from "@/data/skills";


const Skills = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h1>Skills</h1>
        <div>
          <ul className={styles.tagsContainer}>
            {skills.map((skill, i) => {
              return (
                <li key={`skill-${i}`} className={styles.tagContainer}>
                  {skill}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
