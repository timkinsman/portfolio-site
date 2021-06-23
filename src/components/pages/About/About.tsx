import React, { useState } from "react"
import { connect } from "react-redux";
import { colors } from '../../../colors';
import Footer from "../../global/Footer/Footer"
import Navbar from "../../global/Navbar/Navbar"
import styles from "./About.module.css"

const About = (props: any) => {
  const [mstrAbout, setAbout] = useState<string>("languages")

  const renderAbout = (about: string): string => {
    return ""
  }

  return (
    <div className="global-container global-fadein">
      <Navbar page="about" />
      <div className={styles["about-hero"]}>
        <div className={styles["about-grid"]}>
          <div className={styles["about-left"]}>
            <h2 style={{color: mstrAbout === "languages" ? colors[props.portfolio.colorscheme].hover : "" }}><a onClick={() => setAbout("languages")}>Languages</a></h2>
            <h2 style={{color: mstrAbout === "databases" ? colors[props.portfolio.colorscheme].hover : "" }}><a onClick={() => setAbout("databases")}>Databases</a></h2>
            <h2 style={{color: mstrAbout === "libraries" ? colors[props.portfolio.colorscheme].hover : "" }}><a onClick={() => setAbout("libraries")}>Libraries</a></h2>
            <h2 style={{color: mstrAbout === "othertools" ? colors[props.portfolio.colorscheme].hover : "" }}><a onClick={() => setAbout("othertools")}>Other Tools</a></h2>
            <h2 style={{color: mstrAbout === "education" ? colors[props.portfolio.colorscheme].hover : "" }}><a onClick={() => setAbout("education")}>Education</a></h2>
            <h2 style={{color: mstrAbout === "experience" ? colors[props.portfolio.colorscheme].hover : "" }}><a onClick={() => setAbout("experience")}>Experience</a></h2>
            <h2 style={{color: mstrAbout === "publications" ? colors[props.portfolio.colorscheme].hover : "" }}><a onClick={() => setAbout("publications")}>Publications</a></h2>
            <h2 style={{color: mstrAbout === "achievements" ? colors[props.portfolio.colorscheme].hover : "" }}><a onClick={() => setAbout("achievements")}>Achievements</a></h2>
          </div>
          <div className={styles["about-right"]}>
            {renderAbout(mstrAbout)}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

const mapStateToProps = ( state: { portfolio: any; } ) => {
  return {
    portfolio: state.portfolio
  }
}

export default connect(mapStateToProps, null)(About);
