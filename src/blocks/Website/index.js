import React from "react";
import styled from "styled-components";
import WebSite from "./WebSite";
import Video from "./Video";
import githubLogo from "../../assets/images/logos/github-icon.svg";
import TechIcon from "../TechIcon/";

const website = props => {
  const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 22rem;
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
    hyphens: auto;
    text-align: ${props => (props.center ? "center" : "left")};
    min-height: ${props => (props.info ? "8.7rem" : "auto")};
  `;
  const Icon = styled.img`
    height: 1rem;
  `;
  const GithubIcon = styled.img`
    width: 2rem;
    transition: transform 200ms ease-in-out;
    :hover {
      transform: scale(1.3);
    }
  `;
  const GithubIconContainer = styled.div`
    text-align: right;
  `;

  const techUsed = props.tech.map(icon => <TechIcon tech={icon} />);
  return (
    <WebSite>
      <a href={props.link} target="_blank">
        <Video src={props.siteVideo} />
      </a>
      <InfoContainer>
        <a href={props.link} target="_blank">
          <Title>{props.siteName}</Title>
        </a>
        <a href={props.link} target="_blank">
          <Info info>{props.info}</Info>
        </a>
        <Info center>{techUsed}</Info>
        <GithubIconContainer>
          <a href={props.github} target="_blank">
            <GithubIcon src={githubLogo} alt="Github Link" />
          </a>
        </GithubIconContainer>
      </InfoContainer>
    </WebSite>
  );
};

export default website;
