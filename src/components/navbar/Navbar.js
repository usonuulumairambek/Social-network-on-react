import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
let Navbar = () => {
  let NavbarItems = [
{
  to: "/profile",
  text: "Profile"
},
{
  to: "/dialogs",
  text: "Messages"
},
{
  to: "/news",
  text: "News"
},
{
  to: "/music",
  text: "Music"
},
{
  to: "/todo",
  text: "Туду лист"
},
{
  to: "/lk",
  text: "Личный кабинет"
},
{
  to: "/country",
  text: "Страны"
},

  ]
  
  
  return (
    <div className="navbar">
      {NavbarItems.map((items)=>{
        return(
          <div className="navbar__items">
          <NavLink activeClassName="active" to={items.to}>{items.text}</NavLink>
          </div>
        )
      })}
      
      
    </div>
  );
};
export default Navbar;
