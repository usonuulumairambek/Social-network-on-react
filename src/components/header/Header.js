import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header__navbar">
        <ul className="header__navbar-item">
          <li className="header__navbar-items">
            <NavLink to="/dialogs">Messages</NavLink>
          </li>
          <li className="header__navbar-items">
            <NavLink to={"/profile"}>Profile</NavLink>
          </li>
          <li className="header__navbar-items">
            <NavLink to={"/news"}>News</NavLink>
          </li>
          <li className="header__navbar-items">
            <NavLink to={"/lk"}>Личный кабинет</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
