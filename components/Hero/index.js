import * as React from "react";
import styles from "./hero.module.css";
import ProfilePic from "./ProfilePic";
import InfoText from "./InfoText";
import Socials from "./Socials";
import Location from "./Location";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <ProfilePic />
        <InfoText />
        <Socials />
        <Location/>
      </div>
    </div>
  );
};

export default Hero;
