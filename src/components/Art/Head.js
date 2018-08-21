import React from "react";
import styled, { keyframes } from "styled-components";
import HeadVideoPlaceholder from "../../assets/images/liquidsquare.png";
import HeadVideo from "../../assets/video/liquidsquare.mp4";
import HeadSvg from "../../assets/images/head.svg";

const hairBounceIn = keyframes`
20%,
  40%,
  60%,
  80%,
  from,
  to {
    transform: translate3d(6%, 0, 0);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(6%, 0, 0) scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: translate3d(6%, 0, 0) scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: translate3d(6%, 0, 0) scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: translate3d(6%, 0, 0) scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: translate3d(6%, 0, 0) scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: translate3d(6%, 0, 0) scale3d(1, 1, 1);
  }
}`;

const head = () => {
  const Head = styled.figure`
    display: flex;
    justify-content: center;
    flex-direction: column;
    video {
      margin: auto;
      width: 80%;
      mask-image: url(${HeadSvg});
      mask-repeat: no-repeat;
      mask-position: center;
      transform: translate3d(6%, 0, 0);
      backface-visibility: hidden;
      animation: ${hairBounceIn} 1s 0s;
      filter: drop-shadow(
        0px 0px 0px #4444dd
      ); // this doesn't actually do anything, but it does fix a firefox bug where the svg doesn't animate.
    }
  `;
  return (
    <Head>
      <video
        muted
        playsInline
        autoPlay
        loop
        poster={HeadVideoPlaceholder}
      >
        <source src={HeadVideo} />
      </video>
    </Head>
  );
};

export default head;
