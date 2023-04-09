import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const className = ({ isActive }) => isActive ? "activeLink" : "link";
  return (
    <nav>
      <NavLink className={className} to="/" end>Home</NavLink>
      <NavLink to="courses">Courses</NavLink>
      <NavLink className={className} to="/about">About</NavLink>
      <NavLink className={className} to="/contacts">Contacts</NavLink>
    </nav>
  );
};

export default Menu;
