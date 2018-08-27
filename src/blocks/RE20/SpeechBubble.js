import styled from "styled-components";
import Bubble from "./Bubble";
import Words from "./Words";
import { absAnimated, pedalShadow } from "./Variables";
const SpeechBubble = styled.div`
  ${absAnimated};
  width: 30%;
  right: 10%;
  top: 53%;
  ${pedalShadow};
`;
SpeechBubble.Bubble = Bubble;
SpeechBubble.Words = Words;
export default SpeechBubble;
