import React from 'react';
import './Footer.css';

import gmailIcon from '../../assets/gmail.png';
import githubIcon from '../../assets/github.png';
import itchIcon from '../../assets/itch.png';

const Footer = () => {
  return (
    <footer className="footer-container">
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
        <p className="credits">
            Made with React, Vite, Gemini and my Chuseok holiday time.
            All fonts used are either public domain or under SIL Open Font License.  
        </p>
    </footer>
  );
};

export default Footer;