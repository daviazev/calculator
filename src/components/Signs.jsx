import React from 'react';
import '../styles/numbers.css';

function Signs({ handleClick, value, className }) {
  return (
    <button
      onClick={handleClick}
      className={`button-number ${value} ${className} signs`}
      value={value}
      id={value}
    >
      {value}
    </button>
  );
}

export default Signs;
