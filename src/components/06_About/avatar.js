// == Npm import
import React from 'react';

// == Import
import './about.scss';
import Avatar2 from './aboutAvatar.png';

// == Composant
function Avatar() {
  return (
    <>
      <div className="about__avatar">
        <img src={Avatar2} alt="Avatar draw by me" className="about__container--avatar" />
        <div className="about__container--CV">
          <a href="CV_DEV_Caroline_Liard_01.jpg" alt="download CV" download>
            <button type="button" className="about__container--CV-button">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

// == Export
export default Avatar;
