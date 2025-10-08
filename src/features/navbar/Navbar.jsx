import React, { useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  // This useEffect hook runs once when the component is first rendered.
  useEffect(() => {
    // This function will handle the smooth scrolling
    const smoothScrollHandler = (event) => {
      // 1. Prevent the default "jump" behavior of the link
      event.preventDefault();
      
      // 2. Get the target ID from the link's href (e.g., "#projects")
      const targetId = event.currentTarget.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      // 3. If the target element exists, scroll to it smoothly
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start' // Aligns the top of the element to the top of the viewport
        });
      }
    };

    // Find all links in the navbar that point to an ID
    const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
    
    // Attach our custom click handler to each link
    navLinks.forEach(link => {
      link.addEventListener('click', smoothScrollHandler);
    });

    // Cleanup function: This is important for React. It removes the event
    // listeners when the component is unmounted to prevent memory leaks.
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', smoothScrollHandler);
      });
    };
  }, []); // The empty array [] ensures this effect only runs once.

  return (
    <nav className="navbar">
        <div className="nav-content">
            <a href="#hero" className="home-link">Home</a>
            <ul className="nav-links">
                <li><a href="#profile">Profile</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experiences">Experiences</a></li>
                <li><a href="#gallery">Gallery</a></li>
            </ul>
        </div>
    </nav>
  );
};

export default Navbar;

