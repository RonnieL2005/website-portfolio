import React, { useState } from "react";
import './components.css';
import Dropdown from "./Dropdown"; 

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-for-Ronnie-dev">
                <a className="bg-primary- navbar-item Darker Grotesque-bold" href="/">
                    Ronnie.Dev
                </a>
            </div>
            
            {window.innerWidth <= 768 && (
                <Dropdown isMenuOpen={isMenuOpen} />
            )}
            <div className="navbar-menu">
                <div className="navbar-end">
                    <a className="navbar-item Darker Grotesque-bold" href="/About">
                        About
                    </a>
                    <a className="navbar-item Darker Grotesque-bold" href="/Experience">
                        Experience
                    </a>
                    <a className="navbar-item Darker Grotesque-bold" href="/Projects">
                        Projects
                    </a>
                    <a className="navbar-item Darker Grotesque-bold" href="/contact">
                        Contact
                    </a>
                </div>
            </div>
            <button className="menu-button" onClick={toggleMenu}>
                {isMenuOpen ? (
                    <span className="material-symbols-outlined">
                       close
                    </span>
                ) : (
                    <span className="material-symbols-outlined">
                       menu    
                    </span>
                )}
            </button>
        </nav>
    );
}

export default Navbar;



