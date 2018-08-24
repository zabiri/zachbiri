import React from "react";
import styled from "styled-components";
import P from "../../elements/P";
import H1 from "../../elements/H1";

const Intro = props => {
  const Container = styled.article`
    margin: auto;
    /* padding-left: 2rem; */
    /* padding-right: 7rem; */
    padding: 4rem 3rem;
    background-color: #fffeef;
    width: 90%;
    position: relative;
    box-shadow: 1rem 1rem 1rem rgba(0, 0, 0, 0.2);
    border-radius: 5rem;
    border: #421093 solid 5px;
    backface-visibility: hidden;
    :after {
      content: "";
      position: absolute;
      border-style: solid;
      border-width: 15px 15px 15px 0;
      border-color: transparent #fffeef;
      display: block;
      width: 0;
      z-index: 1;
      margin-top: -15px;
      left: -15px;
      top: 50%;
    }

    :before {
      content: "";
      position: absolute;
      border-style: solid;
      border-width: 19px 19px 19px 0;
      border-color: transparent #421093;
      display: block;
      width: 0;
      z-index: 0;
      margin-top: -19px;
      left: -24px;
      top: 50%;
    }
  `;
  return (
    <Container>
      <H1 center intro>
        Hi, I'm Zach Biri
      </H1>
      <P center>{props.children}</P>
    </Container>
  );
};

export default Intro;