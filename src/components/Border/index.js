import React from "react";
import styled from "styled-components";
import Border from './Master'
import "./Border.css";


const border = () => {
  return (
    <Border>
      <Border.Top />
      <Border.Right />
      <Border.BottomL />
      <div className="border__leftbar" />
      <Border.RBar />
      <Border.BottomR />
      <Border.Left />
    </Border>
  );
};

export default border;
