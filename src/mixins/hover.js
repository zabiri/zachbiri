import { css } from "styled-components";

const hover = css`
  transform: scale3d(1, 1, 1) translateY(0);
  backface-visibility: hidden;
  &:hover {
    transform: scale3d(1.1, 1.1, 1.1) translateY(-0.3rem);
  }
`;

export default hover;
