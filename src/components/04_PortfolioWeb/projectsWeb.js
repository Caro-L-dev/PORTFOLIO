// == Npm import
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// == Import
import './portfolioWeb.scss';

// == Composant
function ProjectsWeb() {
  return (
    <>
      <section className="pw__projects">
        <h2 className="pw__title">Portfolio</h2>
        <div className="pw__img">Arrow 01</div>
        <div className="pw__img">Miniature 01</div>
        <div className="pw__img">Miniature 02</div>
        <div className="pw__img">Miniature 03</div>
        <div className="pw__img">Arrow 02</div>
      </section>
    </>
  );
}

// == Export
export default ProjectsWeb;
