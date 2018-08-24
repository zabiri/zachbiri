import styled from "styled-components";
import textShadow from "../mixins/textShadow";
const H1 = styled.h1`
  font-family: ${props => props.theme.fontHeader};
  font-size: ${props => (props.intro ? "4rem" : "5.06rem")};
  font-weight: 700;
  /* letter-spacing: -.1rem; */
  margin-bottom: 1rem;
  color: ${props => props.theme.palette4};
  ${textShadow};
  text-align: ${props => (props.center ? "center" : "left")};
`;
export default H1;
