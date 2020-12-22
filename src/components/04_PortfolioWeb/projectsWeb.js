// == Npm import
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeroImg from './Hero_miniature.png';
import TrexrunImg from './Trexrun.png';
import PokedexImg from './Pokedex.jpg';

// == Import
import './portfolioWeb.scss';

// == Composant
function ProjectsWeb() {
  return (
    <>
      <section className="pw__projects">
        <h2 className="pw__title">Portfolio</h2>

        <FontAwesomeIcon icon={['fa', 'chevron-left']} size="3x" />

        <img
          className="pw__img"
          src={HeroImg}
          alt="Miniature Hero Website"
        />

        <img
          className="pw__img"
          src={TrexrunImg}
          alt="Miniature mini game Js T-rex run"
        />

        <img
          className="pw__img"
          src={PokedexImg}
          alt="Miniature pokedex"
        />

        <div className="pw__img">Miniature 03</div>

        <FontAwesomeIcon icon={['fa', 'chevron-right']} size="3x" />
      </section>

    </>
  );
}

// == Export
export default ProjectsWeb;
