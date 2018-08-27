import styled from "styled-components";
import respond from "../../mixins/respond";
const Cols = styled.div`
  box-sizing: border-box;
  font-size: 1.2rem;
  padding: 0 3rem;
  width: 29rem;
  ${respond.upto599`
    width: 30.1rem;
  `};
`;

const Left = Cols.extend`
  border-right: 1px rgb(54, 54, 54) solid;
  font-family: ${props => props.theme.fontHeader};
  font-size: 2rem;
  padding-top: 2.2rem;
  padding-bottom: 2.2rem;
  text-align: right;
  ${respond.upto599`
    border: 0;
    border-bottom: 1px rgb(54, 54, 54) dotted;
    padding-bottom: 2rem;
    padding-top: 0;
    text-align: center;
    font-size: 2rem;
  `};
`;

const Right = Cols.extend`
  text-align: left;
  font-size: 2rem;
  padding-top: 2.2rem;
  padding-bottom: 2.2rem;
  font-family: ${props => props.theme.fontHeader};
  ${respond.upto599`
    text-align: center;
    padding-bottom: 2rem;
    border-bottom: 1px rgb(54, 54, 54) dotted;
  `};
`;

export { Left, Right };
