import React from "react";
import '../assets/styles/PerksSection.css';
import user from "../assets/images/user.png";
import arrow from "../assets/icons/up-arrow.png";

const Perks = () => {
  return (
    <div className="perks-container">
      <button className="single-button">
        WHY INTRODO?
      </button>
      <h1 className="perks-title">Unlock The Perks!</h1>
      <div className="perks-grid">
        <div className="perk global-payroll">
          <h2>Global Payroll Simplicity</h2>
          <p>Manage multi-currency payroll across the GCC and beyond, in English & Arabic. Seamless onboarding included!</p>
          <div className="payroll-info">
            <p>AED: 40,123.54</p>
            <p>SAR: 11,234.00</p>
            <p>OMR: 5,987.00</p>
          </div>
        </div>

        <div className="perk smart-insights">
        <button className="custom-button">
              45% <img src={arrow} alt="Arrow" className="arrow" />
            </button>
          <div className="user-details-container">
            <div className="user-info">
              <img src={user} alt="Fatima Saleem" className="user-image" />
              <div className="user-text">
                <p className="user-name">Fatima Saleem</p>
                <p className="user-dates text-muted">(Aug 07, 2024 - Aug 15, 2024)</p>
              </div>
            </div>
            <hr className="custom-hr" />
            <div className="worked-hours">
              <p className="text-muted text-center">Hours Worked</p>
              <h3>14:36 Hours</h3>
              <div className="progress-bar-container">
                <div className="progress-bar"></div>
              </div>
              <p className="progress-text">14:36 out of 24:00 hours</p>
            </div>
          </div>


          <div className="insights-description">
            <h1 className="text-dark">Smart Insights</h1>
            <p className="text-dark">Craft customized reports and dashboards to steer data-driven decisions. All your historic employee data within one end-to-end solution.</p>
          </div>
        </div>


        <div className="perk legacy-harmony">
          <h2>Legacy Harmony</h2>
          <p>Maximize operational efficiency with zero data loss. Sync all your business tools with an open API for seamless data integration.</p>
          <div className="integration-icons">
            <img src="google.png" alt="Google" />
            <img src="microsoft.png" alt="Microsoft" />
            <img src="oracle.png" alt="Oracle NetSuite" />
          </div>
        </div>

        <div className="perk rock-solid-compliance">
          <h2>Rock-Solid Compliance</h2>
          <p>Stay GCC law-aligned amidst changing regulations. Worry-free compliance across locations, preventing penalties and legal hassles.</p>
        </div>

        <div className="perk cloud-powered-savings">
          <h2>Cloud-Powered Savings</h2>
          <p>Centralize people management with one HR software. Save time and cut costs by leveraging cloud technology.</p>
        </div>
      </div>
    </div>
  );
};

export default Perks;

