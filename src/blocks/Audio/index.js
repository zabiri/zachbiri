import React from "react";
import styled from "styled-components";
import H1 from "./H1";
import Link from "./Link";
import P from "./P";
import respond from "../../mixins/respond";
const audio = props => {
  const Container = styled.article`
    margin: auto;
    text-align: ${props => (props.center ? "center" : "left")};
    ${respond.upto699`
      margin-top: 2rem;
    `};
  `;
  return (
    <Container>
      <H1>Music & Audio</H1>
      <P>
        I run the recording and A/V <br />
        studio{" "}
        <Link href="http://yardsandgods.net" target="_blank">
          Yards & Gods
        </Link>
      </P>
      <P>
        I play in a band called <br />
        <Link href="https://enemyairship.bandcamp.com/" target="_blank">
          Enemy Airship
        </Link>
      </P>
    </Container>
  );
};
export default audio;
