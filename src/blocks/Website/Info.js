import styled from "styled-components";
import respond from "../../mixins/respond";
const Info = styled.p`
  font-family: ${props => props.theme.fontParagraph};
  font-size: 1.8rem;
  hyphens: auto;
  text-indent: 5%;
  text-align: ${props => (props.center ? "center" : "left")};
  min-height: ${props => (props.info ? "8.7rem" : "auto")};
  ${respond.upto1119`
      font-size: 1.9rem;  
      hyphens: none;
    `};
  ${respond.upto699`
      font-size: 1.8rem;  
    `};
  ${respond.upto499`
      font-size: 1.7rem;  
    `};
  ${respond.upto399`
      font-size: 1.5rem;
      margin-bottom: 1.2rem;  
    `};
  ${respond.upto299`
      font-size: 1.5rem;
      margin-bottom: 1.2rem;  
    `};
`;
export default Info;
