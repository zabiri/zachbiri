import styled from "styled-components";
import shadow from "../../mixins/textShadow";
import hover from "../../mixins/hover";
import Container from "./Container";
const Icon = styled.i`
  font-size: 2.8rem;
  color: ${props => props.theme.colorBorder};
  transition: all 150ms ease-in;
  display: inline-block;
  ${shadow};
  ${hover};
`;
Icon.Container = Container;
export default Icon;
