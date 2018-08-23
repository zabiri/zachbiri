import React from "react";
import Icon from './Icon'

const navIcon = props => {
  let faIcon = null;
  if (props.type === "home") {
    faIcon = <Icon title="Home" className="fas fa-user-circle" />;
  }
  if (props.type === "web") {
    faIcon = <Icon title="Web development" className="fas fa-code" />;
  }
  if (props.type === "music") {
    faIcon = <Icon title="Music and audio" className="fas fa-music" />;
  }

  return (
    <Icon.Container>
      {faIcon}
    </Icon.Container>
  );
};

export default navIcon;