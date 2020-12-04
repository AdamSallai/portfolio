import React from 'react';
import About from './components/about/About';
import Contact from './components/contect/Contact';
import Navbar from './components/navbar/Navbar';
import Projects from './components/project/Projects';
import Skillset from './components/skillset/Skillset';
import "./style/App.scss"

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Skillset />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
