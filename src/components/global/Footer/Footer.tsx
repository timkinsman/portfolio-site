import React from "react"
import Chatbot from "../../chatbot/Chatbot";
import styles from "./Footer.module.css";

const Footer = (props: any) => {
  return (
    <div className={styles["footer-container"]}>
      {props.page === "home" ? "" : <div id="footerchatbot"><Chatbot page={props.page} /></div>}
      <div className={styles["footer-right"]}>
        <h4 style={{width: "max-content"}}>© 2021 Tim Kinsman</h4>
      </div>
    </div>
  )
}

export default Footer
