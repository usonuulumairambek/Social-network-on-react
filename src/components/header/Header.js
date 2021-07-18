import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">Logo</div>
      <div className="header__navbar">
        <ul className="header__navbar-item">
          <li className="header__navbar-items">
            <a href="http://localhost:3000/profile">Navbar</a>
          </li>
          <li className="header__navbar-items">
          <a href="http://localhost:3000/profile">props</a>
          </li>
          <li className="header__navbar-items">
            <a href="http://localhost:3000/profile">profile</a>
          </li>
          <li className="header__navbar-items">
            <a href="http://localhost:3000/profile">messages</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
