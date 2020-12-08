// == Npm import
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// == Import
import './whatido.scss';

// == Composant
function WhatIDo() {
  return (
    <>
      <div className="whatIDo">
        <ul>

          <li className="card">
            <a className="img">
              <FontAwesomeIcon className="dev--icon" icon={['fab', 'dev']} size="10x" />
            </a>
            <article className="card-body">
              <header>
                <span className="pre-heading">Web Development</span>
                <div className="title">
                  <h3>Opening a door to the future.</h3>
                </div>
                <p className="meta">
                  <span className="text">
                    Quanta autem vis amicitiae sit,
                    ex hoc intellegi maxime potest,
                    quod ex infinita societate generis humani,
                    Quanta autem vis amicitiae sit,
                    ex hoc intellegi maxime potest,
                    quod ex infinita societate generis humani.
                  </span>
                </p>
              </header>
              <div className="button">
                <Link to="">
                  <button type="button" className="whatIDo__button Web">
                    See More
                  </button>
                </Link>
              </div>
            </article>
          </li>

        </ul>
      </div>
    </>
  );
}

// == Export
export default WhatIDo;
