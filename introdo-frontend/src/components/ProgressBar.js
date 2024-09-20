// src/components/ProgressBar.js
import React, { useState, useEffect } from "react";
import "../assets/styles/ProgressBar.css"; 

const ProgressBar = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTime((prevTime) => (prevTime < 59 ? prevTime + 1 : 0));
    }, 1000);
    return () => clearInterval(timerInterval);
  }, []);

  const progress = (time / 59) * 100;

  return (
    <div className="progress-bar-container">
      <p>Timer: 14:{time < 10 ? `0${time}` : time}</p>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
