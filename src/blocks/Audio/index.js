import React from "react";
import styled from "styled-components";
import P from "./P";
import H1 from "./H1";
import respond from "../../mixins/respond";



const audio = props => {
  const Container = styled.article`
    margin: auto;
    text-align: ${props => (props.center ? "center" : "left")};
    ${respond.tabsmall`
      margin-top: 2rem;
    `};
  `;
  const Link = styled.a`
  text-decoration: none;
  color: black;
  border-bottom: dotted .1rem grey;
  `
  return (
    <Container>
      <H1>Music & Audio</H1>
      <P>I run the recording and A/V studio <Link href="http://yardsandgods.net" target="_blank">Yards & Gods</Link></P>
      <P>I play in a band called <Link href="https://enemyairship.bandcamp.com/" target="_blank">Enemy Airship</Link></P>
    </Container>
  );
};

export default audio;
