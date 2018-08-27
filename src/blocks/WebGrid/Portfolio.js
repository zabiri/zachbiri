import yardsandgodsVid from "../../assets/video/websites/YardsGods.mp4";
import tipCalcReactVid from "../../assets/video/websites/TipReact.mp4";
import tipCalcAngVid from "../../assets/video/websites/TipAngular.mp4";
import rendrVid from "../../assets/video/websites/Rendr.mp4";
import stopkingVid from "../../assets/video/websites/Stopkings.mp4";
import todoVid from "../../assets/video/websites/Todo.mp4";
import scorekeeperVid from "../../assets/video/websites/Scorekeeper.mp4";
import colorpickerVid from "../../assets/video/websites/ColorPicker.mp4";
import burgerVid from "../../assets/video/websites/Burger.mp4";


import webMyardsandgodsVid from "../../assets/video/websites/YardsGods.webmsd.webm";
import webMtipCalcReactVid from "../../assets/video/websites/TipReact.webmsd.webm";
import webMtipCalcAngVid from "../../assets/video/websites/TipAngular.webmsd.webm";
import webMrendrVid from "../../assets/video/websites/Rendr.webmsd.webm";
import webMstopkingVid from "../../assets/video/websites/Stopkings.webmsd.webm";
import webMtodoVid from "../../assets/video/websites/Todo.webmsd.webm";
import webMscorekeeperVid from "../../assets/video/websites/Scorekeeper.webmsd.webm";
import webMcolorpickerVid from "../../assets/video/websites/ColorPicker.webmsd.webm";
import webMburgerVid from "../../assets/video/websites/Burger.webmsd.webm";

const portfolio = [
  {
    name: "Yards & Gods",
    info:
      "Yards & Gods is my recording/A.V. home studio.  Made with React+React-router and Sass, mostly.",
    github: "https://github.com/zabiri/yardsandgods",
    link: "http://yardsandgods.net",
    tech: ["js", "react", "router", "sass", "fontawesome"],
    video: yardsandgodsVid,
    webMvideo: webMyardsandgodsVid
  },
  {
    name: "Cafe Berlin Tip Calculator (v2)",
    info:
      "A tip-share calculator I made for a previous job - in version 2 I decided to switch to React",
    github: "https://github.com/zabiri/cafeberlin-tipshare",
    link: "http://zachbiri.com/cbtip",
    tech: ["js", "react", "redux", "sass", "fontawesome"],
    video: tipCalcReactVid,
    webMvideo: webMtipCalcReactVid
  },
  {
    name: "Cafe Berlin Tip Calculator (v1)",
    info:
      "The first version of my tip-share calculator.  This was made with Angular 5.  Unfortunately, I lost the source-code 😭.",
    github: "https://www.youtube.com/watch?v=YVVTiNsRW6c",
    link: "http://zachbiri.com/sandbox/cbts",
    tech: ["typescript", "angular", "bootstrap", "css"],
    video: tipCalcAngVid,
    webMvideo: webMtipCalcAngVid
  },
  {
    name: "Rendr",
    info:
      "Rendr is a pop-up technology-based art gallery hosted by 1871, a tech incubator in Chicago.",
    github: "https://github.com/zabiri/rendrpopup",
    link: "http://rendrpopup.com",
    tech: ["js", "html", "sass", "bootstrap", "fontawesome"],
    video: rendrVid,
    webMvideo: webMrendrVid
  },
  {
    name: "Stop King's Attacks",
    info:
      "This was a collaborative effort with Liz Oeftering and Michael Hopkins.  The client requested we use a CMS, specifically WordPress.",
    github: null,
    link: "http://stopkingsattack.com/",
    tech: ["wp", "js", "css", "html"],
    video: stopkingVid,
    webMvideo: webMstopkingVid
  },
  {
    name: "Burger Builder",
    info:
      "This React+Redux+Router app was the course project for Max Schwarzmüller's 'Complete Guide' React course.",
    github: "https://github.com/zabiri/burgerbuilder",
    link: "http://zachbiri.com/sandbox/burger",
    tech: ["react", "redux", "router", "firebase"],
    video: burgerVid,
    webMvideo: webMburgerVid
  },
  {
    name: "Another To-Do List",
    info:
      "I made this as an exercise in Colt Steele's 'Web Developer Bootcamp' course.",
    github: "https://github.com/zabiri/simple-todo-list",
    link: "http://zachbiri.com/sandbox/todo",
    tech: ["js", "jquery", "css", "html", "bootstrap", "fontawesome"],
    video: todoVid,
    webMvideo: webMtodoVid
  },
  {
    name: "Scorekeeper",
    info:
      "Started from a JS exercise I was reading, but I got carried away adding extra features and styling to it.",
    github: "https://github.com/zabiri/scorekeeper",
    link: "http://zachbiri.com/sandbox/sk",
    tech: ["js", "css", "html", "bootstrap", "fontawesome"],
    video: scorekeeperVid,
    webMvideo: webMscorekeeperVid
  },
  {
    name: "HEX Color Guessing Game",
    info:
      "Also made as part of Colt Steele's 'Web Developer Bootcamp', this is a vanilla javascript HEX color guessing game.",
    github: "https://github.com/zabiri/rgbcolor-game",
    link: "http://zachbiri.com/sandbox/cp",
    tech: ["js", "css", "html"],
    video: colorpickerVid,
    webMvideo: webMcolorpickerVid
  }
];
export default portfolio;
