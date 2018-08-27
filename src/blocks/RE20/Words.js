import styled from "styled-components";
import { absAnimated } from "./Variables";
import { pedalSwell, pedalTada } from "./Keyframes";
import respond from "../../mixins/respond";
const Words = styled.img.attrs({
  alt: "Sup?",
  role: "text"
})`
  ${absAnimated};
  top: 1.5vw;
  left: 38%;
  width: 41%;
  animation: ${pedalSwell} 2s 1.5s infinite alternate, ${pedalTada} 1s 0s;
  ${respond.upto699`
    top: 3.1vw;
  `};
`;
export default Words;
