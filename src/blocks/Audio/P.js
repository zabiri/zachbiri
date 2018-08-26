import styled from "styled-components";
import respond from "../../mixins/respond";
const P = styled.p`
  font-family: ${props => props.theme.fontParagraph};
  font-size: 1.8rem;
  font-weight: 400;
  hyphens: auto;
  margin-bottom: 1rem;
  text-indent: ${props => (props.indent ? "2rem" : "0rem")};
  text-align: ${props => (props.center ? "center" : "left")};
   ${respond.tabland`
    font-size: 1.8rem;  
    hyphens: none;
  `} ${respond.upto899`
    font-size: 1.65rem;  
  `} ${respond.upto799`
    font-size: 1.5rem;  
  `} ${respond.upto699`
    font-size: 2rem;  
  `} ${respond.upto599`
    font-size: 1.8rem;  
  `} ${respond.upto499`
    font-size: 1.7rem;  
  `} ${respond.upto399`
    font-size: 1.5rem;
    margin-bottom: 1.2rem;  
  `} ${respond.upto299`
    font-size: 1.5rem;
    margin-bottom: 1.2rem;  
  `};
`;
export default P;
