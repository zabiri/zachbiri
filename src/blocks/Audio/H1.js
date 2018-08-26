import styled from "styled-components";
import textShadow from "../../mixins/textShadow";
import respond from "../../mixins/respond";
const H1 = styled.h1`
  font-family: ${props => props.theme.fontHeader};
  font-size: 5.06rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${props => props.theme.palette4};
  ${textShadow};
  text-align: ${props => (props.center ? "center" : "left")};
  ${respond.upto1119`
  font-size: 4rem;
  `}
  ${respond.upto899`
  font-size: 4rem;
  `}
  ${respond.upto799`
  font-size: 4rem;
  `}
  ${respond.upto699`
  text-align: center;
  font-size: 9vw;
  `}
`;
export default H1;
