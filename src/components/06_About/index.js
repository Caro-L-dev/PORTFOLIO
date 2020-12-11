// == Npm import
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// == Import
import './about.scss';

// == Composant
function About() {
  return (
    <>
      <div className="about">
        <div className="about__container-all">
          <h1 className="about__title">
            About
          </h1>
          <h2 className="about__undertitle">
            Know everything about my
            experiences, and my hobbies.
          </h2>

          <main className="about__container">

            <section className="about__container--experiences">
              <h1 className="about__container--experiences-title">
                Experiences // Objectives
              </h1>
              <p className="about__container--experiences-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
              <p className="about__container--experiences-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
              <p className="about__container--experiences-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </section>

            <section className="about__container--hobbies">
              <h1 className="about__container--hobbies-title">
                Hobbies
              </h1>
              <div className="about__container--hobbies-allLogos">
                <a target="_blank" href="https://www.linkedin.com/in/liardcaroline/" className="contact-link">
                  <FontAwesomeIcon icon={['fas', 'dice']} size="4x" />
                </a>

                <a target="_blank" href="https://www.linkedin.com/in/liardcaroline/" className="contact-link">
                  <FontAwesomeIcon icon={['fas', 'dragon']} size="4x" />
                </a>

                <a target="_blank" href="https://www.linkedin.com/in/liardcaroline/" className="contact-link">
                  <FontAwesomeIcon icon={['fas', 'globe-europe']} size="3x" />
                </a>

                <a target="_blank" href="https://www.linkedin.com/in/liardcaroline/" className="contact-link">
                  <FontAwesomeIcon icon={['fas', 'dumbbell']} size="3x" />
                </a>

                <a target="_blank" href="https://www.linkedin.com/in/liardcaroline/" className="contact-link">
                  <FontAwesomeIcon icon={['fa', 'book']} size="3x" />
                </a>


                <a target="_blank" href="https://www.linkedin.com/in/liardcaroline/" className="contact-link">
                  <FontAwesomeIcon icon={['fa', 'video']} size="3x" />
                </a>

                <a target="_blank" href="https://www.linkedin.com/in/liardcaroline/" className="contact-link">
                  <FontAwesomeIcon icon={['fa', 'cookie']} size="3x" />
                </a>

                <a target="_blank" href="https://www.linkedin.com/in/liardcaroline/" className="contact-link">
                  <FontAwesomeIcon icon={['fa', 'paint-brush']} size="3x" />
                </a>

                <a target="_blank" href="https://www.linkedin.com/in/liardcaroline/" className="contact-link">
                  <FontAwesomeIcon icon={['fa', 'palette']} size="3x" />
                </a>

              </div>
            </section>

            <section className="about__container--avatar">
              <a href="#" alt="Avatar draw by me"> draw here </a>

              <div className="about__container--CV">
                <Link to="/">
                  <button type="button" className="about__container--CV-button">
                    Download CV
                  </button>
                </Link>
              </div>
            </section>

          </main>
        </div>
      </div>
    </>
  );
}

// == Export
export default About;
