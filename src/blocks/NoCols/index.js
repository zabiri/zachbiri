import React from "react";

import styled from "styled-components";
const contentNoCols = props => {
  const Rows = styled.main`
    background-color: ${props => props.theme.colorBackgroundPage};
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 30% 1fr;
    grid-template-columns: 1fr;
    
    margin: ${props=>props.theme.contentMargin};
  `;
  return (
    <Rows>
      {props.top}
      {props.bottom}
    </Rows>
  );
};

export default contentNoCols;
