// == Npm import
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

// == Import
import './portfolioWeb.scss';

// == Composant
function Technologies() {
  return (
    <>
      <section className="pw__technologies">
        <h2 className="pw__title">Technologies</h2>
        <p className="pw__technologies--description">
          Here you can find some of the stuff that I use.
        </p>
        <div className="pw__technologies--logos">
          <FontAwesomeIcon icon={['fas', 'chevron-left']} size="3x" className="icon" />

          <div className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'html5']} size="3x" className="icon" />
            <p>HTML5</p>
          </div>

          <div className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'css3-alt']} size="3x" className="icon" />
            <p>CSS3</p>
          </div>

          <div className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'sass']} size="3x" className="icon" />
            <p>Sass</p>
          </div>

          <div className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'bootstrap']} size="3x" className="icon" />
            <p>Bootstrap</p>
          </div>

          <div className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'js-square']} size="3x" className="icon" />
            <p>JavaScript</p>
          </div>

          <div className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'node']} size="3x" className="icon" />
            <p>Node.js</p>
          </div>

          <div className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'react']} size="3x" className="icon" />
            <p>React, Redux</p>
          </div>

          <span className="pw__logo--span pw__logo icon">||</span>

          <div className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'git']} size="3x" className="icon" />
            <p>Git</p>
          </div>

          <div className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'github']} size="3x" className="icon" />
            <p>Github</p>
          </div>

          <div className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'slack']} size="3x" className="icon" />
            <p>Slack</p>
          </div>

          <div className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'discord']} size="3x" className="icon" />
            <p>Discord</p>
          </div>

          <div className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'trello']} size="3x" className="icon" />
            <p>Trello</p>
          </div>

          <div className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'yarn']} size="3x" className="icon" />
            <p>Yarn</p>
          </div>

          <div className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'npm']} size="3x" className="icon" />
            <p>Npm</p>
          </div>

          <div className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'linux']} size="3x" className="icon" />
            <p>Linux</p>
          </div>

          <div className="pw__logo">
            <FontAwesomeIcon icon={['fa', 'code']} size="3x" className="icon" />
            <p>VS Code</p>
          </div>

          <div className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'font-awesome-flag']} size="3x" className="icon" />
            <p>Font Awesome</p>
          </div>

          <FontAwesomeIcon icon={['fas', 'chevron-right']} size="3x" className="icon" />
        </div>
      </section>
    </>
  );
}

// == Export
export default Technologies;
