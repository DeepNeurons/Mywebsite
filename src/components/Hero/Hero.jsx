import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Hedi Bouchelliga</h1>
        <p className={styles.description}>
        I'm a Professional Data scientist and Mlops Engineer with more than 4 good years of experience in diverse subjects         </p>
        <a href="mailto:bouchelligamedhedi@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        //src={getImageUrl("hero/heroImage.png")}
        //src={getImageUrl("kh.png")}
        src={getImageUrl("A.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
