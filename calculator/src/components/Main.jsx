import React, { Component } from 'react';
import Numbers from './Numbers';
import Signs from './Signs';
import '../styles/main.css';
import '../styles/numbers.css';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      result: '',
      typed: '',
    };
  }

  handleClick = ({ target: { value } }) => {
    console.log(value);
    const { typed } = this.state;
    this.setState({
      typed: typed + value,
    });
  };

  clean = () => {
    this.setState({
      typed: '',
    });
  };

  render() {
    const { typed } = this.state;
    return (
      <div className='teste'>
        <main>
          <section className='main'>
            <div data-testid='result' className='red'>
              {typed}
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
