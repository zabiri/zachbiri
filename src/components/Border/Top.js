import styled from "styled-components";

const Top = styled.div`
  background-color: ${props => props.theme.colorBorder};
  border-radius: 1rem;
  left: ${props => props.theme.borderPadding};
  top: ${props => props.theme.borderPadding};
  position: absolute;
  height: ${props => props.theme.borderThickness};
  width: ${props=>props.theme.borderWidth}
`;

export default Top;
