import React from "react";

import styles from "./Contact.module.css";
import emailIcon from "../../../public/assets/contact/emailIcon.png"
import linkedinIcon from "../../../public/assets/contact/linkedinIcon.png"
import githubIcon from "../../../public/assets/contact/githubIcon.png"

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
         <div>
        <p><a href="https://drive.google.com/drive/folders/1m6EXUWJ4heC_7whJ8PvHfQQTlg5Po6u2?usp=sharing" className={styles.contactBtn}>
                  Resume
                </a></p>
      </div>
      </div>
     
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto: ranjandubey879@gmail.com">ranjandubey879@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedinIcon}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/ranjandubey8/">linkedin.com/in/ranjandubey8</a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" />
          <a href="https://github.com/RanjanDubey93">github.com/RanjanDubey</a>
        </li>
      </ul>
    </footer>
  );
};
