import styled from "styled-components";
import respond from '../../mixins/respond'
import textShadow from "../../mixins/textShadow";
const H1 = styled.h1`
  font-family: ${props => props.theme.fontHeader};
  font-size: 4rem;
  font-weight: 700;
  /* letter-spacing: -.1rem; */
  margin-bottom: 1rem;
  color: ${props => props.theme.palette4};
  ${textShadow};
  text-align: center;

  ${respond.upto1119`
  font-size: 3.5rem;
  `}
  ${respond.upto899`
  font-size: 3.5rem;
  `}
  ${respond.upto799`
  font-size: 3rem;
  `}
  ${respond.upto699`
  font-size: 4rem;
  `}
  ${respond.upto599`
  font-size: 4rem;
  `}
  ${respond.upto499`
  font-size: 3rem;
  `}
  ${respond.upto399`
  font-size: 2rem;
  `}
`;
export default H1;
