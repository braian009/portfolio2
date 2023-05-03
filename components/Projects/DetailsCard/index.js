import * as React from "react";
import { ProjectsContext } from "@/contexts/ProjectsContext";
import styles from "./detailscard.module.css";

const DetailsCard = () => {
  const { currentProject } = React.useContext(ProjectsContext);

  return (
    <div className={styles.detailsCardContainer}>
      <div>
        <h2>{currentProject.name}</h2>
        <p>{currentProject.description}</p>
      </div>
      <div>
        <div className={styles.list}>
          <div></div>
          <ul>
            {currentProject.technologies.map((tech, i) => {
              return <li key={`technology-${i}`}>{tech}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
