import React, { useState } from 'react';
import './nav.scss';

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="nav">
        <div className="nav__logo">Caroline Liard</div>
        <ul className="nav__links" style={{ transform: open ? 'translateX(0px)' : 'translateX(-500px)' }}>
          <li className="nav__links--li">
            <div className="nav__logo02">Logo img</div>
            <a className="nav__links--a">Welcome</a>
          </li>
          <li className="nav__links--li">
            <a className="nav__links--a">What I do</a>
          </li>
          <li className="nav__links--li">
            <a className="nav__links--a">About</a>
          </li>
          <li className="nav__links--li">
            <a className="nav__links--a">Contact</a>
          </li>
        </ul>
        <i onClick={() => setOpen(!open)} className="fas fa-bars nav__burger" />
      </nav>
    </div>
  );
}

// clasName="fas fa-bars --- from "Font Awesome" menu icon //

export default NavBar;
