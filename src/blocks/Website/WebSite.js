import styled from "styled-components";
import Info from "./Info";
import InfoContainer from "./InfoContainer";
import GithubIcon from "./GithubIcon";
import GithubIconContainer from "./GithubIconContainer";
import Link from "./Link";
import Title from "./Title";
import Video from "./Video";
const WebSite = styled.figure`
  width: 100%;
  box-shadow: 0 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 0.5rem; /* 5rem rounded corners */
  background-color: white;
  :hover {
    box-shadow: 0 0.8rem 1.6rem 0 rgba(0, 0, 0, 0.2);
  }
`;
WebSite.Info = Info;
WebSite.InfoContainer = InfoContainer;
WebSite.GithubIcon = GithubIcon;
WebSite.GithubIconContainer = GithubIconContainer;
WebSite.Link = Link;
WebSite.Title = Title;
WebSite.Video = Video;
export default WebSite;
