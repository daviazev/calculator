import React, { Component } from 'react';
import '../styles/numbers.css';

class Numbers extends Component {
  render() {
    const { value, handleClick } = this.props;
    return (
      <>
        <button
          onClick={handleClick}
          className={`button-number num-${value}`}
          data-testid={`button-number-${value}`}
          value={value}
          id={value}
        >
          {value}
        </button>
      </>
    );
  }
}

export default Numbers;
