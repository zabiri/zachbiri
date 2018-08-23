import React from 'react'
import SpeechBubble from './SpeechBubble'
import RE20 from './RE20'
import imgBubble from "../../assets/images/re20/sup-word.png";
import imgEyes from "../../assets/images/re20/sup-eyes.png";
import imgPeak from "../../assets/images/re20/sup-peak.png";
import imgPedal from "../../assets/images/re20/sup-pedal.png";
import imgWords from "../../assets/images/re20/sup-sup.png";
const RE20full = () => {
  return (
    <RE20.Container>
      <RE20>
        <RE20.Peak src={imgPeak}/>
        <RE20.Eyes src={imgEyes}/>
        <RE20.Pedal src={imgPedal}/>
        <SpeechBubble>
          <SpeechBubble.Bubble src={imgBubble}/>
          <SpeechBubble.Words src={imgWords}/>
        </SpeechBubble>
      </RE20>
    </RE20.Container>
  )
}

export default RE20full
