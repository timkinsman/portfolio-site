import React from "react"
import Footer from "../../global/Footer/Footer"
import Navbar from "../../global/Navbar/Navbar"
import { images } from "../../../images"
import $ from "jquery"
import styles from "./Work.module.css"

//pixely tvs, hover in focus

const Work = () => {
  const fadeIn = (pobj: any) => {
    $(pobj.target).css('visibility','visible').hide().fadeIn(1000);
  }

  return (
    <div className="global-container global-fadein">
      <Navbar page="work" />
      <div className={styles["work-hero"]}>
        <div className={styles["work-grid"]}>
          <div className={styles["work-container"]}>
          <img className={styles["work-image"]} src={images.portfolio} onLoad={fadeIn} />
            <div className={styles["work-work"]} onClick={() => window.open('https://matthewkinsman.com','_blank')}></div>
          </div>
          <div className={styles["work-container"]}>
            <img className={styles["work-image"]} src={images.transparency} onLoad={fadeIn} />
            <div className={styles["work-work"]} onClick={() => window.open('https://transparency-app.herokuapp.com/','_blank')}></div>
          </div>
        </div>
        <h4 style={{padding: "50px"}}><a href="https://github.com/timkinsman" target="_blank">See more here</a></h4>
      </div>
      <Footer page="work" />
    </div>
  )
}

export default Work
