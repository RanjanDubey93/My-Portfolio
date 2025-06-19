import React from "react";
import styles from "./Experience.module.css";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
            <div className={styles.iconContainer}>
                <li><img src="/assets/skills/html.png" alt="" className={styles.iconImage}/><p></p></li>
                <li><img src="/assets/skills/css-3.png" alt="" className={styles.iconImage}/><p></p></li>
                <li><img src="/assets/skills/java-script.png" alt="" className={styles.iconImage}/><p></p></li>
                <li><img src="/assets/skills/React.png" alt="" className={styles.iconImage}/><p></p></li>
                <li><img src="/assets/skills/MongoDB.png" alt="" className={styles.iconImage}/><p></p></li>
                <li><img src="/assets/skills/TailwindCSS.png" alt="" className={styles.iconImage}/><p></p></li>
            </div>

            <div className={styles.iconContainer}>

          <li><img src="/assets/skills/Vite.js.png" alt=""className={styles.iconImage} /><p></p></li>
          <li><img src="/assets/skills/python.png" alt="" className={styles.iconImage}/><p></p></li>
          <li><img src="/assets/skills/GitHub.png" alt="" className={styles.iconImage}/><p></p></li>
          <li><img src="/assets/skills/c++.png" alt="" className={styles.iconImage}/><p></p></li>
          <li><img src="/assets/skills/Arduino.png" alt="" className={styles.iconImage}/><p></p></li>
          <li><img src="/assets/skills/MATLAB.png" alt="" className={styles.iconImage}/><p></p></li>
            </div>
            <div className={styles.iconContainer}>
                <li><img src="/assets/skills/pcb-board.png" alt="" className={styles.iconImage}/><p></p></li>
                <li><img src="/assets/skills/cadence.png" alt="" className={styles.iconImage}/><p></p></li>
            </div>
        </div>  
      </div>
    </section>
  );
};
