import React, { Component } from "react";
import Border from './components/Border/Border'
import Content from './containers/Content/Content'
import Nav from './components/Nav/Nav'
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="App">
        <Border/>
        <Nav/>
        <Content/>
      </main>
    );
  }
}

export default App;
