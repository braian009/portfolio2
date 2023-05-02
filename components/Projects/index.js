import * as React from "react";
import styles from "./projects.module.css";
import { ProjectContextProvider } from "@/contexts/ProjectsContext";
import Slider from "./Slider";
import Points from "./Points";

const Projects = () => {

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h1>Projects</h1>
        <ProjectContextProvider>
          <div className={styles.projectsContainer}>
            <div style={{ height: "100%", width: "100%", maxWidth: '40em' }}><Slider/></div>
            <div style={{ height: "100%", width: "100%", maxWidth: '40em' }}><Points/></div>
            <div style={{ height: "100%", width: "100%", maxWidth: '40em' }}></div>
          </div>
        </ProjectContextProvider>
      </div>
    </div>
  );
};

export default Projects;
