import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import TechnicalSkills from './components/TechnicalSkills';
import CodingPlatforms from './components/CodingPlatforms';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <TechnicalSkills />
      <CodingPlatforms />
      <Contact />
      
      <footer className="py-8 px-4 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Rithwik. All rights reserved.</p>
      </footer>
    </div>
  );
}