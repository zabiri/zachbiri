import React from "react";
import Website from "../Website/";
import Webgrid from './Container'
import portfolio from './Portfolio'

const webGrid = props => {
  const webPortfolio = portfolio.map(site => (
    <Website key={site.name} siteVideo={site.video} siteName={site.name} />
  ));
  return (
      <Webgrid>{webPortfolio}</Webgrid>
  );
};

export default webGrid;