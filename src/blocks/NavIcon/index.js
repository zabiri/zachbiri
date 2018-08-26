import React from "react";
import Icon from "./Icon";

const navIcon = props => {
  let faIcon = null;
  let link = null;
  if (props.type === "home") {
    faIcon = <Icon title="Home" className="fas fa-user-circle" />;
    link = "#home";
  }
  if (props.type === "web") {
    faIcon = <Icon title="Web development" className="fas fa-code" />;
    link = "#web";
  }
  if (props.type === "music") {
    faIcon = <Icon title="Music and audio" className="fas fa-music" />;
    link = "#music";
  }

  return (
    <Icon.Container>
      <a href={link}>{faIcon}</a>
    </Icon.Container>
  );
};

export default navIcon;
