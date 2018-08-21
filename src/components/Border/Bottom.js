import styled, { css } from "styled-components";

const BotBuild = css`
  background-color: ${props => props.theme.colorBorder};
  position: absolute;
  border-radius: 1rem;
  height: ${props => props.theme.borderThickness};
  width: ${props => props.theme.borderWidthBottom};
  bottom: ${props => props.theme.borderPadding};
`;

const BottomL = styled.div`
  ${BotBuild};
  left: ${props => props.theme.borderPadding};
`;
const BottomR = styled.div`
  ${BotBuild};
  right: ${props => props.theme.borderPadding};
`;

export { BottomL, BottomR };
