// == Npm import
import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../03_WhatIDo/img1.jpg';
import img2 from '../03_WhatIDo/speed-mating.jpg';

// == Import
import './whatido.scss';

// == Composant
function WhatIDo() {
  return (
    <>
      <div className="whatIDo">

        <ul>
          <li>
            <h1 className="wid__title">
              What I Do
            </h1>
            <h2 className="wid__undertitle">
              Let me show you what kind of things I can do.
            </h2>
          </li>

          <div className="wid__card--container">
            <li className="wid__card">
              <img className="wid__img" src={img1} alt="dev img" />

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

                    <div className="button">
                      <Link to="">
                        <button type="button" className="whatIDo__button Web">
                          See More
                        </button>
                      </Link>
                    </div>
                  </p>

                </header>
              </article>
            </li>

            <li className="wid__card">
              <img className="wid__img" src={img2} alt="art img" />
              <article className="card-body">
                <header>
                  <span className="pre-heading">Art // Animation</span>
                  <div className="title">
                    <h3>Creative World.</h3>
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

                    <div className="button">
                      <Link to="">
                        <button type="button" className="whatIDo__button Web">
                          See More
                        </button>
                      </Link>
                    </div>
                  </p>

                </header>

              </article>
            </li>
          </div>
        </ul>

      </div>
    </>
  );
}

// == Export
export default WhatIDo;
