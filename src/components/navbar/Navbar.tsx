import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {

  return (
    <div>
      <Link to="/">About</Link>
      <Link to="/skillset">Skillset</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Navbar;
