import React, { useState } from "react";
import "./header.css";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="coupon"><h3>50% Off on first booking</h3>
            </div>
            <div className="header-content">
            <div className="logo">ASHELSHA CABS</div>
            <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <button className="book-now">Book Now</button>
            </nav>
            <div className={`hamburger ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            </div>
        </header>
    );
}

export default Header;
