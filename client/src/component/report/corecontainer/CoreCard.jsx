// CoreCard.js
import React from 'react';
import '../css/core.css';

const CoreCard = ({ title, icon, bgColor, bgImage, steps }) => {
  return (
    <div className="coreCards" style={{ backgroundColor: bgColor, backgroundImage: `url(${bgImage})` }}>
      <div className="coreCardHeader">
        <p>{title}</p>
        <img src={icon} alt={`icon ${title}`} />
      </div>
      <div className="coreCardContent">
        <div className="coreCardStepper"></div>
        {steps.map((step, index) => (
          <div className="coreStepsRow" key={index}>
            <div className="coreStepsRowIndex coreStepsRowIndexSelected">{step.index}</div>
            <div className="coreStepsRowText">
              <p>{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreCard;
