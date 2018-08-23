import styled from "styled-components";
const Container = styled.figure`
  width: calc((${props => props.theme.navWidth} / 3) - 1rem);
  display: inline-block;
`;
export default Container