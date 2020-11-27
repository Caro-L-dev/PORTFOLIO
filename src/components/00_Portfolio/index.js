// == Import npm
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// == Import
import './styles.scss';
import '../fontawesome';

import NavBar from '../01_NavBar';
import Welcome from '../02_Welcome';
import WhatIDo from '../03_WhatIDo';
// import PortfolioWeb from '../04_PortfolioWeb';
// import PortfolioArt from '../05_PortfolioArt';
import About from '../06_About';
import Contact from '../07_Contact';
// import NotFound from '../NotFound';

// == Composant
function Portfolio() {
  return (
    <div className="portfolio">
      <NavBar />
      <BrowserRouter>
        <Route exact path="/" component={Welcome} />
        <Route path="/what-i-do" component={WhatIDo} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </BrowserRouter>

    </div>
  );
}

// == Export
export default Portfolio;
