import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list-item">
          <NavLink to="/profile" activeClassName="selected">
            Profile
          </NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink to="/dialogs" activeClassName="selected">
            Dialogs
          </NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink to="/link">Link</NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink to="/link">Link</NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink to="/link">Link</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
