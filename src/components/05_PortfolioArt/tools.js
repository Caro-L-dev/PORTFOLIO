// == Npm import
import React from 'react';

import './tools.scss';

// == Img Import
import Photoshop from './photoshop.svg';
import After from './after-effects.svg';
import Harmony from './harmony2.png';
import Krita from './krita.svg';
import Premiere from './premiere.svg';
import Maya from './maya.png';
import Nuke from './nuke.png';
import Illustrator from './illustrator.svg';

// == Composant
function Tools() {
  return (
    <>
      <section className="pa__tools">
        <ul className="pa__tools--container">
          <h2 className="pa__title">Tools</h2>

          <li className="pa__tools--container--logo">
            <img src={Photoshop} alt="photoshop" />
          </li>

          <li className="pa__tools--container--logo">
            <img src={After} alt="after-effects" />
          </li>

          <li className="pa__tools--container--logo">
            <img src={Harmony} alt="toon boom harmony" />
          </li>

          <li className="pa__tools--container--logo">
            <img src={Krita} alt="krita" />
          </li>

          <li className="pa__tools--container--logo">
            <img src={Premiere} alt="premiere pro" />
          </li>

          <li className="pa__tools--container--logo">
            <img src={Maya} alt="maya" />
          </li>

          <li className="pa__tools--container--logo">
            <img src={Nuke} alt="nuke" />
          </li>

          <li className="pa__tools--container--logo">
            <img src={Illustrator} alt="illustrator" />
          </li>

        </ul>
      </section>
    </>
  );
}

// == Export
export default Tools;
