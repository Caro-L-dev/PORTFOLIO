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
            <FontAwesomeIcon icon={['fab', 'html5']} size="6x" color="#CE5634" className="icon" />
            <p>HTML5</p>
          </li>

          <li className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'css3-alt']} size="6x" color="#379AD5" className="icon" />
            <p>CSS3</p>
          </li>

          <li className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'sass']} size="6x" color="#CE679A" className="icon" />
            <p>Sass</p>
          </li>

          <li className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'bootstrap']} size="6x" color="#563484" className="icon" />
            <p>Bootstrap</p>
          </li>

          <li className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'js-square']} size="6x" color="#F7DF1E" className="icon" />
            <p>JavaScript, Typescript</p>
          </li>

          <li className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'node']} size="6x" color="#71B352" className="icon" />
            <p>Node.js, Express</p>
          </li>

          <li className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'react']} size="6x" color="#4AD5FF" className="icon" />
            <p>React, Redux</p>
          </li>

          <li className="pw__logo--span pw__logo icon">||</li>

          <li className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'github']} size="6x" className="icon" color="#fff" />
            <p>Git, Github</p>
          </li>

          <li className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'discord']} size="6x" color="#6F88DF" className="icon" />
            <p>Discord</p>
          </li>

          <li className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'trello']} size="6x" color="#008EE1" className="icon" />
            <p>Trello</p>
          </li>

          <li className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'yarn']} size="6x" color="#2C8EBB" className="icon" />
            <p>Yarn</p>
          </li>

          <li className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'npm']} size="6x" color="#CB3837" className="icon" />
            <p>Npm</p>
          </li>

          <li className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'linux']} size="6x" className="icon" color="#fff" />
            <p>Linux</p>
          </li>

          <li className="pw__logo">
            <FontAwesomeIcon icon={['fa', 'code']} size="6x" color="#2CA4F1" className="icon" />
            <p>VS Code</p>
          </li>

          <li className="pw__logo">
            <FontAwesomeIcon icon={['fab', 'font-awesome-flag']} size="6x" color="#1661A5" className="icon" />
            <p>Font Awesome</p>
          </li>

        </ul>
      </section>
    </>
  );
}

// == Export
export default Technologies;
