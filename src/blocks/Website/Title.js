import styled from "styled-components";
const Title = styled.h2`
  font-family: ${props => props.theme.fontHeader};
  color: ${props => props.theme.palette3};
  text-align: center;
  font-weight: 700;
  font-size: 2rem;
`;
export default Title;
