import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

import userContext from "../../contexts/userContext";
import { useContext } from "react";
function Navbar() {
  const { user } = useContext(userContext);
  return (
    <nav className="navbar">
      <h3>{user.name}</h3>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/details">Add details</NavLink>
    </nav>
  );
}

export default Navbar;
