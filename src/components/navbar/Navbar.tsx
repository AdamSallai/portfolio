import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {

  return (
    <nav className="navbar">
      <Link to="/">
        <div className="navbar-item user-icon"></div>
      </Link>
      <Link to="/skillset">
        <div className="navbar-item skillset-icon"></div>
      </Link>
      <Link to="/projects">
        <div className="navbar-item projects-icon"></div>
        </Link>
      <Link to="/contact">
        <div className="navbar-item contact-icon"></div>
        </Link>
    </nav>
  );
};

export default Navbar;
