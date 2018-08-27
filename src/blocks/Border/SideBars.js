import styled from "styled-components";
const SideBars = styled.div`
  background-color: ${props => props.theme.colorBorder};
  position: absolute;
  height: calc(${props => props.theme.borderThickness} * 3);
  border-radius: 0.4rem;
  bottom: calc(${props => props.theme.borderPadding} - 1rem);
  width: ${props => props.theme.borderThickness};
  z-index: -1;
`;
const LBar = SideBars.extend`
  left: ${props => props.theme.borderBumperDisplacement};
`;
const RBar = SideBars.extend`
  right: ${props => props.theme.borderBumperDisplacement};
`;
export { LBar, RBar };
