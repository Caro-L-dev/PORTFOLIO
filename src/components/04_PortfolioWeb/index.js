// == Npm import
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Technologies from '../04_PortfolioWeb/technologies';
import ProjectsWeb from '../04_PortfolioWeb/projectsWeb';

// == Import
import './portfolioWeb.scss';

// == Composant
function PortfolioWeb() {
  return (
    <>
      <section className="portfolioWeb">
        <main className="pw__container">
          <h1 className="pw__container__title">Web Development</h1>
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
