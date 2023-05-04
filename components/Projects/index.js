import * as React from "react";
import styles from "./projects.module.css";
import Image from "next/image";
import { ProjectContextProvider } from "@/contexts/ProjectsContext";
import Slider from "./Slider";
import Tags from "./Tags";
import DetailsCard from "./DetailsCard";

const Projects = () => {
  return (
    <div className={styles.container}>
      <Image
        src={`/./assets/projects/projectsbackground.jpg`}
        fill
        alt={""}
        style={{ objectFit: "cover", opacity: 0.05 }}
      />
      <div className={styles.inner}>
        <h1>Projects</h1>
        <ProjectContextProvider>
          <div className={styles.projectsContainer}>
            <div style={{ height: "100%", width: "100%" }}>
              <Slider />
            </div>
            <div style={{ height: "100%", width: "100%" }}>
              <Tags />
            </div>
            <div style={{ height: "100%", width: "100%" }}>
              <DetailsCard />
            </div>
          </div>
        </ProjectContextProvider>
      </div>
    </div>
  );
};

export default Projects;
