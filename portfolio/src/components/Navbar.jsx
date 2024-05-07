import React, { useState } from "react";
import './Navbar.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className={`navbar-for-Ronnie-dev ${isMenuOpen ? 'show' : ''}`}>
                <a className="bg-primary- navbar-item raleway-bold" href="/">
                    Ronnie.Dev
                </a>
            </div>
            <div className={`navbar-menu ${isMenuOpen ? 'show' : ''}`}>
                <div className="navbar-end">
                    <a className="navbar-item raleway-bold" href="/About">
                        About
                    </a>
                    <a className="navbar-item raleway-bold" href="/Experience">
                        Experience
                    </a>
                    <a className="navbar-item raleway-bold" href="/Projects">
                        Projects
                    </a>
                    <a className="navbar-item raleway-bold" href="/contact">
                        Contact
                    </a>
                </div>
            </div>
            <button className="menu-button" onClick={toggleMenu}>
                {isMenuOpen ? 'Close Menu' : 'Open Menu'}
            </button>
        </nav>
    );
}

export default Navbar;

