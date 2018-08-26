import React from "react";
import styled from "styled-components";
import Audio from '../blocks/Audio/'
import RE20 from '../blocks/RE20/'
import Fade from "react-reveal/Fade";
import respond from "../mixins/respond.js";
const audio = props => {
  const ContentContainer = styled.main`
    background-color: ${props => props.theme.colorBackgroundPage};
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 50% 1fr;
    padding: calc(${props => props.theme.contentMargin} + 2rem);
    min-height: 100vh;
    ${respond.upto699`
    display: flex;
    flex-direction: column-reverse;
    padding: ${props => props.theme.contentMargin};
    min-height: auto;
    `}
  `;
  return (
    <ContentContainer>
        <Audio/>
        <RE20/>
    </ContentContainer>
  );
};

export default audio;