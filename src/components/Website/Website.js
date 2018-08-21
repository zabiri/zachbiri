import React from 'react'
import styled from 'styled-components'

const website = (props) => {
  const Website = styled.figure`
  width: 100%;
  `
  const WebsiteVideo = styled.video.attrs({
    loop: 'true',
    autoPlay: 'true',
  })`
  width: 100%;
  `
  return (
    <Website>
      <WebsiteVideo src={props.siteVideo}/>
      <p>{props.siteName}</p>
    </Website>
  )
}

export default website
