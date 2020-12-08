// == Npm import
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// == Import
import './whatido.scss';

// == Composant
function WhatIDo() {
  return (
    <>
      <div className="whatIDo">
        <div className="whatIDo__container--title">
          <p className="WhatIDo__title">What I Do</p>
          <p className="WhatIDo__underTitle">
            Let me show you what kind of things I can do.
          </p>
        </div>
        <div className="whatIDo__card">
          <div className="whatIDo__img">
            <a className="whatIDo__img">
              <FontAwesomeIcon icon={['fab', 'dev']} size="6x" />
            </a>
          </div>
          <h1 className="whatIDo__card--title">Web Development</h1>
          <h2 className="whatIDo__card--underTitle">Opening a door to the future</h2>
          <p className="whatIDo__card--text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Ad eum dolorum architecto obcaecati enim dicta praesentium,
            quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.
            Ad eum dolorum architecto obcaecati enim dicta praesentium,
            quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.
            quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.
            quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.
            quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.
            quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.
            quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.
            quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.
          </p>
          <p className="whatIDo__see-more-web">
            <Link to="">
              <button type="button" className="whatIDo__see-more">
                See More
              </button>
            </Link>
          </p>
        </div>
        <div className="whatIDo__card">
          <div className="whatIDo__img">
            <a className="whatIDo__img">
              <FontAwesomeIcon icon={['fa', 'palette']} size="6x" />
            </a>
          </div>
          <h1 className="whatIDo__card--title">Animation // Art</h1>
          <h2 className="whatIDo__card--underTitle">It's me amigo</h2>
          <p className="whatIDo__card--text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Ad eum dolorum architecto obcaecati enim dicta praesentium,
            quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.
            quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.
            quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.
            quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.
            quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.
            quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.
            quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.
          </p>
          <p className="whatIDo__see-more-art">
            <Link to="">
              <button type="button" className="whatIDo__see-more">
                See More
              </button>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

// == Export
export default WhatIDo;
