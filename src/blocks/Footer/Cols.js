import styled from "styled-components";
import respond from "../../mixins/respond";
const Cols = styled.div`
  box-sizing: border-box;
  font-family: ${props => props.theme.fontHeader};
  font-size: 2rem;
  padding: 0 3rem;
  padding-top: 2.2rem;
  padding-bottom: 2.2rem;
  width: 29rem;
  ${respond.upto599`
    width: 30.1rem;
    border-bottom: 1px rgb(54, 54, 54) dotted;
    padding-bottom: 2rem;
    text-align: center;
  `};
`;

const Left = Cols.extend`
  border-right: 1px rgb(54, 54, 54) solid;
  text-align: right;
  ${respond.upto599`
    border: 0;
    border-bottom: 1px rgb(54, 54, 54) dotted;
    padding-top: 0;
  `};
`;

const Right = Cols.extend`
  text-align: left;
`;

export { Left, Right };
