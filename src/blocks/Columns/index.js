import React from "react";
import styled from "styled-components";
import respond from "../../mixins/respond.js";
const Columns = props => {
  const ContentContainer = styled.main`
    background-color: ${props => props.theme.colorBackgroundPage};
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 50% 1fr;
    ${respond.phone`grid-template-rows: 50% 50%;
    grid-template-columns: 1fr`}
    padding: calc(${props => props.theme.contentMargin} + 2rem);
    min-height: 100vh;
  `;
  return (
    <ContentContainer>
      {props.left}
      {props.right}
    </ContentContainer>
  );
};

export default Columns;
