import React, { useState } from "react";
import "../assets/styles/Navbar.css";
import logo from "../assets/images/logo.png";
import arrow from "../assets/icons/arrow.png";
import login from "../assets/icons/login.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="promo-banner">
                Happy Employees, Effortless HR: Experience the Introdo Advantage. <b>Try it for Free!</b>
            </div>
            <nav className="navbar">
                <div className="navbar-content">
                    <div className="navbar-logo">
                        <img src={logo} alt="Logo" className="logo" />
                        <span className="introdo-style">Introdo</span>
                    </div>
                    <button className="navbar-toggle" onClick={toggleNavbar}>
                        {isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" viewBox="0 0 24 24">
                                <path d="M3 12h18M3 6h18M3 18h18" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" viewBox="0 0 24 24">
                                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                            </svg>
                        )}
                    </button>
                    <ul className={`navbar-links mt-4 ${isOpen ? 'open' : ''}`}>
                        <li><a href="#">Products</a> <img src={arrow} alt="Arrow" className="nav-arrow" /> </li>
                        <li><a href="#">Solutions</a> <img src={arrow} alt="Arrow" className="nav-arrow" /> </li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Partner Program</a></li>
                        <li><a href="#">Resources</a> <img src={arrow} alt="Arrow" className="nav-arrow" /> </li>
                        <li><a href="#">About Us</a> <img src={arrow} alt="Arrow" className="nav-arrow" /> </li>
                        <li><button className="nav-button">EN <img src={arrow} alt="Arrow" className="nav-arrow" /></button></li>
                        <li><button className="nav-button">Log in <img src={login} alt="User" className="nav-user" /></button></li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
