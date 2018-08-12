import React, { Component } from 'react'
import './Content.css'
export class Content extends Component {
  render() {
    return (
      <main className="Content">
      <header>header stuff</header>
        <article>
          <h1>Zach Biri</h1>
          <p>hey</p>
        </article>
        <footer>footer stuff</footer>
      </main>
    )
  }
}

export default Content
