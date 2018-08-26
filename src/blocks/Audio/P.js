import styled from "styled-components";

const P = styled.p`
  font-family: ${props => props.theme.fontParagraph};
  font-size: 1.8rem;
  font-weight: 400;
  hyphens: auto;
  margin-bottom: 0.5rem;
  text-indent: ${props=> props.indent ? '2rem':'0rem'};
  text-align: ${props=> props.center ? 'center' : 'left'}
  
`;
export default P