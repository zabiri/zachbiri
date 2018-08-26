import React from "react";
import styled from "styled-components";
import H1 from "./H1";
import P from "./P";
import Fade from "react-reveal/Fade";
const web = () => {
  const Web = styled.article`
    margin: auto;
  `;
  return (
    <Web>
      <Fade bottom>
        <div>
          <H1>Web Development</H1>
          <P>
            I am a front-end developer with an interest in design and UI/UX.
          </P>
          <P />
        </div>
      </Fade>
    </Web>
  );
};

export default web;
