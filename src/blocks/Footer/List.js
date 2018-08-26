import styled from "styled-components";
import respond from '../../mixins/respond'
const List = styled.ul`
  list-style: none;
  margin-top: 0rem;
  padding: 0;
  width: 18.5rem;
  & li {
    margin: 0.2rem 0;
  }
  ${respond.upto599`
    margin: 2.4rem auto;
  `}
`;
export default List
