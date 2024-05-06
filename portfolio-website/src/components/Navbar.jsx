import React from 'react';
import { Link } from 'react-router-dom'; 




function Navbar() {
  return (
    <nav className="navbar">
      <div className="container  ">
        <div>
            <Link to="/" className="navbar-logo">
          <span className = "logo-text">Ronnie.Dev</span>
        </Link>
        </div>
        <div>
            <ul className="navbar-menu">
        
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">
            About
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact" className="navbar-link">
            Contact
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/skills" className="navbar-link">
            Skills
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/projects" className="navbar-link">
            Projects
          </Link>
        </li>
      </ul>
      </div>
        
      </div>
    </nav>
  );
}

export default Navbar;
