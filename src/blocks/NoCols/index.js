import React from "react";

import styled from 'styled-components'
const contentNoCols = props => {
  const rows = styled.main`
    background-color: $color-background-page;
    box-sizing: border-box;
    // display: grid;
  // grid-template-rows: 70% 1fr;
  // grid-template-columns: 1fr;
    height: $content-height;
    margin: $content-margin;
  `;
  return (
    <rows>
      {props.copy}
      {props.figure}
    </rows>
  );
};

export default contentNoCols;
