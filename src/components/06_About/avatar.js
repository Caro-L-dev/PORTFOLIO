// == Npm import
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './about.scss';

// == Composant
function Avatar() {
  return (
    <>
      <div className="about__container--avatar">here</div>
      <div className="about__container--CV">
        <a href="CV_DEV_Caroline_Liard_01.jpg" download>
          <button type="button" className="about__container--CV-button">
            Download CV
          </button>
        </a>
      </div>
    </>
  );
}

// == Export
export default Avatar;
