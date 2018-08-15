import React from "react";
import "./NavIcon.css";
const navIcon = props => {
  let faIcon = null;
  if (props.type === "home") {
    faIcon = <i title="Home" className="fas fa-user-circle" />;
  }
  if (props.type === "web") {
    faIcon = <i title="Web development" className="fas fa-code" />;
  }
  if (props.type === "music") {
    faIcon = <i title="Music and audio" className="fas fa-music" />;
  }

  return (
    <figure className="NavIcon">
      {faIcon}
    </figure>
  );
};

export default navIcon;
