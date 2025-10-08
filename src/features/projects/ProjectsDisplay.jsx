import React, { useState } from 'react';
import './ProjectsDisplay.css';
import Project from './Project.jsx'

import project1Img from '../../assets/projects/Project1.png'; 
import project2Img from '../../assets/projects/Project2.png'; 
import project3Img from '../../assets/projects/Project3.gif';
import project4Img from '../../assets/projects/Project4.png';
import project5Img from '../../assets/projects/Project5.png';

// Define your project data in an array for easy management
const projectData = [
  {
    name: 'Neuro Adventures',
    imageSrc: project1Img,
    description: 'A roguelike fangame inspired by the likes of Magic Survivors and Holocure. However, there is a twist: instead of one, you play as two characters.',
    link: 'https://kotgedev.itch.io/neuro-adventures#',
    tags: ['Dev', 'Design', 'Art'], 
  },
  {
    name: 'To the Mars',
    imageSrc: project2Img,
    description: 'A turn-based two player game based on the popular boardgame Snakes & Ladders. As a submission to the PoolCore game jam, it attained 2nd place.',
    link: 'https://poolc.org/project/504',
    tags: ['Art'], 
  },
  {
    name: 'LIFE DREAM MEMORY',
    imageSrc: project3Img,
    description: (
      <>
        A roguelike game with a unique reverse health mechanic where your HP also functions as the experience bar. This project was notably a{' '}
        <a
          href= "https://youtu.be/0rc5tU79T7M?si=cxDZ7kYH2wCYlp55" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-link"
        > 
          featured submission  
        </a>
        {' '}in Neuro-sama Game Jam 2.  
      </>
    ),
    link: 'https://kotgedev.itch.io/life-dream-memory',
    tags: ['Dev', 'Design', 'Art'], 
  },
  {
    name: 'Lost Her Mind',
    imageSrc: project4Img,
    description: (
      <>
        A mystery-driven 'escape room' style puzzle game with immersive art and visuals. This project received distinction as a{' '}
        <a
          href="https://youtu.be/IK666SuibUg?si=yhf6Gbo3zor772xC"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-link"
        >
          featured submission
        </a>{' '}
        in the Neuro-sama Birthday Game Jam.
      </>
    ),
    link: 'https://cjmaxik.itch.io/lost-her-mind',
    tags: ['Dev'],
  },
  {
    name: 'Pilot: Quest for the Artifact',
    imageSrc: project5Img,
    description: 'A spacecraft simulation roguelike with an emphasis on realistic physics. One of my ongoing indie game development projects.',
    link: '',
    tags: ['Dev', 'Design', 'Art'],
  },
];

const ProjectsDisplay = () => {
  const [isExpanded, setIsExpanded] = useState(false); 
  const [isTransitioning, setIsTransitioning] = useState(false);
  const projectsToShow = isExpanded ? projectData : projectData.slice(0, 4); 

  const handleToggle = (expandState) => {
    // Prevent new clicks during the cooldown period
    if (isTransitioning) return;

    setIsExpanded(expandState);
    setIsTransitioning(true);

    // After 500ms, turn off the transitioning state to re-enable clicks.
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <section 
      className={`projects-section-container ${isTransitioning ? 'is-transitioning' : ''}`} 
      id="projects"
    >
      <h1 className="projects-title"> Projects </h1>
      <div className="projects-grid">
        {projectsToShow.map((project) => (
          <Project
            key={project.name}
            name={project.name}
            imageSrc={project.imageSrc}
            description={project.description}
            link={project.link}
            tags={project.tags}
          />
        ))}
      </div>

      {
        projectData.length > 4 && !isExpanded && (
          <button
            className="expand-button"
            onClick={() => handleToggle(true)}
          >
            {'< Show More >'} 
          </button>
        )
      }

      {
        isExpanded && (
          <button 
            className="expand-button" 
            onClick={() => handleToggle(false)}
          >
            {'> Show Less <'}
          </button>
        )
      }      
    </section>
  );
};

export default ProjectsDisplay;