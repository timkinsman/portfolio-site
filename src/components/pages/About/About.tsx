import React, { useState } from "react"
import { connect } from "react-redux";
import { colors } from '../../../colors';
import Footer from "../../global/Footer/Footer"
import Navbar from "../../global/Navbar/Navbar"
import { d } from "../../../data";
import styles from "./About.module.css"

const Item = (props: {title: string, subtitle: string, link: string}) => {
  return (
    <div className="global-fadein" key={props.title}>
      <h4>{props.link ? <a href={props.link} target="_blank">{props.title}</a> : props.title}</h4>
      <h4>{props.subtitle}</h4>
    </div>
  )
}

//

const About = (props: any) => {
  const [mstrAbout, setAbout] = useState<string>("languages")

  const renderAbout = (about: string): JSX.Element => {
    return (
      <div className={`${styles["about-item"]} ${styles["about-right"]}`}>
        {d[about].map((d: {title: string, subtitle: string, link: string}) => {
          return <Item title={d.title} subtitle={d.subtitle} link={d.link} />
        })}
        <div className={styles["about-screen"]} />
      </div>
    )
  }

  return (
    <div className="global-container global-fadein">
      <Navbar page="about" />
      <div className={styles["about-hero"]}>
        <div className={styles["about-grid"]}>
          <div className={styles["about-item"]}>
            <h4><a style={{opacity: mstrAbout === "languages" ? "1" : "" }} onClick={() => setAbout("languages")}>Languages</a></h4>
            <h4><a style={{opacity: mstrAbout === "databases" ? "1" : "" }} onClick={() => setAbout("databases")}>Databases</a></h4>
            <h4><a style={{opacity: mstrAbout === "libraries" ? "1" : "" }} onClick={() => setAbout("libraries")}>Libraries</a></h4>
            <h4><a style={{opacity: mstrAbout === "othertools" ? "1" : "" }} onClick={() => setAbout("othertools")}>Other Tools</a></h4>
            <h4><a style={{opacity: mstrAbout === "education" ? "1" : "" }} onClick={() => setAbout("education")}>Education</a></h4>
            <h4><a style={{opacity: mstrAbout === "experience" ? "1" : "" }} onClick={() => setAbout("experience")}>Experience</a></h4>
            <h4><a style={{opacity: mstrAbout === "publications" ? "1" : "" }} onClick={() => setAbout("publications")}>Publications</a></h4>
            <h4><a style={{opacity: mstrAbout === "achievements" ? "1" : "" }} onClick={() => setAbout("achievements")}>Achievements</a></h4> 
            <div className={styles["about-screen"]} />
          </div>
          {renderAbout(mstrAbout)}
        </div>
      </div>
      <Footer page="about" />
    </div>
  )
}

const mapStateToProps = ( state: { portfolio: any; } ) => {
  return {
    portfolio: state.portfolio
  }
}

export default connect(mapStateToProps, null)(About);
