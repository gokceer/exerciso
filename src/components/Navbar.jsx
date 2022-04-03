import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="main-nav">
      <NavLink to="/home" activeClassName="active-style">
        Home
      </NavLink>
      <NavLink to="/create-exercise" activeClassName="active-style">
        Create Exercise
      </NavLink>
    </nav>
  );
};

export default Navbar;
