import React from "react";
import styled from "styled-components";
import P from "./P";
import H1 from "./H1";
import respond from "../../mixins/respond";
const Intro = props => {
  const Container = styled.article`
    margin: auto;
    /* padding-left: 2rem; */
    /* padding-right: 7rem; */
    padding: 4rem 3rem;
    background-color: white;
    width: 90%;
    position: relative;
    filter: drop-shadow(-5px -5px 10px rgba(0, 0, 0, 0.5));
    border-radius: 7rem;
    backface-visibility: hidden;
    ${respond.upto899`
      width: 100%;
    `} 
    ${respond.upto699`
      width: 90%;
    `}
    ${respond.upto399`
      width: 100%; 
      padding: 4rem 2rem`};
    :after {
      content: "";
      position: absolute;
      border-style: solid;
      border-width: 15px 15px 15px 0;
      border-color: transparent white;
      display: block;
      width: 0;
      z-index: 1;
      margin-top: -15px;
      left: -15px;
      top: 50%;
      ${respond.upto699`
        content: '';
        position: absolute;
        border-style: solid;
        border-width: 0 15px 15px;
        border-color: #FFFFFF transparent;
        display: block;
        width: 0;
        z-index: 1;
        margin-left: -15px;
        top: 1%;
        left: 50%;`};
    }
  `;
  return (
    <Container>
      <H1>Hi, I'm Zach Biri</H1>
      <P>
        I'm a web developer, designer, musician, & audio engineer in St. Louis,
        MO
      </P>
    </Container>
  );
};

export default Intro;
