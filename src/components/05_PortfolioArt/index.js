// == Npm import
import React from 'react';

import Tools from '../05_PortfolioArt/tools';
import Shows from '../05_PortfolioArt/shows';
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
          <h1 className="pa__container__title">Art Portfolio</h1>
          <div className="pa__title--deco" />
          <Tools />
          <Shows />
          <Illustrations />
        </main>
      </section>

    </>
  );
}

// == Export
export default PortfolioArt;
