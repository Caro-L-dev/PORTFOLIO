// == Npm import
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';

// == Import scss
// import '@brainhubeu/react-carousel/lib/style.css';
import './arrows.scss';
import './portfolioWeb.scss';

// == Composant
function ProjectsWeb() {
  /* See commit to put modal here */
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
                numberOfSlides: 3,
              },
            },
          ]}
        >

          <div className="card card1">
            <div className="hoverdiv">
              <p className="hoverdiv--title"> HERO </p>
              <p className="hoverdiv--description">  Website Point and Click game where there are several playable stories.</p>
              <ul className="hoverdiv__container--links">
                <li>
                  <a className="websiteLink pw--logo" href="http://34.207.247.234:5000/#/" target="_blank">
                    <i
                      className="websiteLink"
                      aria-hidden="true"
                    >
                      <FontAwesomeIcon icon={['fas', 'external-link-alt']} size="1x" />
                    </i>
                  </a>
                </li>

                <li>
                  <a className="github pw--logo" href="https://github.com/Caro-L-dev/Hero" target="_blank">
                    <i
                      className="github"
                      aria-hidden="true"
                    >
                      <FontAwesomeIcon icon={['fab', 'github']} size="1x" color="white" />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="card card2">
            <div className="hoverdiv">
              <p className="hoverdiv--title"> T-REX RUN </p>
              <p className="hoverdiv--description">  T-rex running through the desert, jumping over obstacles.</p>
              <ul className="hoverdiv__container--links">
                <li>
                  <a className="github pw--logo" href="https://github.com/Caro-L-dev/T-rex-run" target="_blank">
                    <i
                      className="github"
                      aria-hidden="true"
                    >
                      <FontAwesomeIcon icon={['fab', 'github']} size="1x" color="white" />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="card card3">
            <div className="hoverdiv">
              <p className="hoverdiv--title"> POKEDEX </p>
              <p className="hoverdiv--description">  application that gathers various info on existing pokemons.</p>
              <ul className="hoverdiv__container--links">
                <li>
                  <a className="github pw--logo" href="https://github.com/Caro-L-dev/T-rex-run" target="_blank">
                    <i
                      className="github"
                      aria-hidden="true"
                    >
                      <FontAwesomeIcon icon={['fab', 'github']} size="1x" color="white" />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="card card4">
            <div className="hoverdiv">
              <p className="hoverdiv--title"> TO BE CONTINUED </p>
              <p className="hoverdiv--description"> ??? </p>
            </div>

          </div>
        </Carousel>
      </section>

      <div className="testPhoneDevWeb">
        <section className="pw__projectsPhone">
          <h2 className="pw__title">Portfolio</h2>

          <div className="card card1">
            <div className="hoverdiv">
              <p className="hoverdiv--title"> HERO </p>
              <p className="hoverdiv--description">  Website Point and Click game where there are several playable stories.</p>
              <ul className="hoverdiv__container--links">
                <li>
                  <a className="websiteLink pw--logo" href="http://34.207.247.234:5000/#/" target="_blank">
                    <i
                      className="websiteLink"
                      aria-hidden="true"
                    >
                      <FontAwesomeIcon icon={['fas', 'external-link-alt']} size="1x" />
                    </i>
                  </a>
                </li>

                <li>
                  <a className="github pw--logo" href="https://github.com/Caro-L-dev/Hero" target="_blank">
                    <i
                      className="github"
                      aria-hidden="true"
                    >
                      <FontAwesomeIcon icon={['fab', 'github']} size="1x" color="white" />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="card card2">
            <div className="hoverdiv">
              <p className="hoverdiv--title"> T-REX RUN </p>
              <p className="hoverdiv--description">  T-rex running through the desert, jumping over obstacles.</p>
              <ul className="hoverdiv__container--links">
                <li>
                  <a className="github pw--logo" href="https://github.com/Caro-L-dev/T-rex-run" target="_blank">
                    <i
                      className="github"
                      aria-hidden="true"
                    >
                      <FontAwesomeIcon icon={['fab', 'github']} size="1x" color="white" />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="card card3">
            <div className="hoverdiv">
              <p className="hoverdiv--title"> POKEDEX </p>
              <p className="hoverdiv--description">  application that gathers various info on existing pokemons.</p>
              <ul className="hoverdiv__container--links">
                <li>
                  <a className="github pw--logo" href="https://github.com/Caro-L-dev/T-rex-run" target="_blank">
                    <i
                      className="github"
                      aria-hidden="true"
                    >
                      <FontAwesomeIcon icon={['fab', 'github']} size="1x" color="white" />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="card card4">
            <div className="hoverdiv">
              <p className="hoverdiv--title"> TO BE CONTINUED </p>
              <p className="hoverdiv--description"> ??? </p>
            </div>

          </div>

        </section>

      </div>

    </>
  );
}

// == Export
export default ProjectsWeb;
