import React, { Component } from 'react';
import Numbers from './Numbers';
import '../styles/main.css';

class Main extends Component {
  render() {
    return (
      <div className='teste'>
        <header>
          <h1>Calculadora</h1>
        </header>
        <main>
          <section className='main'>
            <div data-testid='calculator-body' className='calculator-body'>
              <div className='result'></div>

              <div className='numbers'>
                <Numbers value={2} />
                <Numbers value={3} />
                <Numbers value={4} />
                <Numbers value={5} />
                <Numbers value={6} />
                <Numbers value={7} />
                <Numbers value={8} />
                <Numbers value={9} />
                <Numbers value={0} />
                <Numbers value={1} />
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Main;
