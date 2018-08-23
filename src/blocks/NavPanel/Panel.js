import styled from "styled-components";
import List from "./List";
const Panel = styled.nav`
  bottom: 0;
  left: calc(50% - (${props => props.theme.navWidth} / 2));
  height: 5rem;
  position: fixed;
  z-index: ${props => props.theme.navZIndex};
  width: ${props => props.theme.navWidth};
`;
Panel.List = List;
export default Panel;
