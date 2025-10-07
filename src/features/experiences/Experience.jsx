import React from 'react';
import './Experience.css';

const Experience = ({ date, role, details }) => {
  return (
    <div className="experience-item">
      <div className="experience-date">{date}</div>
      <div className="experience-description">
        <p className="experience-role">{role}</p>
        <p className="experience-details">{details}</p>
      </div>
    </div>
  );
};

export default Experience;

