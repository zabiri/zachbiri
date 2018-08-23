import React from "react";
import "./Intro.css";
import P from '../../elements/P'
import H1 from '../../elements/H1'

const intro = () => {
  return (
    <article className="Intro">
      <div className="Intro__box">
        <H1 className="Intro__header">Zach Biri</H1>
        <P className="Intro__paragraph">
          Cat ipsum dolor sit amet, sleep everywhere, but not in my bed when
          owners are asleep, cry for no apparent reason chase dog then run away.
          Pet right here, no not there, here, no fool, right here that other cat
          smells funny you should really give me all the treats because i smell
          the best and omg you finally got the right spot and i love you right
          now have secret plans yet wake up human for food at 4am. Cat ass
          trophy where is my slave? I'm getting hungry and open the door, let me
          out, let me out, let me-out, let me-aow, let meaow, meaow!
        </P>
      </div>
    </article>
  );
};

export default intro;
