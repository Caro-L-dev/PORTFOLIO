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
        <Link to="/">
          <button type="button" className="about__container--CV-button">
            Download CV
          </button>
        </Link>
      </div>
    </>
  );
}

// == Export
export default Avatar;
