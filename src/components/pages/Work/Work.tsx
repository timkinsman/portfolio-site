import React from "react"
import Footer from "../../global/Footer/Footer"
import Navbar from "../../global/Navbar/Navbar"
import $ from "jquery"
import styles from "./Work.module.css"

const Work = () => {
  return (
    <div className="global-container global-fadein">
      <Navbar page="work" />
      <div className={styles["work-hero"]}>
        <div className={styles["work-grid"]}>
          <div className={styles["work-container"]}>
            <div className={styles["work-work"]} onClick={() => window.open('https://github.com','_blank')}></div>
          </div>
          <div className={styles["work-container"]}>
            <div className={styles["work-work"]} onClick={() => window.open('https://github.com','_blank')}></div>
          </div>
        </div>
        <h2 style={{padding: "50px"}}><a href="https://github.com/timkinsman" target="_blank">See more here</a></h2>
      </div>
      <Footer />
    </div>
  )
}

export default Work
