import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import Border from "./blocks/Border/";
import Columns from "./blocks/Columns";
import NoCols from "./blocks/NoCols/";
import Nav from "./blocks/NavPanel";

import Audio from "./pages/Audio";
import Intro from "./pages/Intro";
import Web from "./pages/Web";

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
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <main className="App">
            <Border />
            <Nav />
             {/* <Switch>
              <Route
                path="/web"
                render={() => (
                  <NoCols
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
                    figure={this.state.pages.home.copy}
                    copy={this.state.pages.home.figure}
                  />
                )}
              />
            </Switch> */}
            
  <Columns right={<Intro/>} left={<AnimatedHead/>}/>
  <NoCols top={<Web />} bottom ={<WebGrid/>}/>
  <Columns left={<Audio/>} right={<RE20/>}/>
          </main>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
