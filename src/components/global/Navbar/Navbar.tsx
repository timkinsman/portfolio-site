import React from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { colors } from '../../../colors';
import styles from "./Navbar.module.css";

const Navbar = (props: {page: string, portfolio: {colorscheme: string}}) => {
  return (
    <div className={styles["navbar-container"]}>
      <h2><Link style={{color: props.page === "home" ? colors[props.portfolio.colorscheme].hover : "" }} to="/">00.Tim Kinsman</Link></h2>

      <div id="navbar-right" className={styles["navbar-right"]}>
          <h2><Link style={{color: props.page === "about" ? colors[props.portfolio.colorscheme].hover : "" }} to="/about">01.About</Link></h2>
          <h2><Link style={{color: props.page === "work" ? colors[props.portfolio.colorscheme].hover : "" }} to="/work">02.Work</Link></h2>
          <h2><Link style={{color: props.page === "contact" ? colors[props.portfolio.colorscheme].hover : "" }} to="/contact">03.Contact</Link></h2>
      </div>
    </div>
  )
}

const mapStateToProps = ( state: { portfolio: any; }, ownProps: any ) => {
  return {
    portfolio: state.portfolio
  }
}

export default connect(mapStateToProps, null)(Navbar);
