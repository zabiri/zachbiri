import { keyframes } from "styled-components";

const HairBounceIn = keyframes`
20%,
  40%,
  60%,
  80%,
  from,
  to {
    transform: translate3d(5%, 0, 0);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(5%, 0, 0) scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: translate3d(5%, 0, 0) scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: translate3d(5%, 0, 0) scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: translate3d(5%, 0, 0) scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: translate3d(5%, 0, 0) scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: translate3d(5%, 0, 0) scale3d(1, 1, 1);
  }
}`;

export default HairBounceIn;
