import React from 'react';
import '../styles/numbers.css';

function Numbers({ value, handleClick, isDisabled }) {
  return (
    <button
      onClick={handleClick}
      className={`button-number num-${value}`}
      data-testid={`button-number-${value}`}
      disabled={isDisabled}
      value={value}
      id={value}
    >
      {value}
    </button>
  );
}

export default Numbers;
