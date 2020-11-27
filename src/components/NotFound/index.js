// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import : local
import './notfound.scss';

// == Composant
const NotFound = () => (
  <>
    <div className="NotFound">
      <h1>404</h1>
      <h2>
        Image home made
      </h2>
      <Link to="/welcome">
        <button className="NotFound__button" type="button">
          Clique ici pour retrouver ton chemin
        </button>
      </Link>
    </div>
  </>
);

// == Export
export default NotFound;
