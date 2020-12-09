// == Npm import
import React from 'react';
import { Link } from 'react-router-dom';
import img1 from './img1.jpg';
import img2 from './speed-mating.jpg';

// == Import
import './whatido.scss';

// == Composant
function WhatIDo() {
  return (
    <>
      <div className="whatIDo">

        <ul className="wid__container">
          <li className="wid__li">
            <h1 className="wid__title">
              What I Do
            </h1>
            <h2 className="wid__undertitle">
              Let me show you what kind of things I can do.
            </h2>
          </li>

          <div className="wid__card--container">
            <li className="wid__card wid__li ">
              <img className="wid__img" src={img1} alt="dev img" />

              <article className="wid__card-body">
                <header className="wid__card-body-header">
                  <span className="wid__card__title">
                    Web Development
                  </span>
                  <h3 className="wid__card__undertitle">
                    Opening a door to the future.
                  </h3>
                  <p className="wid__card__meta">
                    <span className="wid__card__text">
                      Quanta autem vis amicitiae sit,
                      ex hoc intellegi maxime potest,
                      quod ex infinita societate generis humani,
                      Quanta autem vis amicitiae sit,
                      ex hoc intellegi maxime potest,
                      quod ex infinita societate generis humani.
                    </span>

                    <div className="wid__card__button">
                      <Link to="/portfolio-web">
                        <button type="button" className="wid__button--single">
                          See More
                        </button>
                      </Link>
                    </div>

                  </p>
                </header>
              </article>
            </li>

            <li className="wid__card wid__li">
              <img className="wid__img" src={img2} alt="art img" />
              <article className="wid__card-body">
                <header className="wid__card-body-header">
                  <span className="wid__card__title">
                    Art // Animation
                  </span>
                  <h3 className="wid__card__undertitle">
                    Creative World.
                  </h3>

                  <p className="wid__card__meta">
                    <span className="wid__card__text">
                      Quanta autem vis amicitiae sit,
                      ex hoc intellegi maxime potest,
                      quod ex infinita societate generis humani,
                      Quanta autem vis amicitiae sit,
                      ex hoc intellegi maxime potest,
                      quod ex infinita societate generis humani.
                    </span>

                    <div className="wid__card__button">
                      <Link to="/portfolio-art">
                        <button type="button" className="wid__button--single">
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
