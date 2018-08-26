import styled from "styled-components";
import textShadow from "../../mixins/textShadow";
import respond from '../../mixins/respond'
const H1 = styled.h1`
  font-family: ${props => props.theme.fontHeader};
  font-size: 4rem;
  font-weight: 700;
  /* letter-spacing: -.1rem; */
  margin-bottom: 1rem;
  color: ${props => props.theme.palette4};
  ${textShadow};
  text-align: center;

  ${respond.tabland`
  font-size: 3.5rem;
  `}
  ${respond.tablarge`
  font-size: 3.5rem;
  `}
  ${respond.tabmid`
  font-size: 3rem;
  `}
  ${respond.tabsmall`
  font-size: 4rem;
  `}
  ${respond.phone`
  font-size: 4rem;
  `}
  ${respond.midphone`
  font-size: 3rem;
  `}
  ${respond.smallphone`
  font-size: 2rem;
  `}
`;
export default H1;