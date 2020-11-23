// == Import npm
import React from 'react';

// == Import
import reactLogo from './react-logo.svg';
import './styles.scss';

import Nav from '../01_Nav';
import Welcome from '../02_Welcome';
import WhatIDo from '../03_WhatIDo';
import PortfolioWeb from '../04_PortfolioWeb';
import PortfolioArt from '../05_PortfolioArt';
import About from '../06_About';
import Contact from '../07_Contact';

// == Composant
const Portfolio = () => (
  <div className="portfolio">
    <img src={reactLogo} alt="react logo" />
    <h1>Composant : Portfolio</h1>
    <Nav />
    <Welcome />
    <WhatIDo />
    <PortfolioWeb />
    <PortfolioArt />
    <About />
    <Contact />
  </div>
);

// == Export
export default Portfolio;
