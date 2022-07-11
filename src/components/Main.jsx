import React, { Component } from 'react';
import Numbers from './Numbers';
import Signs from './Signs';
import '../styles/main.css';
import '../styles/numbers.css';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      typed: '',
      result: '',
    };
  }

  handleClick = ({ target: { value } }) => {
    const { typed } = this.state;
    this.setState({
      typed: typed + value,
    });
  };

  clean = () => {
    this.setState({
      typed: '',
      result: '',
    });
  };

  result = () => {
    const { typed } = this.state;
    const arrayFrom = Array.from(typed);
    const findSign = arrayFrom.find(
      (e) => e === '+' || e === '-' || e === 'x' || e === '/'
    );
    const arrayOfNumbers = typed.split(findSign);
    console.log(arrayOfNumbers);

    this.showResult(arrayOfNumbers, findSign);
  };

  showResult = (numbers, sign) => {
    const toFloat = numbers.map((num) => parseFloat(num));

    if (sign === '+') {
      const result = toFloat.reduce((acc, curr) => acc + curr);
      console.log(result);
      this.setState({
        result: result,
        typed: '',
      });
    } else if (sign === '-') {
      const result = toFloat.reduce((acc, curr) => acc - curr);
      console.log(result);
      this.setState({
        result: result,
        typed: '',
      });
    } else if (sign === 'x') {
      const result = toFloat.reduce((acc, curr) => acc * curr);
      console.log(result);
      this.setState({
        result: result,
        typed: '',
      });
    } else {
      const result = toFloat.reduce((acc, curr) => acc / curr);
      console.log(result);
      this.setState({
        result: result,
        typed: '',
      });
    }
  };

  render() {
    const { typed, result } = this.state;
    return (
      <div className='teste'>
        <main>
          <section className='main'>
            <div data-testid='result' className='result-container'>
              <span className='result'>{typed ? typed : result}</span>
            </div>
            <div className='hr-div'>
              <hr />
            </div>
            <div className='buttons-father'>
              <div data-testid='calculator-body' className='numbers'>
                <div className='numbers-column'>
                  <button
                    type='button'
                    id='clear-button'
                    className='button-number'
                    onClick={this.clean}
                  >
                    C
                  </button>
                  <Numbers handleClick={this.handleClick} value={7} />
                  <Numbers handleClick={this.handleClick} value={4} />
                  <Numbers handleClick={this.handleClick} value={1} />
                  <Numbers handleClick={this.handleClick} value='+/-' />
                </div>
                <div className='numbers-column'>
                  <Signs value='( )' />
                  <Numbers handleClick={this.handleClick} value={8} />
                  <Numbers handleClick={this.handleClick} value={5} />
                  <Numbers handleClick={this.handleClick} value={2} />
                  <Numbers handleClick={this.handleClick} value={0} />
                </div>
                <div className='numbers-column'>
                  <Signs value='%' />
                  <Numbers handleClick={this.handleClick} value={9} />
                  <Numbers handleClick={this.handleClick} value={6} />
                  <Numbers handleClick={this.handleClick} value={3} />
                  <Numbers handleClick={this.handleClick} value='.' />
                </div>
                <div className='numbers-column'>
                  <Signs handleClick={this.handleClick} value='/' />
                  <Signs handleClick={this.handleClick} value='x' />
                  <Signs handleClick={this.handleClick} value='-' />
                  <Signs handleClick={this.handleClick} value='+' />
                  <button
                    type='button'
                    className='button-number'
                    id='equal-button'
                    onClick={this.result}
                  >
                    =
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Main;
