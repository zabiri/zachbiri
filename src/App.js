import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Border from "./components/Border/Border";
import Content from "./components/Content/Content";
import Nav from "./components/Nav/Nav";

import Audio from "./pages/Audio/Audio";
import Intro from "./pages/Intro/Intro";
import Web from './pages/Web/Web'

import Head from './components/Art/Head/Head'
import RE20 from './components/Art/RE20/RE20'

import "./App.css";

class App extends Component {
  state = {
    home: {
      copy: <Intro/>,
      figure: <Head/>
    },
    audio: {
      copy: <Audio/>,
      figure: <RE20/>
    },
    web: {
      copy: <Web/>,
      figure: <RE20/>
    }
  }
  render() {
    return (
      <BrowserRouter>
        <main className="App">
          <Border />
          <Nav />
          <Switch>
            <Route
              path="/web"
              render={() => <Content copy={this.state.web.copy} figure={this.state.web.figure} />}
            />
            <Route
              path="/audio"
              render={() => <Content copy={this.state.audio.copy} figure={this.state.audio.figure} />}
            />
            <Route
              path="/"
              render={() => <Content copy={this.state.home.copy} figure={this.state.home.figure} />}
            />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
