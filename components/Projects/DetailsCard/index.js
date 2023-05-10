import * as React from "react";
import { ProjectsContext } from "@/contexts/ProjectsContext";
import styles from "./detailscard.module.css";
import { motion } from "framer-motion";
import LineDecoration from "@/components/Varied/LineDecoration";

const DetailsCard = () => {
  const { currentProject } = React.useContext(ProjectsContext);

  return (
    <div className={styles.detailsCardContainer}>
      <div>
        <h2>{currentProject.name}</h2>
        <p>{currentProject.description}</p>
      </div>
      <div>
        <div className={styles.footer}>
          <div>
            <button>
              Code
              <LineDecoration
                left={"0"}
                top={"0"}
                height={"50%"}
                width={"2px"}
                translateY={"50%"}
                luminescence
                backgroundColor={"#398197"}
              />
            </button>
            <button>
              Repo
              <LineDecoration
                left={"0"}
                top={"0"}
                height={"50%"}
                width={"2px"}
                translateY={"50%"}
                luminescence
                backgroundColor={"#398197"}
              />
            </button>
            
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
