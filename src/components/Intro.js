import React from "react";
import styled from "styled-components";
import AnimatedHead from "../blocks/AnimatedHead/";
import Intro from "../blocks/Intro/";
import respond from "../mixins/respond.js";

const intro = props => {
  const ContentContainer = styled.main`
    background-color: ${props => props.theme.colorBackgroundPage};
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 50% 1fr;
    padding: calc(${props => props.theme.contentMargin} + 2rem);
    min-height: 100vh;
    ${respond.upto899`
        min-height: 90vh;
    `}
    ${respond.upto699`
        grid-template-rows: 50% 50%;
        grid-template-columns: 1fr;
        padding: ${props => props.theme.contentMargin};
        min-height: auto;
        margin-bottom: 5rem;
    `};
  
  `;
  return (
    <ContentContainer>
      <AnimatedHead />
      <Intro />
    </ContentContainer>
  );
};

export default intro;
