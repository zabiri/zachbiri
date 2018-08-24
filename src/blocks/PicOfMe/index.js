import React from "react";
import styled from "styled-components";
import imgMe from "../../assets/images/me.jpg";
const PicCont = styled.img.attrs({
  alt: "It me",
  src: { imgMe }
})`
  margin: auto;
  display: block;
  width: 90%;
  border-radius: 50rem;
`;
const picOfMe = () => {
  return <PicCont src={imgMe} />;
};

export default picOfMe;
