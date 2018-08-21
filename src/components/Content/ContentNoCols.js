import React from "react";
import './Content.css'

const contentNoCols = (props) => {

  return (
    <main className="ContentNoCols">
      {props.copy}
      {props.figure}
    </main>
  );
};

export default contentNoCols;
