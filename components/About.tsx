import React from 'react';
import styles from '../styles/About.module.css'
import Zoom from 'react-reveal/Zoom'; 
import { useInView } from "react-intersection-observer";

const About = () => {

    const [titleRef, titleInView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
      });

    return (
        <section className={styles.about}>
    <Zoom>
            {/* <h2>About me: Education and Work Experience</h2> */}
            <div className={styles.flexHeadings}>
                <div>
                <img className={styles.icon} src="work.svg" alt=""/>

            <h3>Work Experience:</h3>
                </div>
                <div>
                <img className={styles.icon} src="education.svg" alt=""/>
                <h3>Education:</h3>
                </div>
            </div>
                
            <div className={styles.aboutGrid}>
                <div className="grid-column">
                <p>York University (2013-2018)</p>
                <ul>
                    <li>Learned how to write amazing essays</li>
                    <li>Survived two union strikes</li>
                    <li>Gained 15(25)lbs</li>
                    <li>Donated 40,000 dollars in exchange for a piece of paper</li>
                </ul>
                </div>
                <div className="grid-column">
                <p>Full Stack Developer at BrickspaceLab Inc (April 2020 - Now)</p>
                <ul>
                    <li>Initiated a leap from JS to TS</li>
                    <li>Ditched Polaris in favour of builing a custom component library</li>
                    <li>Built and maintain an app used by hundreds of businesses</li>
                    <li>Still trying to achieve 100% test coverage</li>
                </ul>
                </div>
                <div className="grid-column">
                <p>Alexander Mackenzie HS (2011-2013)</p>
                <ul>
                    <li>Got introduced to Canadian Education</li>
                    <li>Found out that Creative Writing is a real course</li>
                    <li>Still wanted to be a lawyer</li>
                    <li>Got a higher English grade than most native speakers</li>
                </ul>
                </div>
                <div className="grid-column">
                <p>Freelance Web Development (2018 - 2020)</p>
                <ul>
                    <li>Figured out what "Learning on the job" truly means</li>
                    <li>Dealt with so many entitled people</li>
                    <li>Learned that customer service and marketing are the real hell</li>
                </ul>
                </div>
                <div className="grid-column">
                <p>Lyceum N28 (Lviv, Ukraine)</p>
                <ul>
                    <li>Learned German before English</li>
                    <li>Depeloped all the potential to be lost in the future</li>
                    <li>Really wanted to be a lawyer</li>
                </ul>
                </div>
                <div className="grid-column">
                <p>Office Administrator at Zodiac Engineering (2016-2018)</p>
                <ul>
                    <li>Created my first website</li>
                    <li>Earned very little money</li>
                    <li>Dealt with so much paperwork</li>
                </ul>
                </div>
            </div>
        </Zoom>
      </section>
        
    )
}

export default About
