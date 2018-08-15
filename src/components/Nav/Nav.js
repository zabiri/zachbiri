import React from "react";
import NavIcon from "./NavIcon/NavIcon";
import "./Nav.css";
const nav = () => {
  return (
    <nav className="Nav">
      <ul>
        <li>
        <NavIcon type="home"/>
        </li>
        <li>
        <NavIcon type="web"/>
        </li>
        <li>
        <NavIcon type="music"/>
        </li>
      </ul>
      
    </nav>
  );
};

export default nav;
