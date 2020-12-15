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
      <div className="about__container--hobbies-allLogos">
        <a>
          <FontAwesomeIcon icon={['fas', 'dice']} size="4x" />
        </a>

        <a>
          <FontAwesomeIcon icon={['fas', 'dragon']} size="4x" />
        </a>

        <a>
          <FontAwesomeIcon icon={['fas', 'globe-europe']} size="3x" />
        </a>

        <a>
          <FontAwesomeIcon icon={['fas', 'dumbbell']} size="3x" />
        </a>

        <a>
          <FontAwesomeIcon icon={['fa', 'book']} size="3x" />
        </a>

        <a>
          <FontAwesomeIcon icon={['fa', 'video']} size="3x" />
        </a>

        <a>
          <FontAwesomeIcon icon={['fa', 'cookie']} size="3x" />
        </a>

        <a>
          <FontAwesomeIcon icon={['fa', 'paint-brush']} size="3x" />
        </a>

        <a>
          <FontAwesomeIcon icon={['fa', 'palette']} size="3x" />
        </a>

      </div>
    </>
  );
}

// == Export
export default Hobbies;
