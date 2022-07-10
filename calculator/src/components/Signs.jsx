import React, { Component } from 'react';
import '../styles/numbers.css';

class Signs extends Component {
  render() {
    const { value, className, handleClick } = this.props;
    return (
      <>
        <button
          onClick={handleClick}
          className={`button-number ${value} ${className} signs`}
          value={value}
          id={value}
        >
          {value}
        </button>
      </>
    );
  }
}

export default Signs;
