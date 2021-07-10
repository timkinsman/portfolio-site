import React from "react"
import { connect } from "react-redux"
import Footer from "../../global/Footer/Footer"
import Navbar from "../../global/Navbar/Navbar"
import styles from "./NotFound.module.css"

const NotFound = (props: any) => {
  return (
    <div className="global-container global-fadein">
      <Navbar page="notfound" />
      <div className={styles["notfound-container"]}>
        <h4 style={{fontSize: "xxx-large"}}>NOT FOUND</h4>
      </div>
      <Footer page="notfound" />
    </div>
  )
}

const mapStateToProps = ( state: { portfolio: any; } ) => {
  return {
    portfolio: state.portfolio
  }
}

export default connect(mapStateToProps, null)(NotFound);