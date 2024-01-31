import "./navbar.css";
import React from "react";
import piggy from './icon.png';

function Navbar() {
  return (
    <div className="navbar">
      <a href="/" className="navbar-brand">Homepage</a>
        <div>
          <img src={piggy} alt="piggy" className="piggy" /> 
          </div>
      <ul className="navbar-links">
        <li>
          <a href="/" className="navbar-link">Home</a>
        </li>
        <li>
          <a href="/about" className="navbar-link">About</a>
        </li>
        <li>
          <a href="/contract" className="navbar-link">Contact</a>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
