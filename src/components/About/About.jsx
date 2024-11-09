import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          //src={getImageUrl("about/aboutImage.png")}
          src={getImageUrl("A.png")} 
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Scientist</h3>
              <p>
                A Skilled Data scientist Working on different subject from tradional Machine learning 
                up to Gen AI , with Expertise in both NLP, Computer vision and Data analytics for Business
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs and Machine/Deep learning based applications
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>MLops Engineer</h3>
              <p>
                I have designed multiple Machine learning pipelines with Kubeflow and GCP
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
