import { keyframes } from "styled-components";
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

export {
  pedalBounceIn,
  pedalDance,
  pedalEyesBlink,
  pedalPeakBlink,
  pedalRubberBand,
  pedalSwell,
  pedalTada
};
