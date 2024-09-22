import React from "react";
import "../assets/styles/Navbar.css";
import logo from "../assets/images/logo.png";
import arrow from "../assets/icons/arrow.png";
import login from "../assets/icons/login.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className="navbar-logo">
                    <img src={logo} alt="Logo" className="logo" />
                    <span className="introdo-style">Introdo</span>
                </div>
                <ul className="navbar-links mt-4">
                    <li><a href="#">Products</a> <img src={arrow} alt="Arrow" className="nav-arrow" /> </li>
                    <li><a href="#">Solutons</a> <img src={arrow} alt="Arrow" className="nav-arrow" /> </li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Partner Program</a></li>
                    <li><a href="#">Resources</a> <img src={arrow} alt="Arrow" className="nav-arrow" /> </li>
                    <li><a href="#">About Us</a> <img src={arrow} alt="Arrow" className="nav-arrow" /> </li>
                    <li>  <button className="nav-button">EN <img src={arrow} alt="Arrow" className="nav-arrow" /> </button></li>
                    <li> <button className="nav-button">Log in <img src={login} alt="User" className="nav-user" /> </button></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

