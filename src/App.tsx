import React from "react";
import About from "./components/about/About";
import Contact from "./components/contect/Contact";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/project/Projects";
import Skillset from "./components/skillset/Skillset";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./style/App.scss";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/" exact component={About} />
        <Route path="/skillset" exact component={Skillset} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/contact" exact component={Contact} />
      </Router>
    </div>
  );
};

export default App;
