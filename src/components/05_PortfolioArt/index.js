// == Npm import
import React from 'react';

import Tools from '../05_PortfolioArt/tools';
import Videos from '../05_PortfolioArt/videos';
import Illustrations from '../05_PortfolioArt/illustrations';

// == Import
import './portfolioArt.scss';
import './portfolioArt-01-large-screens.scss';
import './portfolioArt-02-desktops.scss';
import './portfolioArt-03-ipads-portrait-mode.scss';
import './portfolioArt-04-mobile-devices.scss';

// == Composant
function PortfolioArt() {
  return (
    <>
      <section className="portfolioArt">
        <main className="pa__container">
          <h1 className="pa__container__title">Animation cinema // Arts</h1>
          <p className="pa__container__description">
            Some texts will come out later
          </p>
          <Tools />
          <Videos />
          <Illustrations />
        </main>
      </section>
    </>
  );
}

// == Export
export default PortfolioArt;
