// == Npm import
import React from 'react';

// == Import
import './about.scss';

// == Composant
function Experiences() {
  return (
    <>
      <section className="about__container--experiences">
        <h2 className="about__container--experiences-title">
          Nice to meet you dear visitor!
        </h2>
        <p className="about__container--experiences-text">
          I'm Caroline, 25 years old and very motivated!
        </p>
        <p className="about__container--experiences-text">
          After accomplish my studies (2019) in animation
          cinema in Lille, this allowed me to understand serenely
          <strong> the team work </strong>, <strong> the technological watch</strong>,
          <strong> the self-training in complete autonomy </strong>
          …
        </p>

        <p className="about__container--experiences-text">
          I add a new string to my bow by <strong>joining the school O'clock
            to realize a training "Web Developer Full stack Javascript"
            + one month of specialization React (735h of intensive courses)
                                          </strong>.
        </p>
        <p className="about__container--experiences-text">
          Having validated my last training project in 2020 November.
          I enthusiastically present my portfolio which is my very first personal
          project in the development web realized from A to Z (illustrations included!).
        </p>
        <p className="about__container--experiences-text">
          I am currently<strong> looking for an internship </strong>
          or <strong>job </strong>
          in the world of Web Development.
        </p>
      </section>
    </>
  );
}

// == Export
export default Experiences;
