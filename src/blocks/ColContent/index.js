import React from "react";
import styled from "styled-components";
import P from "../../elements/P";
import H1 from "../../elements/H1";

const ColContent = props => {
  const Container = styled.article`
    margin: auto;
    /* padding-left: 2rem; */
    /* padding-right: 7rem; */
    text-align: ${props => (props.center ? "center" : "left")};
  `;
  return (
    <Container {...props}>
      <H1>{props.header}</H1>
      <P {...props}>{props.children}</P>
    </Container>
  );
};

export default ColContent;