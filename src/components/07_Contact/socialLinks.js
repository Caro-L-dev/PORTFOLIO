// == Npm import
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// == Import
import './socialLinks.scss';

// == Composant
function socialLinks() {
  return (
    <>
      <div className="socialLinks">
        <ul className="socialLinks__container">
          <li>
            <a className="linkedin socialLinks--logo" href="https://www.linkedin.com/in/liardcaroline/" target="_blank">
              <span className="socialLinks--logo--span" />
              <span className="socialLinks--logo--span" />
              <span className="socialLinks--logo--span" />
              <span className="socialLinks--logo--span" />
              <i
                className="linkedin"
                aria-hidden="true"
              >
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="1x" />
              </i>
            </a>
          </li>
          <li>
            <a className="github socialLinks--logo" href="https://github.com/Caro-L-dev" target="_blank">
              <span className="socialLinks--logo--span" />
              <span className="socialLinks--logo--span" />
              <span className="socialLinks--logo--span" />
              <span className="socialLinks--logo--span" />
              <i
                className="github"
                aria-hidden="true"
              >
                <FontAwesomeIcon icon={['fab', 'github']} size="1x" />
              </i>
            </a>
          </li>
          <li>
            <a className="artstation socialLinks--logo" href="https://www.artstation.com/caroline_liard" target="_blank">
              <span className="socialLinks--logo--span" />
              <span className="socialLinks--logo--span" />
              <span className="socialLinks--logo--span" />
              <span className="socialLinks--logo--span" />
              <i
                className="artstation"
                aria-hidden="true"
              >
                <FontAwesomeIcon icon={['fab', 'artstation']} size="1x" />
              </i>
            </a>
          </li>
          <li>
            <a className="instagram socialLinks--logo" href="https://www.instagram.com/caro.line_ld/" target="_blank">
              <span className="socialLinks--logo--span" />
              <span className="socialLinks--logo--span" />
              <span className="socialLinks--logo--span" />
              <span className="socialLinks--logo--span" />
              <i
                className="instagram"
                aria-hidden="true"
              >
                <FontAwesomeIcon icon={['fab', 'instagram']} size="1x" />
              </i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

// == Export
export default socialLinks;
