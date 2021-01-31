// == Npm import
import React, { lazy, Suspense } from 'react';
import './illustrations.scss';
import './portfolioArt.scss';

// == Composant
function Illustrations() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <section className="pa__illustrations">
          <div className="pa__illustrations--container">
            <div loading="lazy" className="cell cell-1" />
            <div className="cell cell-2" />
            <div className="cell cell-3" />
            <div className="cell cell-4" />
            <div className="cell cell-5" />
            <div className="cell cell-6" />
            <div className="cell cell-7" />
            <div className="cell cell-8" />
            <div className="cell cell-9" />
          </div>
        </section>
      </Suspense>
    </>
  );
}

// == Export
export default Illustrations;
