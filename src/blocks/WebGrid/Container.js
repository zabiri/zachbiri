import styled from "styled-components";
import respond from '../../mixins/respond'

const WebGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 35rem));
  justify-content: center;
  padding: ${props => props.theme.contentMargin};
  ${respond.upto499`
    padding: ${props => props.theme.contentMargin} 0;
  `}
`;
export default WebGrid;
