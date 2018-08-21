import styled from "styled-components";

import Top from "./Top";
import { Right, Left } from "./Sides";
import { BottomL, BottomR } from "./Bottom";
import { LBar, RBar } from './SideBars'

const Border = styled.div`
  pointer-events: none;
  left: 0;
  height: 100vh;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${props => props.theme.borderZIndex};
  filter: drop-shadow(${props => props.theme.shadow});
`;

Border.Top = Top;
Border.Right = Right;
Border.Left = Left;
Border.BottomL = BottomL;
Border.BottomR = BottomR;
Border.LBar = LBar;
Border.RBar = RBar;

export default Border;
