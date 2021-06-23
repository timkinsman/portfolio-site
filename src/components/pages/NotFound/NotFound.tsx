import React from "react"
import { connect } from "react-redux"
import Footer from "../../global/Footer/Footer"
import Navbar from "../../global/Navbar/Navbar"
import { colors } from '../../../colors';
import styles from "./NotFound.module.css"

const NotFound = (props: any) => {
  return (
    <div className="global-container global-fadein">
      <Navbar page="notfound" />
      <div className={styles["notfound-container"]}>
        <h1 style={{fontSize: "xxx-large", color: colors[props.portfolio.colorscheme].hover}}>NOT FOUND</h1>
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

export default connect(mapStateToProps, null)(NotFound);