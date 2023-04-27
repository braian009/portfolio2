import * as React from "react";
import styles from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.picture}>
          <Image src="/./assets/profilepicture.jpg" alt={""} fill />
        </div>
        <div className={styles.infoText}>
          <h1>Braian Yanquin</h1>
          <h4>Fullstack developer</h4>
          <p>
            Nisi id enim veniam nulla minim veniam laboris eiusmod excepteur
            eiusmod. Ullamco officia.
          </p>
        </div>
        <div className={styles.socials}>
          <div>4</div>
          <div>4</div>
          <div>4</div>
        </div>
        <div className={styles.location}>Rio Negro, Argentina.</div>
      </div>
    </div>
  );
};

export default Hero;
