import * as React from "react";
import Image from "next/image";
import { ProjectsContext } from "@/contexts/ProjectsContext";
import Arrow from "../Arrow";
import styles from "./slider.module.css";

const Slider = () => {
  const { currentProject, goPreviousProject, goNextProject } =
    React.useContext(ProjectsContext);

  return (
    <div className={styles.SliderContainer}>
      <Image
        src={currentProject.image}
        fill
        alt={""}
        style={{
          objectFit: "cover",
          borderTopLeftRadius: "22px",
          borderTopRightRadius: "22px",
          borderBottomLeftRadius: "11px",
          borderBottomRightRadius: "11px"
        }}
      />
      <Arrow side={"left"} onChangeItem={goPreviousProject} />
      <Arrow side={"right"} onChangeItem={goNextProject} />
    </div>
  );
};

export default Slider;
