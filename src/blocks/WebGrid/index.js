import React from "react";
import Website from "../Website/";
import Webgrid from "./Container";
import portfolio from "./Portfolio";
import Fade from "react-reveal/Fade";
const webGrid = props => {
  const webPortfolio = portfolio.map(site => (
    <Website
      key={site.name}
      siteVideo={site.video}
      siteName={site.name}
      info={site.info}
      tech={site.tech}
      github={site.github}
      link={site.link}
    />
  ));
  return (
    <Webgrid>
      <Fade bottom>{webPortfolio}</Fade>
    </Webgrid>
  );
};

export default webGrid;
