import styled, { css } from "styled-components";

const sideBars = css`
  height: calc(${props => props.theme.borderThickness} * 3);
  background-color: ${props => props.theme.colorBorder};
  border-radius: 0.4rem;
  position: absolute;
  bottom: calc(${props => props.theme.borderPadding} - 1);
  width: ${props => props.theme.borderThickness};
  z-index: -1;
`;

const LBar = styled.div`
  ${sideBars};
  left: ${props => props.theme.borderBumperDisplacement};
`;
const RBar = styled.div`
  ${sideBars};
  right: ${props => props.theme.borderBumperDisplacement};
`;

export { LBar, RBar };
