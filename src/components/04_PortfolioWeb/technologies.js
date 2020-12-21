// == Npm import
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

        <ul className="pw__technologies--logos">

          <li className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'html5']} size="3x" color="#CE5634" className="icon" />
            <p>HTML5</p>
          </li>

          <li className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'css3-alt']} size="3x" color="#379AD5" className="icon" />
            <p>CSS3</p>
          </li>

          <li className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'sass']} size="3x" color="#CE679A" className="icon" />
            <p>Sass</p>
          </li>

          <li className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'bootstrap']} size="3x" color="#563D7C" className="icon" />
            <p>Bootstrap</p>
          </li>

          <li className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'js-square']} size="3x" color="#F7DF1E" className="icon" />
            <p>JavaScript</p>
          </li>

          <li className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'node']} size="3x" color="#71B352" className="icon" />
            <p>Node.js</p>
          </li>

          <li className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'react']} size="3x" color="#4AD5FF" className="icon" />
            <p>React, Redux</p>
          </li>

          <li className="pw__logo--span pw__logo icon">||</li>

          <li className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'git']} size="3x" className="icon" />
            <p>Git</p>
          </li>

          <li className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'github']} size="3x" className="icon" />
            <p>Github</p>
          </li>

          <li className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'slack']} size="3x" className="icon" />
            <p>Slack</p>
          </li>

          <li className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'discord']} size="3x" color="#6F88DF" className="icon" />
            <p>Discord</p>
          </li>

          <li className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'trello']} size="3x" color="#008EE1" className="icon" />
            <p>Trello</p>
          </li>

          <li className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'yarn']} size="3x" color="#2C8EBB" className="icon" />
            <p>Yarn</p>
          </li>

          <li className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'npm']} size="3x" color="#CB3837" className="icon" />
            <p>Npm</p>
          </li>

          <li className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'linux']} size="3x" className="icon" />
            <p>Linux</p>
          </li>

          <li className="pw__logo">
            <FontAwesomeIcon icon={['fa', 'code']} size="3x" color="#2CA4F1" className="icon" />
            <p>VS Code</p>
          </li>

          <li className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'font-awesome-flag']} size="3x" color="#1661A5" className="icon" />
            <p>Font Awesome</p>
          </li>

        </ul>
      </section>
    </>
  );
}

// == Export
export default Technologies;