import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles["navbar-container"]}>
      <h2><Link to="/">00.Tim Kinsman</Link></h2>

      <div id="navbar-right" className={styles["navbar-right"]}>
          <h2><Link to="/about">01.About</Link></h2>
          <h2><Link to="/work">02.Work</Link></h2>
          <h2><Link to="/contact">03.Contact</Link></h2>
      </div>
    </div>
  )
}

export default Navbar
