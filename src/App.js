import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Border from "./components/Border/Border";
import Content from "./containers/Content/Content";
import Nav from "./components/Nav/Nav";
import Intro from "./pages/Intro/Intro";
import Head from './components/Art/Head/Head'
import RE20 from './components/Art/RE20/RE20'

import "./App.css";

class App extends Component {
  state = {
    home: {
      left: <Intro/>,
      right: <Head/>
    },
    audio: {
      left: <Intro/>,
      right: <RE20/>
    },
    web: {
      left: <Intro/>,
      right: <RE20/>
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
              render={() => <Content left={this.state.web.left} right={this.state.web.right} />}
            />
            <Route
              path="/audio"
              render={() => <Content left={this.state.audio.left} right={this.state.audio.right} />}
            />
            <Route
              path="/"
              render={() => <Content left={this.state.home.left} right={this.state.home.right} />}
            />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
