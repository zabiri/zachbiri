import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import Border from "./blocks/Border/";
import Intro from "./components/Intro";
import WebDevelopment from './components/WebDevelopment'
import Audio from './components/Audio'
import Nav from "./blocks/NavPanel";

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
          <Audio/>
        </main>
      </ThemeProvider>
    );
  }
}

export default App;
