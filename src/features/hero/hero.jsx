import React from 'react';
import './Hero.css';

// Import assets for the hero section
// Using absolute paths from the project root for better reliability.
import videoBG from '../../assets/example.mp4';
import gmailIcon from '../../assets/gmail.png';
import githubIcon from '../../assets/github.png';
import itchIcon from '../../assets/itch.png';

const Hero = () => {
  return (
    <section className="hero-container" id="hero">
      {/* Background video */}
      <video
        className="hero-video"
        src={videoBG}
        autoPlay
        loop
        muted
        playsInline // Important for mobile browsers
      />
      
      {/* Centered content */}
      <div className="hero-content">
        <h1>Haram Bae</h1>
        <h2>Developer - Designer - Artist</h2>
        <div className="social-links">
          <a href="mailto:harambae1506@gmail.com" title="Email">
            <img src={gmailIcon} alt="GitHub" className="social-icon" />
          </a>
          <a href="https://github.com/KotgeDev" target="_blank" rel="noopener noreferrer" title="GitHub">
            <img src={githubIcon} alt="GitHub" className="social-icon" />
          </a>
          <a href="https://kotgedev.itch.io/" target="_blank" rel="noopener noreferrer" title="Itch.io">
            <img src={itchIcon} alt="Itch.io" className="social-icon" />
          </a>
        </div>
      </div>

      <div className="video-context">{'< Pilot > concept gameplay'}</div>
    </section>
  );
};

export default Hero;

