// == Npm import
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// == Import
import './portfolioWeb.scss';

// == Composant
function PortfolioWeb() {
  return (
    <>
      <div className="portfolioWeb">
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

          <section className="pw__technologies">
            <h2 className="pw__title">Technologies</h2>
            <p className="pw__technologies--description">
              Here you can find some of the stuff that I use.
            </p>
            <div className="pw__technologies--logos">
              <FontAwesomeIcon icon={['fas', 'chevron-left']} size="3x" />

              <div className="pw__logo">
                <FontAwesomeIcon icon={['fab', 'html5']} size="3x" />
                <p>HTML5</p>
              </div>

              <div className="pw__logo">
                <FontAwesomeIcon icon={['fab', 'css3-alt']} size="3x" />
                <p>CSS3</p>
              </div>

              <div className="pw__logo">
                <FontAwesomeIcon icon={['fab', 'sass']} size="3x" />
                <p>Sass</p>
              </div>

              <div className="pw__logo">
                <FontAwesomeIcon icon={['fab', 'bootstrap']} size="3x" />
                <p>Bootstrap</p>
              </div>

              <div className="pw__logo">
                <FontAwesomeIcon icon={['fab', 'js-square']} size="3x" />
                <p>JavaScript</p>
              </div>

              <div className="pw__logo">
                <FontAwesomeIcon icon={['fab', 'node']} size="3x" />
                <p>Node.js</p>
              </div>

              <div className="pw__logo">
                <FontAwesomeIcon icon={['fab', 'react']} size="3x" />
                <p>React, Redux</p>
              </div>

              <span>||</span>

              <FontAwesomeIcon icon={['fas', 'chevron-right']} size="3x" />
            </div>
          </section>

          <section className="pw__projects">
            <h2 className="pw__title">Portfolio</h2>
            <div className="pw__img">Arrow 01</div>
            <div className="pw__img">Miniature 01</div>
            <div className="pw__img">Miniature 02</div>
            <div className="pw__img">Miniature 03</div>
            <div className="pw__img">Arrow 02</div>
          </section>
        </main>
      </div>
    </>
  );
}

// == Export
export default PortfolioWeb;
