import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        exact
        to="/"
        className="navbar-item user-icon"
        activeClassName="active"
      ></NavLink>
      <NavLink
        exact
        to="/skillset"
        className="navbar-item skillset-icon"
        activeClassName="active"
      ></NavLink>
      <NavLink
        exact
        to="/projects"
        className="navbar-item projects-icon"
        activeClassName="active"
      ></NavLink>
      <NavLink
        exact
        to="/contact"
        className="navbar-item contact-icon"
        activeClassName="active"
      ></NavLink>
    </nav>
  );
};

export default Navbar;
