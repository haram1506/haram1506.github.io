import React from 'react';
import './App.css';
import './animations.css';

import Layout from './components/Layout.jsx';
import Hero from './features/hero/hero.jsx'
import Navbar from './features/navbar/navbar.jsx';
import Footer from './features/footer/Footer.jsx';

import Profile from './features/profile/Profile.jsx'
import ProjectsDisplay from './features/projects/ProjectsDisplay.jsx';
import SkillsDisplay from './features/skills/SkillsDisplay.jsx';
import ExperiencesDisplay from './features/experiences/ExperiencesDisplay.jsx';
import Gallery from './features/gallery/Gallery.jsx';

export default function App () {
    return (
      <>
        <Navbar /> 
        <Hero />

        <main className="main-content"> 
          <Layout>
            <Profile />
            <SkillsDisplay />
            <ProjectsDisplay /> 
            <ExperiencesDisplay />
            <Gallery />
            <Footer /> 
          </Layout>
        </main>
      </>
    )
}
