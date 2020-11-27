import React, { useRef } from 'react';
import { useIntersection } from 'react-use';

// == Import
import './welcome.scss';
import gsap from 'gsap';
import { element } from 'prop-types';

// == Composant
function Welcome() {
  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -60,
      ease: 'power4.out',
      stagger: {
        amount: 0.3,
      },
    });
  };

  const fadeOUt = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: 'power4.out',
    });
  };

  intersection && intersection.intersectionRatio < 0.5
    ? fadeOUt('.fadeIn')
    : fadeIn('.fadeIn');

  return (
    <>
      <div className="welcome">
        <div className="welcome__container">
          <div className="welcome__container__sectionFirst">
            <h3 className="welcome__container__sectionFirst--title">PORTFOLIO </h3>
            {/* Parallax made by me here */}
          </div>
          <div ref={sectionRef} className="welcome__container__sectionSecond">
            <div className="inner">
              <h3 className="fadeIn section2__title">It's time to discover my den!</h3>
              <p className="fadeIn section2__text">
                ~ Have a pleasant trip ~
              </p>
              <p className="fadeIn allrightsreserved">
                ©2020 Caroline Liard - All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// == Export
export default Welcome;
