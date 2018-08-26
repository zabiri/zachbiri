import React from "react";
import styled from "styled-components";
import AudioCopy from '../blocks/AudioCopy/'
import RE20 from '../blocks/RE20/'

import respond from "../mixins/respond.js";
const audio = props => {
  const ContentContainer = styled.main`
    background-color: ${props => props.theme.colorBackgroundPage};
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 50% 1fr;
    ${respond.tabsmall`
    display: flex;
    flex-direction: column-reverse;
    `}
    padding: calc(${props => props.theme.contentMargin} + 2rem);
    min-height: 100vh;
  `;
  return (
    <ContentContainer>
      <AudioCopy/>
      <RE20/>
    </ContentContainer>
  );
};

export default audio;