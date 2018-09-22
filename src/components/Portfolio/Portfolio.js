import React from 'react';
import PortfolioData from './PortfolioData';
import PortfolioItem from './PortfolioItem';
import './Portfolio.scss';

const Portfolio = () => (
  <div id="portfolio-container">
    <h1>Portfolio</h1>
    <div id="portfolio-wrapper">
      {PortfolioData.map((p, i) => <PortfolioItem key={i} {...p} />)}
    </div>
  </div>
);

export default Portfolio;
