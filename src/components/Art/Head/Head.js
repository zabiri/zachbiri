import React from "react";
import HeadVideoPlaceholder from "../../../assets/images/liquidsquare.jpg";
import HeadVideo from "../../../assets/video/liquidsquare.mp4";
import "./Head.css";
const head = () => {
  return (
    <figure className="Head">
      <video
        className="Head__video"
        muted
        playsInline
        autoPlay
        loop
        poster={HeadVideoPlaceholder}
      >
        <source src={HeadVideo} />
      </video>
    </figure>
  );
};

export default head;
