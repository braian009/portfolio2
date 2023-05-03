import * as React from "react";
import { ProjectsContext } from "@/contexts/ProjectsContext";
import styles from "./tags.module.css";

const Tags = () => {
  const { projectList, goSpecificProject, currentProject } =
    React.useContext(ProjectsContext);

  return (
    <div className={styles.tagsContainer}>
      {projectList.map((project, i) => {
        return (
          <div
            key={`project-${i}`}
            className={styles.tagContainer}
            onClick={() => goSpecificProject(i)}
          >
            {project.name === currentProject.name && <div></div>}
          </div>
        );
      })}
    </div>
  );
};

export default Tags;
