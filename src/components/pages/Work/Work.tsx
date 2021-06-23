import React from "react"
import Footer from "../../global/Footer/Footer"
import Navbar from "../../global/Navbar/Navbar"
import styles from "./Work.module.css"

const Work = () => {
  return (
    <div className="global-container global-fadein">
      <Navbar page="work" />
      <div className={styles["work-hero"]}>
        <div className={styles["work-grid"]}>
          <div className={styles["work-work"]}>

          </div>
          <div className={styles["work-work"]}>

          </div>
        </div>
        <h3 style={{padding: "50px"}}><a href="https://github.com/timkinsman" target="_blank">See more here</a></h3>
      </div>
      <Footer />
    </div>
  )
}

export default Work
