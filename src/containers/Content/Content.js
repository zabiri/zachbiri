import React, { Component } from "react";
import Intro from "../../pages/Intro/Intro";
import Head from '../../components/Art/Head/Head'
import "./Content.css";
export class Content extends Component {
  render() {
    let leftPane = <Intro />;
    let rightPane = <Head />;
    return (
      <main className="Content">
        {leftPane}
        {rightPane}
      </main>
    );
  }
}

export default Content;
