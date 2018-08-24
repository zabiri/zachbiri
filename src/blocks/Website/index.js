import React from "react";
import styled from "styled-components";
import WebSite from "./WebSite";
import Video from "./Video";
const website = props => {
  const InfoContainer = styled.div`
    padding: .2rem 1.6rem;
  `;
  return (
    <WebSite>
      <Video src={props.siteVideo} />
      <InfoContainer>
        <p>{props.siteName}</p>
      </InfoContainer>
    </WebSite>
  );
};

export default website;
