import styled from "styled-components";

const Top = styled.div`
  background-color: ${props => props.theme.colorBorder};
  position: absolute;
  border-radius: 1rem;
  left: ${props => props.theme.borderPadding};
  top: ${props => props.theme.borderPadding};
  height: ${props => props.theme.borderThickness};
  width: ${props => props.theme.borderWidth};
`;

const Side = Top.extend`
  height: ${props => props.theme.borderHeight};
  width: ${props => props.theme.borderThickness};
  top: ${props => props.theme.borderPadding};
`;

const Left = Side.extend`
  left: ${props => props.theme.borderPadding};
`;

const Right = Side.extend`
  left: auto;
  right: ${props => props.theme.borderPadding};
`;

const Bottoms = Top.extend`
  height: ${props => props.theme.borderThickness};
  width: ${props => props.theme.borderWidthBottom};
  bottom: ${props => props.theme.borderPadding};
  top: auto;
  left: auto;
`;

const BottomL = Bottoms.extend`
  left: ${props => props.theme.borderPadding};
`;
const BottomR = Bottoms.extend`
  right: ${props => props.theme.borderPadding};
`;

export { Top, Left, Right, BottomL, BottomR };
