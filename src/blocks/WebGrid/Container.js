import styled from "styled-components";
const WebGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 35rem));
  justify-content: center;
  padding: ${props => props.theme.contentMargin};
`;
export default WebGrid;
