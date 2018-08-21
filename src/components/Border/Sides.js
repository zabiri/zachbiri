import styled, {css}from "styled-components";

const Side = css`
  background-color: ${props => props.theme.colorBorder};
  position: absolute;
  border-radius: 1rem;
  height: ${props => props.theme.borderHeight};
  width: ${props => props.theme.borderThickness};
  top: ${props => props.theme.borderPadding};
`;

const Left = styled.div`
  ${Side}
  left: ${props => props.theme.borderPadding};
`;
const Right = styled.div`
  ${Side}
  right: ${props => props.theme.borderPadding};
`;

export {Left, Right};
