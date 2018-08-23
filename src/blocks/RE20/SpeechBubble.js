import styled from "styled-components";
import { absAnimated, pedalShadow } from "./Variables";
import Bubble from "./Bubble";
import Words from "./Words";
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
