import React, { Component } from 'react';
import '../styles/numbers.css';

class Signs extends Component {
  render() {
    const { value, className } = this.props;
    return (
      <>
        <button
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
