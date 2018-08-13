import React from "react";
import "./Nav.css";
const nav = () => {
  return (
    <nav className="Nav">
      <div className="Nav__middlebar" />
      <div className="Nav__leftbar" />>
      <ul>
        <li>Home</li>
        <li>Web</li>
        <li>Music</li>
      </ul>
      <div className="Nav__rightbar" />
    </nav>
  );
};

export default nav;
