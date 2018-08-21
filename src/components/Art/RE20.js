import React from "react";
import styled, { keyframes } from "styled-components";
import wordBubble from "../../assets/images/re20/sup-word.png";
import wordBubbleWords from "../../assets/images/re20/sup-sup.png";
import pedalPeak from "../../assets/images/re20/sup-peak.png";
import pedalEyes from "../../assets/images/re20/sup-eyes.png";
import pedal from "../../assets/images/re20/sup-pedal.png";
const re20 = () => {
  const pedalBounceIn = keyframes`
  20%,
  40%,
  60%,
  80%,
  from,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }`;
  const pedalDance = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(0.95, 0.95, 0.95);
  }

  to {
    transform: scale3d(1, 1, 1);
  }`;
  const pedalRubberBand = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, .95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }`;
  const pedalTada = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }
  10%,
  20% {
    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
  }
  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }`;
  const pedalSwell = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }`;
  const pedalPeakBlink = keyframes`
    0%, 49%, 100% {
      opacity: 1;
    }
    50%, 99% {
      opacity: 0;
    }
`;
  const pedalEyesBlink = keyframes`
    0%, 45%, 49%, 51%, 55%, 57%, 100% {
      opacity: 1;
    }
    46%, 48%, 52%, 54% {
      opacity: 0;
    }
`;

  const pedalShadow = `filter: drop-shadow(17px -12px 22px rgba(0, 0, 0, 0.54));`;
  const absAnimated = `position: absolute;  backface-visibility: hidden;`;
  const absTopLayer = `width: 100%;  position: absolute; z-index: 2;`;
  
  const RE20Container = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
  `;
  const RE20 = styled.figure`
    position: relative;
    width: 80%;
    max-width: 72rem;
    margin: auto;
    animation: ${pedalBounceIn} 1s 0s;
  `;
  const RE20Peak = styled.img.attrs({
    alt: "(peaking light)"
  })`
    ${absTopLayer}
    animation: ${pedalPeakBlink} 1s infinite;
  `;
  const RE20Eyes = styled.img.attrs({
    alt: "(eyes)"
  })`
    ${absTopLayer}
    animation: ${pedalEyesBlink} 5s infinite;
  `;
  const RE20Pedal = styled.img.attrs({
    alt: "(RE201 fx pedal)"
  })`
    width: 100%;
    ${pedalShadow};
  `;
  const RE20Speech = styled.div`
    ${absAnimated} width: 30%;
    right: 10%;
    top: 53%;
    ${pedalShadow};
  `;
  const RE20Bubble = styled.img.attrs({
    alt: "(word bubble)"
  })`
    ${absAnimated} width: 100%;
    height: auto;
    right: 0;
    animation: ${pedalDance} 2s 1s infinite, ${pedalRubberBand} 1s 0s;
  `;
  const RE20Words = styled.img.attrs({
    alt: "Sup?",
    role: "text"
  })`
    ${absAnimated} top: 1.5vw;
    left: 38%;
    width: 41%;
    animation: ${pedalSwell} 2s 1.5s infinite alternate, ${pedalTada} 1s 0s;
  `;

  return (
    <RE20Container>
      <RE20>
        <RE20Peak src={pedalPeak} />
        <RE20Eyes src={pedalEyes} />
        <RE20Pedal src={pedal} />
        <RE20Speech>
          <RE20Bubble src={wordBubble} />
          <RE20Words src={wordBubbleWords} />
        </RE20Speech>
      </RE20>
    </RE20Container>
  );
};

export default re20;
