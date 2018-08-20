import React from 'react'
import './Website.css'
const website = (props) => {
  return (
    <figure className="Website">
      <video loop src={props.siteVideo} className="Website__video" autoPlay/>
      <p>{props.siteName}</p>
    </figure>
  )
}

export default website
