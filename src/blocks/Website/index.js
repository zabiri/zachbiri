import React from "react";
import styled from "styled-components";
import WebSite from "./WebSite";
import githubLogo from "../../assets/images/logos/github-icon.svg";
import TechIcon from "../TechIcon/";
import respond from '../../mixins/respond'
const website = props => {
  const techUsed = props.tech.map(icon => <TechIcon key={icon+props.siteName} tech={icon} />);
  return (
    <WebSite>
      <WebSite.Link href={props.link}>
        <WebSite.Video src={props.siteVideo} />
      </WebSite.Link>
      <WebSite.InfoContainer>
        <WebSite.Link href={props.link}>
          <WebSite.Title>{props.siteName}</WebSite.Title>
        </WebSite.Link>
        <WebSite.Link href={props.link}>
          <WebSite.Info info>{props.info}</WebSite.Info>
        </WebSite.Link>
        <WebSite.Info center>{techUsed}</WebSite.Info>
        <WebSite.GithubIconContainer>
          <WebSite.Link href={props.github}>
            <WebSite.GithubIcon src={githubLogo} alt="Github Link" />
          </WebSite.Link>
        </WebSite.GithubIconContainer>
      </WebSite.InfoContainer>
    </WebSite>
  );
};

export default website;
