import * as React from "react";
import Image from "next/image";
import styles from "./about.module.css";
import Cards from "./Cards";
import Summary from "./Summary";

const About = () => {
  const [active, setActive] = React.useState(0);

  const onChangeCard = (i) => {
    setActive(i);
  };

  return (
    <div className={styles.aboutContainer}>
      <Image
        src={`/./assets/about/aboutpic${active}.jpg`}
        fill
        alt={""}
        style={{ objectFit: "cover", opacity: 0.04 }}
      />
      <div className={styles.aboutInner}>
        <h1>About</h1>
        <Cards onChangeCard={onChangeCard} />
        <Summary />

      </div>
    </div>
  );
};

export default About;
