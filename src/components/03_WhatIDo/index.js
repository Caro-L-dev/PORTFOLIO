// == Npm import
import React from 'react';

// == Import
import './whatido.scss';

// == Composant
function WhatIDo() {
  return (
    <>
      <div className="whatIDo">
        <div className="whatIDo__container--card">
          <p className="WhatIDo__title">What I Do</p>
          <p className="WhatIDo__underTitle">
            Let me show you what kind of things I can do.
          </p>
          <div className="whatIDo__card" />
          <div className="whatIDo__img"> Img</div>
          <div className="whatIDo__description">
            <h1 className="whatIDo__card--title">Web Development</h1>
            <h2 className="whatIDo__card--underTitle">Opening a door to the future</h2>
            <p className="whatIDo__card--text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Ad eum dolorum architecto obcaecati enim dicta praesentium,
              quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.
            </p>
            <p className="whatIDo__see-more">
              <a href="#">See More</a>
            </p>
          </div>
        </div>
        <div className="whatIDo__card">
          <div className="whatIDo__img"> Img</div>
          <div className="whatIDo__description">
            <h1 className="whatIDo__card--title">Animation // Art</h1>
            <h2 className="whatIDo__card--underTitle">It's me amigo</h2>
            <p className="whatIDo__card--text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Ad eum dolorum architecto obcaecati enim dicta praesentium,
              quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.
            </p>
            <p className="whatIDo__see-more">
              <a href="#">See More</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

// == Export
export default WhatIDo;
