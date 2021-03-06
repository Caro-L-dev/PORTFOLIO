// == Npm import
import React from 'react';
import { Link } from 'react-router-dom';
import img1 from './img1.jpg';
import art from './art.jpg';

// == Import scss
import './whatido-00.scss';
import './whatido-01-large-screens.scss';
import './whatido-02-desktops.scss';
import './whatido-03-ipads-portrait-mode.scss';
import './whatido-04-mobile-devices.scss';

// == Composant
function WhatIDo() {
  return (
    <>
      <section className="whatIDo">

        <ul className="wid__container">
          <li className="wid__li">
            <h1 className="wid__title">
              What I Do
            </h1>
            <div className="wid__title--deco" />
            <h2 className="wid__undertitle">
              Let me show you what kind of things I can do.
            </h2>
          </li>

          <main className="wid__card--container">
            <li className="wid__card wid__li ">
              <img
                className="wid__img"
                src={img1}
                alt="development portfolio"
              />

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
                      Having joined the O'clock school labeled
                      «Grande École du Numérique» in order to
                      become web developer Fullstack
                      JavaScript, I show you my projects here.
                    </span>

                    <div className="wid__card__button">
                      <Link to="/portfolio-web">
                        <button type="button" className="wid__button--single">
                          See my web development portfolio
                        </button>
                      </Link>
                    </div>

                  </p>
                </header>
              </article>
            </li>

            <li className="wid__card wid__li">
              <img className="wid__img" src={art} alt="art portfolio" />
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
                      Graduated of 2D/3D animation at ECV Lille,
                      I'm specialized in compositing.
                      I'm also
                      a color artist.

                      Very curious and creative,
                      I like design artistic projects.
                    </span>

                    <div className="wid__card__button">
                      <Link to="/portfolio-art">
                        <button type="button" className="wid__button--single">
                          Here again, but in art field!
                        </button>
                      </Link>
                    </div>

                  </p>
                </header>
              </article>
            </li>
          </main>
        </ul>

      </section>
    </>
  );
}

// == Export
export default WhatIDo;
