import React from "react";
import styled from "styled-components";
import H1 from '../../elements/H1'
import P from '../../elements/P'
import "./Web.css";
const web = () => {
  return (
    <article className="Web">
      <div>
        <H1 center>Web Development</H1>
        <P>I am a front-end developer with an interest in design and UI/UX.</P>
        <P></P>
      </div>
    </article>
  );
};

export default web;
