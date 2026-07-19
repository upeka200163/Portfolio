import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './About' 
import Education from './Education'  
import Skills from './Skills'
import Project from './Project'
import Leadership from './Leadership'
import Contact from './Contact'


function App() {
  return (
    <div>
      <h1>Upeka Mahanama</h1>
      <p>Undergraduate | Web Developer</p>
      <About />
      <Education />
      <Skills />
      <Project />
      <Leadership />
      <Contact /> 
    </div>
  );
}

export default App;

