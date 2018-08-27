import styled from "styled-components";
import { pedalDance, pedalRubberBand } from "./Keyframes";
import { absAnimated } from "./Variables";
const Bubble = styled.img.attrs({
  alt: "(word bubble)",
})`
  ${absAnimated} width: 100%;
  height: auto;
  right: 0;
  animation: ${pedalDance} 2s 1s infinite, ${pedalRubberBand} 1s 0s;
`;
export default Bubble;
