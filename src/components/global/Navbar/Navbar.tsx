import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./Navbar.module.css";

const Navbar = (props: any) => {
  console.log(props.page)
  return (
    <div className={styles["navbar-container"]}>
      <h2><Link style={{color: props.page === "home" ? "#770811" : ""}} to="/">00.Tim Kinsman</Link></h2>

      <div id="navbar-right" className={styles["navbar-right"]}>
          <h2><Link style={{color: props.page === "about" ? "#770811" : ""}} to="/about">01.About</Link></h2>
          <h2><Link style={{color: props.page === "work" ? "#770811" : ""}} to="/work">02.Work</Link></h2>
          <h2><Link style={{color: props.page === "contact" ? "#770811" : ""}} to="/contact">03.Contact</Link></h2>
      </div>
    </div>
  )
}

export default Navbar
