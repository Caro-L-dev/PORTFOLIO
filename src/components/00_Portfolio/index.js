// == Import npm
import React, { useState } from 'react';

// == Import
import './styles.scss';

import NavBar from '../01_NavBar';
// import Welcome from '../02_Welcome';
// import WhatIDo from '../03_WhatIDo';
// import PortfolioWeb from '../04_PortfolioWeb';
// import PortfolioArt from '../05_PortfolioArt';
// import About from '../06_About';
// import Contact from '../07_Contact';

// import Switch from '../Switch';

// == Composant
function Portfolio() {
  const [value, setValue] = useState(false);
  return (
    <div className="portfolio">
      <NavBar />
      {/* <Switch
        isOn={value}
        onColor="#EF476F"
        handleToggle={() => setValue(!value)}
      /> */}
    </div>
  );
}

// == Export
export default Portfolio;
