import React from "react";
import NavIcon from "./NavIcon/NavIcon";
import "./Nav.css";
const nav = () => {
  return (
    <nav className="Nav">
      <div className="Nav__leftbar" />
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
      <div className="Nav__rightbar" />
    </nav>
  );
};

export default nav;
