import React from "react";
import Panel from "./Panel";
import NavIcon from "../NavIcon";

const nav = props => {
  return (
    <Panel>
      <Panel.List>
        <Panel.List.Item>
          <NavIcon type="home" />
        </Panel.List.Item>
        <Panel.List.Item>
          <NavIcon type="web" />
        </Panel.List.Item>
        <Panel.List.Item>
          <NavIcon type="music" />
        </Panel.List.Item>
      </Panel.List>
    </Panel>
  );
};

export default nav;
