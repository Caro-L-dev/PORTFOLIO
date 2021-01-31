// == Npm import
import React from 'react';
import Technologies from '../04_PortfolioWeb/technologies';
import ProjectsWeb from '../04_PortfolioWeb/projectsWeb';

// == Import scss
import './portfolioWeb.scss';
import './portfolioWeb-01-large-screens.scss';
import './portfolioWeb-02-desktops.scss';
import './portfolioWeb-03-ipads-portrait-mode.scss';
import './portfolioWeb-04-mobile-devices.scss';

// == Composant
function PortfolioWeb() {
  return (
    <>
      <section className="portfolioWeb">
        <main className="pw__container">
          <h1 className="pw__container__title">Web Development</h1>
          <div className="pw__title--deco" />
          <p className="pw__container__description">
            Here you are!
          </p>
          <p className="pw__container__description">
            For the moment the portfolio is under construction
            but don’t worry it will be regularly updated as soon as a project is born!
            In the meantime, it will be filled with false data to keep the overall look of the page.
          </p>
          <Technologies />
          <ProjectsWeb />
        </main>
      </section>
    </>
  );
}

// == Export
export default PortfolioWeb;
