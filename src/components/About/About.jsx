import React from "react";
import styles from "./About.module.css"
export const About = () =>{
    return(
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src="/assets/about/aboutImage.png" alt="About me" className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}><img src="/assets/about/fullStack.png" alt="fullstack icon" className={styles.aboutIconImage}/>
                <div className={styles.aboutItemText}>
                    <h3>Full Stack Developer</h3>
                    <p>
                        I'm a full stack developer with experience in developing responsive, optimized sites with back-end systems.
                    </p>
                </div>
                </li>
                <li className={styles.aboutItem}><img src="/assets/about/vlsiDesign.png" alt="vlsi icon" className={styles.aboutIconImage}/>
                <div className={styles.aboutItemText}>
                    <h3>VLSI Engineer</h3>
                    <p>
                        I have hands-on expirience in designing CMOS circuits and layout on Cadence-Virtuoso. Skills in Verilog RTL designing, TCAD Sancturus.
                    </p>
                </div>
                </li>
                <li className={styles.aboutItem}><img src="/assets/about/programming.png" alt="cursor icon" className={styles.aboutIconImage}/>
                <div className={styles.aboutItemText}>
                    <h3>DSA | C++</h3>
                    <p>
                        Programming enthusiast with fluency in C++ programming language and knowledge of Data Structures and Algorithms.
                    </p>
                </div>
                </li>
            </ul>
        </div>
    </section>
    );
}