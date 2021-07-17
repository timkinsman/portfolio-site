import React from 'react'
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from "./Navbar.module.css";
import $ from "jquery"
import { useState } from 'react';

const Navbar = (props: {page: string}) => {
  const [_open, _setOpen] = useState(false)

  return (
    <div className={styles["navbar-container"]}>
      <h4 style={{paddingLeft: "1px" /*it just works*/}}><Link style={{opacity: props.page === "home" ? "1" : "" }} to="/">00.Tim Kinsman</Link></h4>

      <div id="navbar-right" className={styles["navbar-right"]}>
          <h4><Link style={{opacity: props.page === "about" ? "1" : "" }} to="/about">01.About</Link></h4>
          <h4><Link style={{opacity: props.page === "work" ? "1" : "" }} to="/work">02.Work</Link></h4>
          <h4><Link style={{opacity: props.page === "contact" ? "1" : "" }} to="/contact">03.Contact</Link></h4>
      </div>

      <div id="navbar-ham" className={styles["navbar-right"]} style={{zIndex: 100}}>
          <a onClick={() => _setOpen(!_open)}>{_open === true ? <GiHamburgerMenu fontSize="30px" /> : <GiHamburgerMenu fontSize="30px" />}</a>
      </div>

      {
        _open === true && 
        <div id="navbar-ham" className={`${styles["navbar-ham"]} global-fadein`} style={{background: $("body").css("background")}}>
          <h4><Link style={{opacity: props.page === "home" ? "1" : "" }} to="/">00.Tim Kinsman</Link></h4>
          <h4><Link style={{opacity: props.page === "about" ? "1" : "" }} to="/about">01.About</Link></h4>
          <h4><Link style={{opacity: props.page === "work" ? "1" : "" }} to="/work">02.Work</Link></h4>
          <h4><Link style={{opacity: props.page === "contact" ? "1" : "" }} to="/contact">03.Contact</Link></h4>
        </div>
      }
    </div>
  )
}

export default Navbar;
