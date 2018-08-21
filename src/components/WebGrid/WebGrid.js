import React from "react";
import styled from "styled-components";
import Website from "../Website/Website";

import yardsandgodsVid from "../../assets/video/websites/YardsGods.mp4";
import tipCalcReactVid from "../../assets/video/websites/TipReact.mp4";
import tipCalcAngVid from "../../assets/video/websites/TipAngular.mp4";
import rendrVid from "../../assets/video/websites/Rendr.mp4";
import stopkingVid from "../../assets/video/websites/Stopkings.mp4";

const webGrid = props => {
  const portfolio = [
    {
      name: "Yards & Gods",
      video: yardsandgodsVid
    },
    {
      name: "Cafe Berlin Tip Calculator (React)",
      video: tipCalcReactVid
    },
    {
      name: "Cafe Berlin Tip Calculator (Angular)",
      video: tipCalcAngVid
    },
    {
      name: "Rendr",
      video: rendrVid
    },
    {
      name: "Stop King's Attacks",
      video: stopkingVid
    }
  ];
  const WebgridContainer = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 25rem));
    justify-content: center;
  `;

  const webPortfolio = portfolio.map(site => (
    <Website key={site.name} siteVideo={site.video} siteName={site.name} />
  ));

  return (
    <section className="WebGrid">
      <WebgridContainer>{webPortfolio}</WebgridContainer>
    </section>
  );
};

export default webGrid;
