import React from "react";
import { NavLink } from 'react-router-dom'
import NavIcon from "./NavIcon/NavIcon";
import "./Nav.css";
const nav = () => {
  return (
    <nav className="Nav">
      <ul>
        <li>
        <NavLink to ="/">
          <NavIcon type="home"/>
        </NavLink>
        </li>
        <li>
        <NavLink to ="/web">
          <NavIcon type="web"/>
        </NavLink>
        </li>
        <li>
        <NavLink to ="/audio">
          <NavIcon type="music"/>
        </NavLink>
        </li>
      </ul>
      
    </nav>
  );
};

export default nav;
