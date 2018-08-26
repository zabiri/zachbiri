import { css } from "styled-components";
// MEDIA QUERY MANAGER
// -------------------
// 600-900: tablet in portrait
// 900-1200: tablet in landscape
// [1200-1800] is where our normal styles apply
// 1800+: big desktop
//  choices for breakpoint argument:
// -upto599
// -tab-port
// -tab-land
// -big-desktop
// 1em = 16px
// -------------------
const sizes = {
  upto299: 299,
  upto399:399,
  upto499: 499,
  upto599: 599,
  tabsmall: 699,
  upto699: 799,
  upto899: 899,
  tabland: 1119
}

// Iterate through the sizes and create a media template
const respond = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})

// usage:  ${respond.desktop`background: dodgerblue;`}

// end Media query manager
export default respond;
