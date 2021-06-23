import React from "react"
import Footer from "../../global/Footer/Footer"
import Navbar from "../../global/Navbar/Navbar"
import styles from "./About.module.css"

const About = () => {
  return (
    <div className="global-container global-fadein">
      <Navbar page="about" />
      <div className={styles["about-hero"]}>

      </div>
      <Footer />
    </div>
  )
}

export default About
