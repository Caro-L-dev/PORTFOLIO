import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ToggleSwitch from '../ToggleSwitch';

// == Scss Import
import './nav.scss';
import './nav-01-small-screens.scss';
import './nav-02-large-screens.scss';

function NavBar() {
  const [value, setValue] = useState(false);
  return (
    <section>
      {/* LOGO */}
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="logo">
            <a href="#" alt="Logo made by me here" className="nav-link">
              <span className="link-text logo-text">CL</span>
              <FontAwesomeIcon className="icons" icon="plus" size="6x" color="#e6a336" />
            </a>
          </li>

          {/* WELCOME */}
          <li className="nav-item">
            <a href="/" className="nav-link">
              <FontAwesomeIcon className="icons" icon="home" size="2x" color="#e6a336" />
              <span className="link-text">Welcome</span>
            </a>
          </li>

          {/* WHAT I DO */}
          <li className="nav-item">
            <a href="/what-i-do" className="nav-link">
              <FontAwesomeIcon className="icons" icon="lightbulb" size="2x" color="#e6a336" />
              <span className="link-text">What I do</span>
            </a>
          </li>

          {/* ABOUT */}
          <li className="nav-item">
            <a href="/about" className="nav-link">
              <FontAwesomeIcon className="icons" icon="info-circle" size="2x" color="#e6a336" />
              <span className="link-text">About</span>
            </a>
          </li>

          {/* CONTACT */}
          <li className="nav-item">
            <a href="/contact" className="nav-link">
              <FontAwesomeIcon className="icons" icon="envelope" size="2x" color="#e6a336" />
              <span className="link-text">Contact</span>
            </a>
          </li>

          {/* TOGGLE SWITCH */}
          <li className="switch">
            <ToggleSwitch
              isOn={value}
              onColor="#6649b8"
              handleToggle={() => setValue(!value)}
            />
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default NavBar;
