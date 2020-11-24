/* eslint-disable jsx-a11y/label-has-associated-control */
// Stateless component - Component that does not control its own state.

import React from 'react';
import './switch.scss';

const Switch = ({ isOn, handleToggle, onColor }) => (
  <>
    <input
      checked={isOn}
      onChange={handleToggle}
      className="react-switch-checkbox"
      id="react-switch-new"
      type="checkbox"
    />
    <label
      style={{ background: isOn && onColor }}
      className="react-switch-label"
      htmlFor="react-switch-new"
    >
      <span className="react-switch-button" />
    </label>
  </>
);

export default Switch;
