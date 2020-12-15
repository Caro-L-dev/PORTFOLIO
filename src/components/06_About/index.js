// == Npm import
import React from 'react';
import { Link } from 'react-router-dom';
import Hobbies from '../06_About/hobbies';
import Experiences from '../06_About/experiences';
import Avatar from '../06_About/avatar';

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
            <Experiences />
            <Hobbies />
            <Avatar />
          </main>
        </div>
      </div>
    </>
  );
}

// == Export
export default About;
