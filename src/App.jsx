import React from 'react';
import './App.css';

import Layout from './components/Layout.jsx';
import Hero from './features/hero/hero.jsx'

import Profile from './features/profile/Profile.jsx'
import ProjectsDisplay from './features/projects/ProjectsDisplay.jsx';
import SkillsDisplay from './features/skills/SkillsDisplay.jsx';
import ExperiencesDisplay from './features/experiences/ExperiencesDisplay.jsx';
import Gallery from './features/gallery/Gallery.jsx';

export default function App () {
    return (
      <>
        <Hero />

        <main className="main-content"> 
          <Layout>
            <Profile />
            <SkillsDisplay />
            <ProjectsDisplay /> 
            <ExperiencesDisplay />
            <Gallery />
          
          </Layout>
        </main>
      </>
    )
}
