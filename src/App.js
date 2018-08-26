import React, { Component } from "react";

import styled, { ThemeProvider } from "styled-components";

import Border from "./blocks/Border/";
import Columns from "./blocks/Columns";

import Intro from "./components/Intro";
import WebDevelopment from './components/WebDevelopment'


import NoCols from "./blocks/NoCols/";
import Nav from "./blocks/NavPanel";

import Audio from "./blocks/AudioCopy/";
import Web from "./blocks/WebCopy/";

import AnimatedHead from "./blocks/AnimatedHead/";
import RE20 from "./blocks/RE20/";
import WebGrid from "./blocks/WebGrid/";

import { theme } from "./theme/globalStyles";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <main className="App">
          <Border />
          <Nav />
          <Intro/>
          <WebDevelopment/>
          <Columns left={<Audio />} right={<RE20 />} />
        </main>
      </ThemeProvider>
    );
  }
}

export default App;
