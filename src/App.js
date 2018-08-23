import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import Border from "./blocks/Border/";
import Columns from "./blocks/Columns";
import ContentNoCols from "./components/Content/ContentNoCols";
import Nav from "./blocks/NavPanel";

import Audio from "./pages/Audio/Audio";
import Intro from "./pages/Intro/Intro";
import Web from "./pages/Web/Web";

import AnimatedHead from "./blocks/AnimatedHead/";
import RE20 from "./blocks/RE20/";
import WebGrid from "./blocks/WebGrid/";

import { theme } from "./theme/globalStyles";
import "./App.css";

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
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <main className="App">
            <Border />
            <Nav />
            <Switch>
              <Route
                path="/web"
                render={() => (
                  <ContentNoCols
                    copy={this.state.pages.web.copy}
                    figure={this.state.pages.web.figure}
                  />
                )}
              />
              <Route
                path="/audio"
                render={() => (
                  <Columns
                    copy={this.state.pages.audio.copy}
                    figure={this.state.pages.audio.figure}
                  />
                )}
              />
              <Route
                path="/"
                render={() => (
                  <Columns
                    copy={this.state.pages.home.copy}
                    figure={this.state.pages.home.figure}
                  />
                )}
              />
            </Switch>
          </main>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
