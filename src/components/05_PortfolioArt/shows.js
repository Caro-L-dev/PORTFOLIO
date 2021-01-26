// == Npm import
import React from 'react';
import ReactPlayer from 'react-player';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';

// == Composant
function Shows() {
  return (
    <>
      <section className="pa__shows">
        <div className="pa__title--deco"></div>
        <p className="pa__description">To see these on full size, click on the bottom right of each videos.</p>

        <ul className="pa__shows--container">

          <Carousel
            plugins={[
              'infinite',
              'arrows',
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 2,
                },
              },
            ]}
          >

            <li className="pa__shows--box">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=cmIB0aEmWQA&feature=emb_logo&ab_channel=CarolineLiard"
                width="100%"
                height="100%"
              />
            </li>

            <li className="pa__shows--box">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=df-cDqZ-G4c&t=9s&ab_channel=ECV-CreativeSchools%26Community"
                width="100%"
                height="100%"
              />
            </li>

            <li className="pa__shows--box">
              <ReactPlayer
                url="https://vimeo.com/340760980"
                width="100%"
                height="100%"
              />
            </li>

            <li className="pa__shows--box">
              <ReactPlayer
                url="https://vimeo.com/387496176"
                width="100%"
                height="100%"
              />
            </li>

            <li className="pa__shows--box">
              <ReactPlayer
                url="https://vimeo.com/201577019"
                width="100%"
                height="100%"
              />
            </li>

            <li className="pa__shows--box">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=CJCXli8m63g&ab_channel=Merry%27sArt"
                width="100%"
                height="100%"
              />
            </li>
          </Carousel>
        </ul>

      </section>
    </>
  );
}

// == Export
export default Shows;
