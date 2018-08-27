import { css } from "styled-components";
const sizes = {
  upto299: 299,
  upto399:399,
  upto499: 499,
  upto599: 599,
  upto699: 699,
  upto799: 799,
  upto899: 899,
  upto1119: 1119
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
export default respond;
