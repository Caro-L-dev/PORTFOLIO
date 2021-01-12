// == Npm import
import React, { useState } from 'react';

import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import HeroImg from './Hero_miniature.png';
import TrexrunImg from './Trexrun.png';
import PokedexImg from './Pokedex.jpg';

// == Import scss
// import '@brainhubeu/react-carousel/lib/style.css';
import './arrows.scss';
import './portfolioWeb.scss';

// == Composant
function ProjectsWeb() {
  return (
    <>
      <section className="pw__projects">
        <h2 className="pw__title">Portfolio</h2>

        <Carousel
          plugins={[
            'infinite',
            'arrows',
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 4,
              },
            },
          ]}
        >

          <div className="card">
            <a href="http://34.207.247.234:5000/#/">
              <img
                className="pw__img"
                src={HeroImg}
                alt="Miniature Hero Website"
              />
            </a>
          </div>

          <div className="card">
            <a href="https://github.com/Caro-L-dev/T-rex-run">
              <img
                className="pw__img"
                src={TrexrunImg}
                alt="Miniature mini game Js T-rex run"
              />
            </a>
          </div>

          <div className="card">
            <img
              className="pw__img"
              src={PokedexImg}
              alt="Miniature pokedex"
            />
          </div>

          <div className="card">
            <div className="pw__img">Miniature 03</div>
            <div className="info">
              <h3>Title</h3>
              <p>Text</p>
            </div>
          </div>
        </Carousel>
      </section>

    </>
  );
}

// == Export
export default ProjectsWeb;
