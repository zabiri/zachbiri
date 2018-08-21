import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Border from "./components/Border/Border";
import Content from "./components/Content/Content";
import Nav from "./components/Nav/Nav";

import Audio from "./pages/Audio/Audio";
import Intro from "./pages/Intro/Intro";
import Web from "./pages/Web/Web";

import Head from "./components/Art/Head";
import RE20 from "./components/Art/RE20";
import WebGrid from "./components/WebGrid/WebGrid";




import "./App.css";

class App extends Component {
  state = {
    pages: {
      home: {
        copy: <Intro />,
        figure: <Head />
      },
      audio: {
        copy: <Audio />,
        figure: <RE20 />
      },
      web: {
        copy: <Web />,
        figure: <WebGrid/>
      }
    }
  };
  render() {
    return (
      <BrowserRouter>
        <main className="App">
          <Border />
          <Nav />
          <Switch>
            <Route
              path="/web"
              render={() => (
                <Content
                  copy={this.state.pages.web.copy}
                  figure={this.state.pages.web.figure}
                />
              )}
            />
            <Route
              path="/audio"
              render={() => (
                <Content
                  copy={this.state.pages.audio.copy}
                  figure={this.state.pages.audio.figure}
                />
              )}
            />
            <Route
              path="/"
              render={() => (
                <Content
                  copy={this.state.pages.home.copy}
                  figure={this.state.pages.home.figure}
                />
              )}
            />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
