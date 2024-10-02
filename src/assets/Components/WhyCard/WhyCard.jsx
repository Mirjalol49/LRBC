import React from "react";
import "./WhyCard.css";

const WhyCard = ({ title, text, btn, link }) => {
  return (
    <div className="why-card">
      <div className="why-card-wrapper">
        <h3 className="why-title">{title}</h3>
        <div className="why-card-in">
          <p className="why-text">{text}</p>
          <a className="why-btn" href={link} role="button">
            {btn}
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhyCard;
