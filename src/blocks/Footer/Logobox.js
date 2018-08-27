import styled, { keyframes } from "styled-components";
import headImg from "../../assets/images/head.svg";
const Gradient = keyframes`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  `;

const Logobox = styled.div`
  animation: ${Gradient} 10s ease infinite;
  background: linear-gradient(270deg, #421093, #c5cbe3, #63B17D, #0eb7e1);
  background-size: 800% 800%;
  height: 10rem;
  margin: 2rem 0;
  mask: url(${headImg});
  mask-position: bottom center;
  mask-repeat: no-repeat;
  mask-size: contain;
  padding: 0;
  
`;

export default Logobox;
