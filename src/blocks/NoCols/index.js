import React from "react";

import styled from "styled-components";
const contentNoCols = props => {
  const Rows = styled.main`
    background-color: ${props => props.theme.colorBackgroundPage};
    background-color: #f4f8ff;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 30% 1fr;
    grid-template-columns: 1fr;
    min-height: 100vh;
    padding: 10rem ${props=>props.theme.contentMargin};
    clip-path: polygon(0% 0%, 10% 1%, 20% 0%, 30% 1%, 40% 0%, 50% 1%, 60% 0%, 70% 1%, 80% 0%, 90% 1%, 100% 0%, 100% 100%, 90% 99%, 80% 100%, 70% 99%, 60% 100%, 50% 99%, 40% 100%, 30% 99%, 20% 100%, 10% 99%, 0% 100%);
  `;
  return (
    <Rows>
      {props.top}
      {props.bottom}
    </Rows>
  );
};

export default contentNoCols;
