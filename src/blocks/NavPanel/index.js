import React from "react";
import { NavLink } from "react-router-dom";
import Panel from "./Panel";
import NavIcon from "../NavIcon";

const nav = props => {
  return (
    <Panel>
      <Panel.List>
        <Panel.List.Item>
          <NavLink to="/">
            <NavIcon type="home" />
          </NavLink>
        </Panel.List.Item>
        <Panel.List.Item>
          <NavLink to="/web">
            <NavIcon type="web" />
          </NavLink>
        </Panel.List.Item>
        <Panel.List.Item>
          <NavLink to="/audio">
            <NavIcon type="music" />
          </NavLink>
        </Panel.List.Item>
      </Panel.List>
    </Panel>
  );
};

export default nav;
