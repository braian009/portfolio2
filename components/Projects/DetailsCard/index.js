import * as React from "react";
import { ProjectsContext } from "@/contexts/ProjectsContext";
import styles from "./detailscard.module.css";
import { motion } from "framer-motion";
import LineDecoration from "@/components/Skills/TagList/LineDecoration";

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
          <div>
            <LineDecoration height={'1px'} width={'100vw'} right={'-100vw'} backgroundColor={'#398187'} bottom={'0'}/>
          </div>
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
