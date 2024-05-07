import React from "react";
import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a className="bg-primary- navbar-item raleway-bold" href="/">
                    Ronnie.Dev
                </a>
            </div>
            <div className="navbar-menu">
                <div className="navbar-end">
                    <a className="navbar-item raleway-bold" href="/">
                        About
                    </a>
                    <a className="navbar-item raleway-bold" href="/about">
                        Experience
                    </a>
                    <a className="navbar-item raleway-bold" href="/contact">
                        Projects
                    </a>
                    <a className="navbar-item raleway-bold" href="/">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
