import React from "react";
import "./RE20.css";
import wordBubble from "../../../assets/images/re20/sup-word.png";
import wordBubbleWords from "../../../assets/images/re20/sup-sup.png";
import pedalPeak from "../../../assets/images/re20/sup-peak.png";
import pedalEyes from "../../../assets/images/re20/sup-eyes.png";
import pedal from "../../../assets/images/re20/sup-pedal.png";
const re20 = () => {
  return (
    <div className="RE20__container">
      <div className="RE20__pedal">
        <img className="RE20__pedal-peak" alt="(peaking light)" src={pedalPeak} />
        <img className="RE20__pedal-eyes" alt="(eyes)" src={pedalEyes} />
        <img className="RE20__pedal-pedal" alt="RE201 fx pedal" src={pedal} />
        <div className="RE20__bubble">
          <img src={wordBubble} alt="Sup?" class="RE20__bubble-bubble" />
          <img src={wordBubbleWords} alt="Sup?" class="RE20__bubble-words" />
        </div>
      </div>
    </div>
  );
};

export default re20;
