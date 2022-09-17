import React from 'react';
import '../styles/numbers.css';

function Signs({ handleClick, value, className, isDisabled }) {
  return (
    <button
      onClick={handleClick}
      disabled={isDisabled}
      className={`button-number ${value} ${className} signs`}
      value={value}
      id={value}
    >
      {value}
    </button>
  );
}

export default Signs;
