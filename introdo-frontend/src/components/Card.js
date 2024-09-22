// src/components/Card.js
import React from "react";
import "../assets/styles/Card.css";

const Card = ({ title, description }) => {
  return (
    <div className="card-container ">
      <div className="card-shadow"></div>
      <div className="card-main">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
