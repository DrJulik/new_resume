import styles from '../styles/Home.module.css'
import ScrollIndicator from './small/ScrollIndicator'
import { motion } from "framer-motion"

const Intro = () => {
  const variants = {
    visible: { opacity: 1, x:0 },
    hidden: { opacity: 0, x: -100 },
  }
    return (
        <section className={styles.intro}>
          <motion.h1 transition={{delay:0.2, duration:0.55}} initial="hidden"
  animate="visible"
  variants={variants}>Yuliy Sozin</motion.h1>
          <motion.div transition={{delay:0.4, duration:0.55, delayChildren:0.2}} initial="hidden"
  animate="visible"
  variants={variants} style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <p>Hi there. My name is Yuliy and I'm a Full Stack Web Developer.</p>
        <p>On this page you will find information about me, my work and how to contact me.</p>
        <p>Thank you for visiting!</p>
        <small>P.S: You can find me <i>below</i> </small>
          </motion.div>
        

        <motion.div transition={{delay:0.6, duration:0.55, delayChildren:0.2}} initial="hidden"
  animate="visible"
  variants={variants} className={styles.socials}>
    <a href="https://twitter.com/YSozin" target="_blank" rel="noopener noreferrer">
      <img className={styles.twitter} src="twitter.svg" alt=""/>
    </a>
         <a href="https://www.linkedin.com/in/yuliy-sozin-0409b719a/" target="_blank" rel="noopener noreferrer" ><img className={styles.twitter} src="linkedin.svg" alt=""/></a>
        <a href="https://github.com/DrJulik" target="_blank" rel="noopener noreferrer"><img className={styles.twitter} src="github.svg" alt=""/></a>  
          
        </motion.div>

      <ScrollIndicator/>
      </section>
    )
}

export default Intro
