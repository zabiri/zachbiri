import React from 'react'
import './Content.css'
const content = (props) => {
  return (
    <main className="Content">
        {props.copy}
        {props.figure}
      </main>
  )
}

export default content
