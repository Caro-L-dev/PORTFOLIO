// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import : local
import './notfound.scss';

// == Composant
const NotFound = () => (
  <>
    <div className="notFound">
      <h1 className="notFound__title">404</h1>
      <h2>
        A new illustration will soon be there!
      </h2>
    </div>
  </>
);

// == Export
export default NotFound;
