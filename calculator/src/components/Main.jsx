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
      values: '',
    };
  }

  render() {
    return (
      <div className='teste'>
        <main>
          <section className='main'>
            <div className='red'>red</div>
            <div className='hr-div'>
              <hr />
            </div>
            <div className='buttons-father'>
              <div className='numbers'>
                <div className='numbers-column'>
                  <button
                    type='button'
                    id='clear-button'
                    className='button-number'
                  >
                    C
                  </button>
                  <Numbers value={7} />
                  <Numbers value={4} />
                  <Numbers value={1} />
                  <Numbers value='+/-' />
                </div>
                <div className='numbers-column'>
                  <Signs value='( )' />
                  <Numbers value={8} />
                  <Numbers value={5} />
                  <Numbers value={2} />
                  <Numbers value={0} />
                </div>
                <div className='numbers-column'>
                  <Signs value='%' />
                  <Numbers value={9} />
                  <Numbers value={6} />
                  <Numbers value={3} />
                  <Numbers value='.' />
                </div>
                <div className='numbers-column'>
                  <Signs value='/' />
                  <Signs value='X' />
                  <Signs value='-' />
                  <Signs value='+' />
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

<div data-testid='calculator-body' className='calculator-body'>
  <div className='result' data-testid='result'></div>

  <div className='buttons-father'>
    <div className='numbers'>
      <Numbers value={7} />
      <Numbers value={8} />
      <Numbers value={9} />
      <Numbers value={7} />
      <Numbers value={8} />
      <Numbers value={9} />
      <Numbers value={4} />
      <Numbers value={5} />
      <Numbers value={6} />
      <Numbers value={1} />
      <Numbers value={2} />
      <Numbers value={3} />
      <Numbers value={0} />
      <Signs value='.' />
      <Signs value='=' />
    </div>
    <div className='signs'>
      <Signs value='+' />
      <Signs value='-' />
      <Signs value='x' />
      <Signs value='/' />
      <Signs value='=' />
    </div>
  </div>
</div>;
// }
