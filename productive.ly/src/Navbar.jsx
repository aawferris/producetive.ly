import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header
      id="navbar"
      style={{
        backdropFilter: 'brightness(30%)',
        backgroundColor: 'transparent',
      }}>
      <nav>
        <Link to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            padding: '5px',
            margin: '5px'
          }}
        >Home</Link>
        <Link to="/About"
        style={{
          color: 'white',
          textDecoration: 'none',
          padding: '5px',
          margin: '5px'
        }}
        >About Us</Link>
      </nav>
    </header>
  )
}

export default Navbar;
