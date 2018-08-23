import React from "react";
import Container from "./Container";
import Video from "./Video";
const website = props => {
  return (
    <Container>
      <Video src={props.siteVideo} />
      <p>{props.siteName}</p>
    </Container>
  );
};

export default website;
