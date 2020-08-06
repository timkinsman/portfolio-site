import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{display: 'block'}}>
      <Link to="/">00. Timothy Kinsman</Link>

      <div style={{float: 'right'}}>
        <Link to="/about">01. About</Link>
        <Link to="/experience">02. Experience</Link>
        <Link to="/work">03. Work</Link>
        <Link to="/contact">04. Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
