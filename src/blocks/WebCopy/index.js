import React from "react";
import styled from "styled-components";
import H1 from "./H1";
import P from "./P";

const web = () => {
  const Web = styled.article`
    margin: auto;
  `;
  return (
    <Web>

        <div>
          <H1>Web Development</H1>
          <P>
            I am a front-end developer with an interest in design and UI/UX.
          </P>
        </div>

    </Web>
  );
};

export default web;
