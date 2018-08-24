import React from "react";
import styled from "styled-components";
import P from "../../elements/P";
import H1 from "../../elements/H1";

const Intro = props => {
  const Container = styled.article`
    margin: auto;
    /* padding-left: 2rem; */
    /* padding-right: 7rem; */
    background-color: yellow;
    width: 80%;
  `;
  return (
    <Container>
      <H1 center>Hi, I'm Zach Biri</H1>
      <P>{props.children}</P>
    </Container>
  );
};

export default Intro;
