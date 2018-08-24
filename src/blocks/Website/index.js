import React from "react";
import styled from "styled-components";
import WebSite from "./WebSite";
import Video from "./Video";

import TechIcon from "../TechIcon/";

const website = props => {
  const InfoContainer = styled.div`
    padding: 1rem 1.6rem 1.6rem 1.6rem;
  `;
  const Title = styled.h2`
    font-family: ${props => props.theme.fontHeader};
    color: ${props => props.theme.palette3};
    text-align: center;
    font-weight: 700;
    font-size: 2rem;
  `;
  const Info = styled.p`
    font-family: ${props => props.theme.fontParagraph};
    font-size: 1.8rem;
    text-align: ${props => (props.center ? "center" : "left")};
  `;
  const Icon = styled.img`
    height: 1rem;
  `;

  const techUsed = props.tech.map(icon => <TechIcon tech={icon} />);
  return (
    <WebSite>
      <Video src={props.siteVideo} />
      <InfoContainer>
        <Title>{props.siteName}</Title>
        <Info>{props.info}</Info>
        <Info center>{techUsed}</Info>
      </InfoContainer>
    </WebSite>
  );
};

export default website;
