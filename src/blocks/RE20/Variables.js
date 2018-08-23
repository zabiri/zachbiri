import { css } from "styled-components";
const pedalShadow = css`
  filter: drop-shadow(17px -12px 22px rgba(0, 0, 0, 0.54));
`;
const absAnimated = css`
  position: absolute;
  backface-visibility: hidden;
`;
const absTopLayer = css`
  width: 100%;
  position: absolute;
  z-index: 2;
`;
export { pedalShadow, absAnimated, absTopLayer };
