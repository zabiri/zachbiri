import React from "react";
import Border from './Master'

const border = () => {
  return (
    <Border>
      <Border.Top />
      <Border.Right />
      <Border.BottomL />
      <Border.LBar />
      <Border.RBar />
      <Border.BottomR />
      <Border.Left />
    </Border>
  );
};

export default border;
