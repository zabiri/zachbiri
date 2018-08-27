import styled from "styled-components";
import Flex from "./Flex";
import Logobox from "./Logobox";
import { Left, Right } from "./Cols";
import respond from "../../mixins/respond";
const footerContainer = styled.footer`
  background-color: #212121;
  box-sizing: border-box;
  clip-path: polygon(
    0% 10%,
    50% 0%,
    100% 10%,
    100% 100%,
    0% 100%
  );
  color: white;
  font-family: ${props => props.theme.fontParagraph};
  padding: 3rem 0;
  & a {
    color: white;
    text-decoration: none;
  }
  ${respond.upto599`
  
  `};
`;

footerContainer.Flex = Flex;
footerContainer.Logobox = Logobox;
footerContainer.Left = Left;
footerContainer.Right = Right;

export default footerContainer;
