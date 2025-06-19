import React from "react";

import styles from "./Hero.module.css";
// import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ranjan Dubey</h1>
        <p className={styles.description}>
          Electronics and Communication Engineering student skilled in both core electronics and software domains. With experience in circuit design, full-stack development, and DSA, I create smart, efficient solutions that bridge hardware and software to solve real-world challenges.
        </p>
        <a href="mailto: ranjandubey879@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="/assets/hero/heroPic.png"
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
