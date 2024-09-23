import React, { useState } from 'react';
import '../assets/styles/Footer.css';
import googlePlay from '../assets/images/google-play.png';
import appleStore from '../assets/images/apple.png';
import arrowButton from '../assets/images/arrow-button.png';
import logo from "../assets/images/logo.png";
import facebook from "../assets/images/fb.png";
import instagram from "../assets/images/insta.png";
import linkedin from "../assets/images/linkedIn.png";
import arrow from "../assets/icons/white-arrow.png";
import certification1 from "../assets/images/certificate1.png";
import certification2 from "../assets/images/certificate2.png";
import certification3 from "../assets/images/certificate3.png";
import certification4 from "../assets/images/certificate4.png";

const Footer = () => {
    const [showProducts, setShowProducts] = useState(false);
    const [showResources, setShowResources] = useState(false);
    const [showPlatform, setShowPlatform] = useState(false);

    return (
        <footer className="footer">
            <div className="container">
                <div className="subscribe-section mt-5">
                    <div className="header-container">
                        <img src={logo} alt="Logo" className="logo" />
                        <span className="introdo-text ml-4 pl-2">Introdo</span>
                        <h3>HR Updates, Straight To Your Inbox - Subscribe Today</h3>
                        <button className='footer-button'>EN <img src={arrow} alt="Arrow" className="nav-arrow" /></button>
                    </div>
                    <div className="header-container">
                        <div className="subscribe-box">
                            <div className="input-wrapper ml-5">
                                <input type="email" className='email-input' placeholder="Enter Work Email" />
                                <img src={arrowButton} alt="Button" className='arrow-img' />
                            </div>
                        </div>
                        <div className="social-icons">
                            <div className="social-icon">
                                <img src={facebook} alt="Facebook icon" />
                            </div>
                            <div className="social-icon">
                                <img src={instagram} alt="Instagram icon" />
                            </div>
                            <div className="social-icon">
                                <img src={linkedin} alt="LinkedIn icon" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-columns">
                    <div className="column">
                        <h3 onClick={() => setShowProducts(!showProducts)}>
                            Products<span className="arrow">&#9660;</span>
                        </h3>
                        <ul className={`footer-list ${showProducts ? 'show' : ''}`}>
                            <li>Core HR</li>
                            <li>Employee Management</li>
                            <li>Leave Management</li>
                            <li>Time & Attendance</li>
                            <li>Payroll Management</li>
                            <li>People Analytics</li>
                            <li>Recruitment <span className="new">NEW</span></li>
                            <li>Performance Management <span className="coming-soon">COMING SOON</span></li>
                        </ul>
                    </div>

                    <div className="column">
                        <h3 onClick={() => setShowResources(!showResources)}>
                            Resources<span className="arrow">&#9660;</span>
                        </h3>
                        <ul className={`footer-list ${showResources ? 'show' : ''}`}>
                            <li>All Resources</li>
                            <li>Blogs</li>
                            <li>Case Studies</li>
                            <li>Product Videos</li>
                            <li>HR Glossary</li>
                        </ul>
                    </div>

                    <div className="column">
                        <h3 onClick={() => setShowPlatform(!showPlatform)}>
                            Platform<span className="arrow">&#9660;</span>
                        </h3>
                        <ul className={`footer-list ${showPlatform ? 'show' : ''}`}>
                            <li>Log In</li>
                            <li>Schedule a Demo</li>
                            <li>Use Cases</li>
                            <li>Integrations</li>
                            <li>Pricing</li>
                        </ul>
                    </div>

                    <div className="column">
                        <h3>Mobile App</h3>
                        <div className="app-buttons">
                            <div className="store-button">
                                <div className="icon-col">
                                    <img src={googlePlay} alt="Google Play" />
                                </div>
                                <div className="text-col">
                                    <p className='content-paragraph'>GET IT ON</p>
                                    <h3 className='content-heading'>Google Play</h3>
                                </div>
                            </div>

                            <div className="store-button mt-3">
                                <div className="icon-col">
                                    <img src={appleStore} alt="Apple Store" />
                                </div>
                                <div className="text-col">
                                    <p className='content-paragraph'>Download on the</p>
                                    <h3 className='content-heading'>Apple Store</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <hr className='customize-hr' />
                <div className="footer-bottom">
                    <div className="social-icons">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-linkedin"></i>
                    </div>
                    <div className="certifications mb-5 mt-3">
                        <img src={certification1} alt="Certification 1" />
                        <img src={certification2} alt="Certification 2" />
                        <img src={certification3} alt="Certification 3" />
                        <img src={certification4} alt="Certification 4" />
                    </div>
                </div>
                <hr className='customize-hr' />
                <div className="legal mb-5">
                    <p>Privacy Policy | Terms of Use | Cookie Policy</p>
                    <p>Copyright © 2024 KPI Group. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
