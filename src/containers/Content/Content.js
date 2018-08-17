import React from 'react'
import './Content.css'
const content = (props) => {
  return (
    <main className="Content">
        {props.left}
        {props.right}
      </main>
  )
}

export default content
