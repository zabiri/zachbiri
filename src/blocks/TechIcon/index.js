import React from "react";
import styled from "styled-components";
import cssLogo from "../../assets/images/logos/css-3.svg";
import firebaseLogo from "../../assets/images/logos/firebase.svg";
import fontAwesomeLogo from "../../assets/images/logos/font-awesome.svg";
import jsLogo from "../../assets/images/logos/javascript.svg";
import jqueryLogo from "../../assets/images/logos/jquery.svg";
import routerLogo from "../../assets/images/logos/react-router.svg";
import reactLogo from "../../assets/images/logos/react.svg";
import sassLogo from "../../assets/images/logos/sass.svg";
import wpLogo from "../../assets/images/logos/wordpress-icon.svg";
import styledLogo from "../../assets/images/logos/styled.png";
import angularLogo from "../../assets/images/logos/angular-icon.svg";
import reduxLogo from "../../assets/images/logos/redux.svg";
import bootstrapLogo from "../../assets/images/logos/bootstrap.svg";
import typescriptLogo from '../../assets/images/logos/typescript-icon.svg'
import htmlLogo from '../../assets/images/logos/html-5.svg'
const TechIcon = props => {
  let source = null;
  let alt = null;
  let link = null;
  switch (props.tech) {
    case "css":
      source = cssLogo;
      alt = "CSS3";
      link = "https://www.w3.org/Style/CSS/";
      break;
    case "firebase":
      source = firebaseLogo;
      alt = "Firebase";
      link = "https://firebase.google.com/";
      break;
    case "fontawesome":
      source = fontAwesomeLogo;
      alt = "Font-Awesome";
      link = "https://fontawesome.com/";
      break;
    case "js":
      source = jsLogo;
      alt = "JavaScript";
      link = "http://www.ecma-international.org/";
      break;
    case "jquery":
      source = jqueryLogo;
      alt = "jQuery";
      link = "https://jquery.com/";
      break;
    case "router":
      source = routerLogo;
      alt = "React-Router";
      link = "https://reacttraining.com/react-router/";
      break;
    case "react":
      source = reactLogo;
      alt = "React";
      link = "https://reactjs.org/";
      break;
    case "sass":
      source = sassLogo;
      alt = "Sass";
      link = "https://sass-lang.com/";
      break;
    case "wp":
      source = wpLogo;
      alt = "WordPress";
      link = "https://wordpress.org/";
      break;
    case "styled":
      source = styledLogo;
      alt = "Styled-Components";
      link = "https://www.styled-components.com/";
      break;
    case "angular":
      source = angularLogo;
      alt = "Angular";
      link = "https://angular.io/";
      break;
    case "redux":
      source = reduxLogo;
      alt = "Redux";
      link = "https://redux.js.org/";
      break;
    case "bootstrap":
      source = bootstrapLogo;
      alt = "Bootstrap";
      link = "https://getbootstrap.com/";
      break;
    case "typescript":
      source = typescriptLogo;
      alt = "TypeScript";
      link = "https://www.typescriptlang.org/";
      break;
    case "html":
      source = htmlLogo;
      alt = "HTML5";
      link = "https://www.w3.org/html/";
      break;
    default:
      source = null;
  }
  const Icon = styled.img`
    height: 2rem;
    margin: 0.25rem;
  `;
  return (
    <a href={link} target="_blank">
      <Icon src={source} alt={alt} />
    </a>
  );
};

export default TechIcon;
