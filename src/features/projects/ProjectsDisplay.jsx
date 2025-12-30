import React, { useState } from 'react';
import './ProjectsDisplay.css';
import Project from './Project.jsx'
import useIntersectionObserver from '../../hooks/useInteractionObserver.js';

import project1Img from '../../assets/projects/Project1.png'; 
import project2Img from '../../assets/projects/Project2.png'; 
import project3Img from '../../assets/projects/Project3.gif';
import project4Img from '../../assets/projects/Project4.png';
import project5Img from '../../assets/projects/main_capsule.png';

// Define your project data in an array for easy management
const projectData = [
  {
    name: 'Pilot: 6174',
    imageSrc: project5Img,
    description: 'A spacecraft simulation roguelike with an emphasis on realistic physics.',
    link: '',
    tags: ['Dev', 'Design', 'Art'],
  },
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
  }
];

const ProjectsDisplay = () => {
  const [isExpanded, setIsExpanded] = useState(false); 
  const projectsToShow = isExpanded ? projectData : projectData.slice(0, 4); 

  const [sectionRef, isSectionVisible] = useIntersectionObserver({threshold: 0.1});

  return (
    <section 
      ref={sectionRef}
      className="projects-display-container" 
      id="projects"
    >
      <h1 
        className={`projects-title fade-in-up ${isSectionVisible ? 'is-visible' : ''}`}
      >
        My Projects
      </h1>
      <div className="projects-grid">
        {projectsToShow.map((project, index) => (
          <div
            key={project.name}
            className={`project-card-enter ${isSectionVisible ? 'is-visible' : ''}`}
            style={
              {animationDelay : `${(index < 8 ? index % 4 : index - 4) * 150}ms`}
            }
          >
            <Project
              key={project.name}
              name={project.name}
              imageSrc={project.imageSrc}
              description={project.description}
              link={project.link}
              tags={project.tags}
            />
          </div>
        ))}
      </div>

      {
        projectData.length > 4 && !isExpanded && (
          <button
            className="expand-button"
            onClick={() => setIsExpanded(true)}
          >
            {'< Show More >'} 
          </button>
        )
      }

      {
        isExpanded && (
          <button 
            className="expand-button" 
            onClick={() => setIsExpanded(false)}
          >
            {'> Show Less <'}
          </button>
        )
      }      
    </section>
  );
};

export default ProjectsDisplay;