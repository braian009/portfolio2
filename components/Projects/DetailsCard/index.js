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
            <motion.button initial="false" whileHover={{ color: "#ccc" }}>
              Demo
              <LineDecoration
                left={"0"}
                top={"50%"}
                height={"50%"}
                width={"4px"}
                translateY={"-50%"}
                luminescence
                backgroundColor={"#398197"}
              />
            </motion.button>
            <motion.button initial="false" whileHover={{ color: "#ccc" }}>
              Repo
              <LineDecoration
                left={"0"}
                top={"50%"}
                height={"50%"}
                width={"4px"}
                translateY={"-50%"}
                luminescence
                backgroundColor={"#398197"}
              />
            </motion.button>
          </div>
          <ul>
            {currentProject.technologies.map((tech, i) => {
              return <li key={`technology-${i}`}>{tech}</li>;
            })}
          </ul>
        </div>
      </div>
      <LineDecoration
        width={"100%"}
        height={"1px"}
        bottom={"0"}
        left={"0"}
        backgroundColor={"#398197"}
        opacity={0.4}
      />
    </div>
  );
};

export default DetailsCard;
