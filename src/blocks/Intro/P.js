import styled from "styled-components";
import respond from '../../mixins/respond'

const P = styled.p`
  font-family: ${props => props.theme.fontParagraph};
  font-size: 1.8rem;
  font-weight: 400;
  hyphens: auto;
  margin-bottom: 0.5rem;
  text-indent: ${props=> props.indent ? '2rem':'0rem'};
  text-align: center;

  ${respond.tabland`
    font-size: 1.8rem;  
    text-align: center;
    text-indent: .5rem;
    hyphens: none;
  `}
  ${respond.tablarge`
    font-size: 1.65rem;  
    text-align: center;
    text-indent: .5rem;
    hyphens: none;
  `}
  ${respond.tabmid`
    font-size: 1.5rem;  
    text-align: center;
    text-indent: .5rem;
    hyphens: none;
  `}
  ${respond.tabsmall`
    font-size: 2rem;  
    text-align: center;
    text-indent: .5rem;
    hyphens: none;
  `}
  ${respond.phone`
    font-size: 1.8rem;  
    text-align: center;
    text-indent: .5rem;
    hyphens: none;
  `}
  ${respond.midphone`
    font-size: 1.5rem;  
    text-align: center;
    text-indent: .5rem;
    hyphens: none;
  `}
  ${respond.smallphone`
    font-size: 1.2rem;  
    text-align: center;
    text-indent: .5rem;
  `}
`;
export default P