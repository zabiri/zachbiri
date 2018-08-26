import React, { Component } from "react";

import styled, { ThemeProvider } from "styled-components";

import Border from "./blocks/Border/";
import Columns from "./blocks/Columns";
import NoCols from "./blocks/NoCols/";
import Nav from "./blocks/NavPanel";

import Audio from "./blocks/AudioCopy/";
import Intro from "./blocks/IntroCopy/";
import Web from "./blocks/WebCopy/";

import AnimatedHead from "./blocks/AnimatedHead/";
import RE20 from "./blocks/RE20/";
import WebGrid from "./blocks/WebGrid/";

import { theme } from "./theme/globalStyles";

class App extends Component {
  state = {
    pages: {
      home: {
        copy: <Intro />,
        figure: <AnimatedHead />
      },
      audio: {
        copy: <Audio />,
        figure: <RE20 />
      },
      web: {
        copy: <Web />,
        figure: <WebGrid />
      }
    }
  };
  render() {
    return (
      <ThemeProvider theme={theme}>
        <main className="App">
          <Border />
          <Nav />
          <Columns right={<Intro />} left={<AnimatedHead />} />
          <NoCols top={<Web />} bottom={<WebGrid />} />
          <Columns left={<Audio />} right={<RE20 />} />
        </main>
      </ThemeProvider>
    );
  }
}

export default App;
