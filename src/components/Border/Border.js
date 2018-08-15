import React from "react";
import "./Border.css";

const border = () => {
  return (
    <div className="border">
      <div className="border__top" />
      <div className="border__right" />
      <div className="border__bottom-l" />
      <div className="border__bottom-r" />
      <div className="border__left" />
    </div>
  );
};

export default border;
