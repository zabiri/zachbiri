import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import ScrollableAnchor, { configureAnchors } from "react-scrollable-anchor";
import Audio from "./components/Audio";
import Border from "./blocks/Border/";
import Intro from "./components/Intro";
import Footer from './components/Footer'
import Nav from "./blocks/NavPanel";
import WebDevelopment from "./components/WebDevelopment";
import { theme } from "./theme/globalStyles";
class App extends Component {
  render() {
    configureAnchors({keepLastAnchorHash: false})
    return (
      <ThemeProvider theme={theme}>
        <div>
          <main className="App">
            <Border />
            <Nav />
            <ScrollableAnchor id={"home"}>
              <div>
                <Intro />
              </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={"web"}>
              <div>
                <WebDevelopment />
              </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={"music"}>
              <div>
                <Audio />
              </div>
            </ScrollableAnchor>
          </main>
          <Footer/>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
