import React, { useState } from 'react';
import './nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ToggleSwitch from '../ToggleSwitch';

function NavBar() {
  const [value, setValue] = useState(false);
  return (
    <div>
      {/* LOGO */}
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="logo">
            <a href="#" className="nav-link">
              <span className="link-text logo-text">CL</span>
              <FontAwesomeIcon className="icons" icon="plus" size="6x" />
            </a>
          </li>

          {/* WELCOME */}
          <li className="nav-item">
            <a href="#" className="nav-link">
              <FontAwesomeIcon className="icons" icon="home" size="2x" />
              <span className="link-text">Welcome</span>
            </a>
          </li>

          {/* WHAT I DO */}
          <li className="nav-item">
            <a href="#" className="nav-link">
              <FontAwesomeIcon className="icons" icon="lightbulb" size="2x" />
              <span className="link-text">What I do</span>
            </a>
          </li>

          {/* ABOUT */}
          <li className="nav-item">
            <a href="#" className="nav-link">
              <FontAwesomeIcon className="icons" icon="info-circle" size="2x" />
              <span className="link-text">About</span>
            </a>
          </li>

          {/* CONTACT */}
          <li className="nav-item">
            <a href="#" className="nav-link">
              <FontAwesomeIcon className="icons" icon="envelope" size="2x" />
              <span className="link-text">Contact</span>
            </a>
          </li>

          {/* TOGGLE SWITCH*/}
          <div className="switch">
            <ToggleSwitch
              isOn={value}
              onColor="#EF476F"
              handleToggle={() => setValue(!value)}
            />
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
