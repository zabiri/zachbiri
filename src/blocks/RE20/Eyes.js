import styled from "styled-components";
import { absTopLayer } from "./Variables";
import { pedalEyesBlink } from "./Keyframes";

const Eyes = styled.img.attrs({
  alt: "(eyes)"
})`
    ${absTopLayer}
    animation: ${pedalEyesBlink} 5s infinite;
  `;

export default Eyes;
