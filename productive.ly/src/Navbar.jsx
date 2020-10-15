import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav id="navbar">
        <Link to="/">Home</Link>
        <Link to="/About">About Us</Link>
      </nav>
    </header>
  )
}

export default Navbar;
