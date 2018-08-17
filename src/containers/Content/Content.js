import React, { Component } from "react";
import Intro from "../../pages/Intro/Intro";
import Head from '../../components/Art/Head/Head'
import RE20 from '../../components/Art/RE20/RE20'

import "./Content.css";
export class Content extends Component {
  render() {
    let leftPane = <Intro />;
    let rightPane = <RE20 />;
    return (
      <main className="Content">
        {leftPane}
        {rightPane}
      </main>
    );
  }
}

export default Content;
