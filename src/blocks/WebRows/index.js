import React from "react";
import styled from "styled-components";
const webRows = props => {
  const WebRows = styled.section`
    background-color: #f4f8ff;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 30% 1fr;
    grid-template-columns: 1fr;
    min-height: 100vh;
    padding: 10rem ${props => props.theme.contentMargin};
    clip-path: polygon(
      0% 0.5%,
      10% 1%,
      30% 0%,
      50% 1%,
      70% 0%,
      90% 1%,
      100% 0.5%,
      100% 99.5%,
      90% 99%,
      70% 100%,
      50% 99%,
      30% 100%,
      10% 99%,
      0% 99.5%
    );
  `;
  return <WebRows>{props.children}</WebRows>;
};

export default webRows;
