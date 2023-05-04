import * as React from "react";
import Image from "next/image";
import styles from "./about.module.css";

const About = () => {
  const [active, setActive] = React.useState(0);

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

        <div className={styles.cardsContainer}>
          <div className={styles.cardContainer}>
            <h3 onClick={() => setActive(0)}>title</h3>
            <p>
              Fugiat veniam cupidatat est sint velit reprehenderit culpa culpa
              laborum laborum pariatur Lorem. culpa culpa laborum laborum
              pariatur Lorem.
            </p>
          </div>
          <div className={styles.cardContainer}>
            <h3 onClick={() => setActive(1)}>title</h3>
            <p>
              Fugiat veniam cupidatat est sint velit reprehenderit culpa culpa
              laborum laborum pariatur Lorem. culpa culpa laborum laborum
              pariatur Lorem.
            </p>
          </div>
          <div className={styles.cardContainer}>
            <h3 onClick={() => setActive(2)}>title</h3>
            <p>
              Fugiat veniam cupidatat est sint velit reprehenderit culpa culpa
              laborum laborum pariatur Lorem. culpa culpa laborum laborum
              pariatur Lorem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
