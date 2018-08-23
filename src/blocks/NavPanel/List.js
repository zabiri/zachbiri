import styled from "styled-components";
import verticalCenter from "../../mixins/verticalCenter";
import Item from "./Item";
const List = styled.ul`
  list-style: none;
  ${verticalCenter};
  text-align: center;
  padding-left: calc(1.5 * ${props => props.theme.borderThickness});
  padding-right: calc(1.5 * ${props => props.theme.borderThickness});
`;
List.Item = Item;
export default List;
