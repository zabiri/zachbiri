import React from "react";
import styled from "styled-components";
import P from "./P";
import H1 from "./H1";

const audio = props => {
  const Container = styled.article`
    margin: auto;
    text-align: ${props => (props.center ? "center" : "left")};
  `;
  return (
    <Container>
      <H1>Music & Audio</H1>
      <P>I am also a musician and audio-engineer.  I play in a band called Enemy Airship.  I run a recording and A/V studio called Yard & Gods</P>
    </Container>
  );
};

export default audio;