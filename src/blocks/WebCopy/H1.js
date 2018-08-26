import styled from "styled-components";
import respond from "../../mixins/respond";
import textShadow from "../../mixins/textShadow";
const H1 = styled.h1`
  font-family: ${props => props.theme.fontHeader};
  font-size: 5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${props => props.theme.palette4};
  ${textShadow};
  text-align: center;
  ${respond.upto499`
    font-size: 8.6vw;
  `};
  ${respond.upto299`
    font-size: 8.3vw;
  `};
`;
export default H1;
