import * as React from "react";

import { motion } from "framer-motion";

import styles from "./tags.module.css";
import { ProjectsContext } from "@/contexts/ProjectsContext";

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
            {project.name === currentProject.name && (
              <motion.div layoutId="projectTag"></motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Tags;
