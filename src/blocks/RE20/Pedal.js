import styled from "styled-components";
import { pedalShadow } from "./Variables";
const Pedal = styled.img.attrs({
  alt: "(RE201 fx pedal)"
})`
  width: 100%;
  ${pedalShadow};
`;
export default Pedal;
