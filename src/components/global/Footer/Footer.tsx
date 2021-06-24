import React from "react"
import Chatbot from "../../chatbot/Chatbot";
import styles from "./Footer.module.css";

const Footer = (props: any) => {
  return (
    <div className={styles["footer-container"]}>
      {props.page === "home" ? "" : <Chatbot page="" />}
      <div className={styles["footer-right"]}>
        <h2>© 2021 Tim Kinsman</h2>
      </div>
    </div>
  )
}

export default Footer
