import { css } from "styled-components";
// MEDIA QUERY MANAGER
// -------------------
// 600-900: tablet in portrait
// 900-1200: tablet in landscape
// [1200-1800] is where our normal styles apply
// 1800+: big desktop
//  choices for breakpoint argument:
// -phone
// -tab-port
// -tab-land
// -big-desktop
// 1em = 16px
// -------------------
const sizes = {
  phone: 600,
  tabport: 900,
  tabland: 1200
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

// usage:  ${media.desktop`background: dodgerblue;`}

// end Media query manager
export default media;
