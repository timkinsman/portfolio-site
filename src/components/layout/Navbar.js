import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{display: 'flex', height: '5vh', alignItems: 'center'}}>
      <Link to="/">00.Timothy Kinsman</Link>

      <div style={{marginLeft: 'auto', display: 'flex'}}>
        <div style={{padding: '0 10px'}}>
          <Link to="/about">01.About</Link>
        </div>
        <div style={{padding: '0 10px'}}>
          <Link to="/experience">02.Experience</Link>
        </div>
        <div style={{padding: '0 10px'}}>
          <Link to="/work">03.Work</Link>
        </div>
        <div style={{padding: '0 10px'}}>
          <Link to="/contact">04.Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
