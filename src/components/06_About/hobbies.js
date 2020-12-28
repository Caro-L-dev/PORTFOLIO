// == Npm import
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// == Import
import './about.scss';

// == Composant
function Hobbies() {
  return (
    <>
      <section className="about__container--hobbies">
        <h1 className="about__container--hobbies-title">
          Hobbies
        </h1>
        <ul className="about__container--hobbies-allLogos">
          <li className="about__container--hobbies-img">
            <a>
              <FontAwesomeIcon icon={['fas', 'dice']} size="2x" className="icon" />
            </a>
          </li>

          <li className="about__container--hobbies-img">
            <a>
              <FontAwesomeIcon icon={['fas', 'dragon']} size="2x" className="icon" />
            </a>
          </li>

          <li className="about__container--hobbies-img">
            <a>
              <FontAwesomeIcon icon={['fas', 'globe-europe']} size="2x" className="icon" />
            </a>
          </li>

          <li className="about__container--hobbies-img">
            <a>
              <FontAwesomeIcon icon={['fas', 'dumbbell']} size="2x" className="icon" />
            </a>
          </li>

          <li className="about__container--hobbies-img">
            <a>
              <FontAwesomeIcon icon={['fa', 'book']} size="2x" className="icon" />
            </a>
          </li>

          <li className="about__container--hobbies-img">
            <a>
              <FontAwesomeIcon icon={['fa', 'video']} size="2x" className="icon" />
            </a>
          </li>

          <li className="about__container--hobbies-img">
            <a>
              <FontAwesomeIcon icon={['fa', 'cookie']} size="2x" className="icon" />
            </a>
          </li>

          <li className="about__container--hobbies-img">
            <a>
              <FontAwesomeIcon icon={['fa', 'paint-brush']} size="2x" className="icon" />
            </a>
          </li>
          <li className="about__container--hobbies-img">
            <a>
              <FontAwesomeIcon icon={['fa', 'palette']} size="2x" className="icon" />
            </a>
          </li>

        </ul>
      </section>
    </>
  );
}

// == Export
export default Hobbies;
