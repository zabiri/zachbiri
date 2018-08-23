import React from "react";
import styled from "styled-components";
import HeadSVG from "../../assets/images/head.svg";
import HairBounceIn from "./HairBounceIn";
import HeadVideo from "../../assets/video/liquidsquare.mp4";
import HeadVideoPlaceholder from "../../assets/images/liquidsquare.png";

const Video = styled.video.attrs({
  muted: true,
  playsInline: true,
  autoPlay: true,
  loop: true,
  poster: { HeadVideoPlaceholder },
  children: <source src={HeadVideo} />
})`
  margin: auto;
  width: 80%;
  mask-image: url(${HeadSVG});
  mask-repeat: no-repeat;
  mask-position: center;
  transform: translate3d(6%, 0, 0);
  backface-visibility: hidden;
  animation: ${HairBounceIn} 1s 0s;
  filter: drop-shadow(
    0px 0px 0px #4444dd
  ); // this doesn't actually do anything, but it does fix a firefox bug where the svg doesn't animate.
`;

export default Video;
