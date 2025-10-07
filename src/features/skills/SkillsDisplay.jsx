import React from 'react';
import './SkillsDisplay.css';

// Step 1: Import all your skill images from the assets folder
import skill1Img from '../../assets/skills/Skill1.png';
import skill2Img from '../../assets/skills/Skill2.png';
import skill3Img from '../../assets/skills/Skill3.png';
import skill4Img from '../../assets/skills/Skill4.png';
import skill5Img from '../../assets/skills/Skill5.png';
import skill6Img from '../../assets/skills/Skill6.png';
import skill7Img from '../../assets/skills/Skill7.png';
import skill8Img from '../../assets/skills/Skill8.png';
import skill9Img from '../../assets/skills/Skill9.png';
import skill10Img from '../../assets/skills/Skill10.png';
import skill13Img from '../../assets/skills/Skill13.png';

// Step 2: Store the imported images in an array for easy mapping
const skills = [
  skill1Img, skill2Img, skill3Img, skill4Img, skill5Img,
  skill6Img, skill13Img, skill7Img, skill8Img, skill9Img, 
  skill10Img,
];

const SkillsDisplay = () => {
  return (
    <section className="skills-section-container">
      <div className="skills-grid">
        {/* Step 3: Map over the array to render each image */}
        {skills.map((skillSrc, index) => (
          <img
            key={index}
            src={skillSrc}
            alt={`Skill icon ${index + 1}`}
            className="skill-icon"
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsDisplay;