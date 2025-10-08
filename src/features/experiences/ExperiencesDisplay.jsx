import React from 'react';
import Experience from './Experience';
import './ExperiencesDisplay.css';

// Define your experience data in an array
const experienceData = [
  {
    date: 'Mar 2025 - Present',
    role: '> Member - PoolC',
    details: 'Participating as a part of the game design, graphics, and development teams. Engaged in seminars on game design and marketing',
  },
  {
    date: 'June 2021 - May 2023',
    role: '> Team Leader - Appropriate Technology Team',
    details: 'Led a team to design a cost-effective, eco-friendly fire extinguisher using recycled materials. The team recieved 1st place in the 13th Creative Design Online Contest, organized by the Korea Testing Laboratory.',
  },
];

const ExperiencesDisplay = () => {
  return (
    // This section has a relative position to anchor the vertical line
    <div className="experiences-display" id="experiences">
      <h1 className="experiences-title">Experiences</h1>
      <div className="list-and-line">
        <div className="experiences-list">
          {experienceData.map((exp, index) => (
            <Experience
              key={index}
              date={exp.date}
              role={exp.role}
              details={exp.details}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencesDisplay;
