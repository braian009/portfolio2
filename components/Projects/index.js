import * as React from "react";
import styles from "./projects.module.css";

const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h1>Projects</h1>
        <div className={styles.projectsContainer}>
          <div style={{ height: "100%", width: "100%" }}></div>
          <div style={{ height: "100%", width: "100%" }}></div>
          <div style={{ height: "100%", width: "100%" }}></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
