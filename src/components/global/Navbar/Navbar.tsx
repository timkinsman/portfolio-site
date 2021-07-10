import React from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { colors } from '../../../colors';
import styles from "./Navbar.module.css";

const Navbar = (props: {page: string, portfolio: {colorscheme: string}}) => {
  return (
    <div className={styles["navbar-container"]}>
      <h4><Link style={{opacity: props.page === "home" ? "1" : "" }} to="/">00.Tim Kinsman</Link></h4>

      <div id="navbar-right" className={styles["navbar-right"]}>
          <h4><Link style={{opacity: props.page === "about" ? "1" : "" }} to="/about">01.About</Link></h4>
          <h4><Link style={{opacity: props.page === "work" ? "1" : "" }} to="/work">02.Work</Link></h4>
          <h4><Link style={{opacity: props.page === "contact" ? "1" : "" }} to="/contact">03.Contact</Link></h4>
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
