import React from "react";
import styled from 'styled-components'
import me from '../../assets/images/me.jpg'
import "./Web.css";
const web = () => {
  const PicOfMe = styled.img.attrs({
    alt: "It me"
  })`
  margin: auto;
  display: block;
  width: 40%;
  border-radius: 50rem;
  margin-bottom: 5rem;
  `
  
  return (
    <article className="Web">
      <div className="Web__box">
        {/* <PicOfMe src={me} /> */}
        <p className="Web__paragraph">
          Hello, I'm Zach Biri.  I am a front-end web developer with experience in: 
        </p>
        <p className="Web__paragraph-icons">
          <i className="fab fa-html5" />
          <i className="fab fa-css3-alt" />
          <i className="fab fa-js-square" />
          <i className="fab fa-react" />
          <i className="fab fa-angular" />
          <i className="fab fa-vuejs" />
          <i className="fab fa-sass" />
          <i className="fab fa-git-square" />
          <i className="fab fa-github" />
          <i className="fab fa-bitbucket" />
          <i className="fab fa-wordpress" />
          💅
        </p>
      </div>
    </article>
  );
};

export default web;
