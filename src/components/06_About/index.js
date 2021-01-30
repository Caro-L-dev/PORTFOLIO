// == Npm import
import React from 'react';
import Hobbies from '../06_About/hobbies';
import Experiences from '../06_About/experiences';
import Avatar from '../06_About/avatar';

// == Scss Import
import './about.scss';
import './about-01-large-screens.scss';
import './about-02-desktops.scss';
import './about-03-ipads-portrait-mode.scss';
import './about-04-mobile-devices.scss';

// == Composant
function About() {
  return (
    <>
      <section className="about">
        <div className="about__container-all">
          <h1 className="about__title">
            About
          </h1>
          <h2 className="about__description">
            Know everything about me, and my hobbies.
          </h2>

          <main className="about__container">
            <Experiences />
            <Hobbies />
            <Avatar />
          </main>
        </div>
      </section>
    </>
  );
}

// == Export
export default About;
