import * as React from "react";
import styles from "./projects.module.css";
import Image from "next/image";
import { ProjectContextProvider } from "@/contexts/ProjectsContext";
import Slider from "./Slider";
import Tags from "./Tags";
import DetailsCard from "./DetailsCard";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className={styles.container}>
      
      <Image
        src={`/./assets/projects/codee.jpg`}
        fill
        alt={""}
        style={{ objectFit: "cover", opacity: 0.05 }}
      />
      <div className={styles.inner}>
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, stiffness: 400, damping: 75 },
          }}
        >
          Projects
        </motion.h1>
        <ProjectContextProvider>
          <div className={styles.projectsContainer}>
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.6,
                  duration: 1.6,
                  type: "spring",
                  stiffness: 400,
                  damping: 75,
                },
              }}
              style={{ height: "100%", width: "100%" }}
            >
              <Slider />
            </motion.div>
            <motion.div
              initial={{ y: -40, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.6,
                  duration: 1.6,
                  type: "spring",
                  stiffness: 400,
                  damping: 75,
                },
              }}
              style={{ width: "100%" }}
            >
              <Tags />
            </motion.div>
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  delay: 0.6,
                  duration: 1.6,
                  type: "spring",
                  stiffness: 400,
                  damping: 75,
                },
              }}
              style={{ height: "100%", width: "100%" }}
            >
              <DetailsCard />
            </motion.div>
          </div>
        </ProjectContextProvider>
      </div>
    </div>
  );
};

export default Projects;
