import React from "react"
import Navbar from "../../global/Navbar/Navbar"
import Footer from "../../global/Footer/Footer"
import styles from "./NotFound.module.css"

const NotFound = () => {
  return (
    <div className="global-container global-fadein">
      <Navbar page="notfound" />
      <div className={styles["notfound-container"]}>
        <h1 style={{fontSize: "xxx-large", color: "#770811"}}>NOT FOUND</h1>
      </div>
      <Footer />
    </div>
  )
}

export default NotFound
