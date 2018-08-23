import styled from "styled-components";
import { absTopLayer } from "./Variables";
import { pedalPeakBlink } from "./Keyframes";



const Peak = styled.img.attrs({
  alt: "(peaking light)"
})`
    ${absTopLayer}
    animation: ${pedalPeakBlink} 1s infinite;
  `;
export default Peak;
