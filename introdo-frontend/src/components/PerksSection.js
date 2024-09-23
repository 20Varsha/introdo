import React, { useEffect, useState } from "react";
import '../assets/styles/PerksSection.css';
import user from "../assets/images/user.png";
import arrow from "../assets/icons/up-arrow.png";
import AED from "../assets/images/AED.png";
import SAR from "../assets/images/SAR.png";
import OMR from "../assets/images/OMR.png";
import google from "../assets/images/google.png";
import microsoft from "../assets/images/microsoft.png";
import dynamics from "../assets/images/dynamics.png";
import oracle from "../assets/images/oracle.png";
import netsuit from "../assets/images/netsuit.png";
import largeFrame from "../assets/images/large-frame.png";
import logo1 from "../assets/images/Logo1.png";
import logo2 from "../assets/images/Logo2.png";
import logo3 from "../assets/images/Logo3.png";
import femaleAvatar from "../assets/images/female.png";
import cloud from "../assets/images/cloud.png";

const Skeleton = () => (
  <div className="skeleton-container">
    <div className="skeleton-text" />
    <div className="skeleton-text" />
  </div>
);

const Perks = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({ AED: '', SAR: '', OMR: '' });
  const [totalSeconds, setTotalSeconds] = useState(0); // Total time elapsed in seconds
  const [progress, setProgress] = useState(0); // Progress percentage

  //Skeleton
  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setData({
        AED: "90,718.94",
        SAR: "678,100.00",
        OMR: "67,693.80"
      });
      setIsLoading(false);
    };
    fetchData();
  }, []);

  //Progress-bar timer
  useEffect(() => {
    const totalDuration = 3600;
    const interval = setInterval(() => {
      setTotalSeconds((prev) => {
        if (prev < totalDuration) {
          const newSeconds = prev + 1;
          if (newSeconds % 59 === 0) {
            const newProgress = Math.floor(newSeconds / 59);
            setProgress(newProgress);
          }
          return newSeconds;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Format total seconds into MM:SS
  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="perks-container">
      <button className="single-button">
        WHY INTRODO?
      </button>
      <h1 className="perks-title text-center mt-4 mb-4">Unlock The Perks!</h1>
      <div className="perks-grid">

        {/* Global payrol section */}
        <div className="perk global-payroll">
          <h1>Global Payroll Simplicity</h1>
          <p className="content mt-2">Manage multi-currency payroll across the GCC and beyond, in English & Arabic. Seamless onboarding included!</p>
          <div className="payroll-info-container">
            <h4>Run Payroll</h4>
            <div className="currency-info">
              <img src={AED} alt="AED" className="currency-image" />
              {isLoading ? (
                <Skeleton />
              ) : (
                <>
                  <Skeleton />
                  <p>AED: {data.AED}</p>
                </>
              )}
            </div>
            <div className="currency-info">
              <img src={SAR} alt="SAR" className="currency-image" />
              {isLoading ? (
                <Skeleton />
              ) : (
                <>
                  <Skeleton />
                  <p>SAR: {data.SAR}</p>
                </>
              )}
            </div>
            <div className="currency-info">
              <img src={OMR} alt="OMR" className="currency-image" />
              {isLoading ? (
                <Skeleton />
              ) : (
                <>
                  <Skeleton />
                  <p>OMR: {data.OMR}</p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Insight section */}
        <div className="perk smart-insights">
          <button className="custom-button">
            {Math.floor(progress)}% <img src={arrow} alt="Arrow" className="arrow" />
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
              <h3>{formatTime(totalSeconds)} Hours</h3>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${progress}%` }}></div>
              </div>
            </div>
          </div>
          <div className="insights-description">
            <h1 className="text-dark text-center">Smart Insights</h1>
            <p className="text-dark">Craft customized reports and dashboards to steer data-driven decisions. All your historic employee data within one end-to-end solution.</p>
          </div>
        </div>

        {/* Legacy harmony section */}
        <div class="perk legacy-harmony">
          <h2>Legacy Harmony</h2>
          <p>
            Maximize operational efficiency with zero data loss. Sync all your business tools
            with an open API for seamless data integration.
          </p>
          <div class="row ml-5">
            <div class="col blue-box ml-4"></div>
            <div class="col white-box ml-3"><img src={google} alt="Google" /></div>
          </div>
          <div class="row second-row">
            <div class="col-3 white-box"><img src={microsoft} alt="Microsoft" /></div>
            <div class="col-3 white-box"><img src={dynamics} alt="Dynamics" /></div>
            <div class="col-3 pink-box"></div>
          </div>
          <div class="row third-row">
            <div class="col-3 orange-box"></div>
            <div class="col-3 white-box"><img src={oracle} alt="Oracle" /></div>
            <div class="col-4 "><img src={largeFrame} alt="Large Frame" /></div>
          </div>
          <div class="row fourth-row">
            <div class="col-4 white-box box-purple"><img src={netsuit} alt="NetSuite" /></div>
            <div class="col-3 box-blue"></div>
          </div>
        </div>

        {/* Rock-Solid-Compliance section */}
        <div className="rock-solid-compliance">
          <div className="row mt-2">
            <div className="col-8">
              <h2 className="text-light">Rock-Solid Compliance</h2>
              <p className="content">
                Stay GCC law-aligned amidst changing regulations. Worry-free compliance across locations,
                preventing penalties and legal hassles.
              </p>
            </div>
            <div className="col-4">
              <div className="logos">
                <div className="d-flex">
                  <div className="logo-wrapper">
                    <img src={logo1} alt="Logo 1" />
                  </div>
                </div>
                <div className="d-flex">
                  <div className="logo-wrapper">
                    <img src={logo2} alt="Logo 2" />
                  </div>
                  <div className="half-box">
                  </div>
                </div>
                <div className="d-flex">
                  <div className="bttom-logo">
                    <img src={logo3} alt="Logo 3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cloud-Powered Savings Section */}
        <div className="cloud-powered-savings">
          <div className="row">
            <div className="col-5">
              <div className="avatar-wrapper">
                <img src={cloud} alt="Cloud Icon" className="cloud-icon" />
                <img src={femaleAvatar} alt="Female Avatar" className="avatar" />
              </div>
            </div>
            <div className="col-7">
              <h2 className="text-light">Cloud-Powered Savings</h2>
              <p className="content">
                Centralize people management with one HR software. Save time and cut
                costs by leveraging cloud technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perks;

