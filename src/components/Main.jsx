// import React from 'react';
import Numbers from './Numbers';
import Signs from './Signs';
import { evaluate } from 'mathjs';
import '../styles/main.css';
import '../styles/numbers.css';
import { useState } from 'react';

function Main() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleClick = ({ target: { value } }) => {
    // if (value === 'x') value = '*';
    setExpression(expression + value);
  };

  const clean = () => {
    setExpression('');
    setResult('');
  };

  const showResult = () => {
    const result = evaluate(expression);
    setResult(result);
  };

  const deleteExp = () => {
    const newExp = expression.substring(0, expression.length - 1);
    setExpression(newExp);
  };

  return (
    <div className='teste'>
      <main>
        <section className='main'>
          <div data-testid='result' className='result-container'>
            <span className='result'>{result ? result : expression}</span>
            <div className='delete-exp-btn-div'>
              <button onClick={deleteExp} className='delete-exp-btn'>
                Apagar
              </button>
            </div>
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
                  onClick={clean}
                >
                  C
                </button>
                <Numbers handleClick={handleClick} value={7} />
                <Numbers handleClick={handleClick} value={4} />
                <Numbers handleClick={handleClick} value={1} />
                <Numbers handleClick={handleClick} value='+/-' />
              </div>
              <div className='numbers-column'>
                <Signs value='( )' />
                <Numbers handleClick={handleClick} value={8} />
                <Numbers handleClick={handleClick} value={5} />
                <Numbers handleClick={handleClick} value={2} />
                <Numbers handleClick={handleClick} value={0} />
              </div>
              <div className='numbers-column'>
                <Signs value='%' />
                <Numbers handleClick={handleClick} value={9} />
                <Numbers handleClick={handleClick} value={6} />
                <Numbers handleClick={handleClick} value={3} />
                <Numbers handleClick={handleClick} value='.' />
              </div>
              <div className='numbers-column'>
                <Signs handleClick={handleClick} value='/' />
                <Signs handleClick={handleClick} value='*' />
                <Signs handleClick={handleClick} value='-' />
                <Signs handleClick={handleClick} value='+' />
                <button
                  type='button'
                  className='button-number'
                  id='equal-button'
                  onClick={showResult}
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

export default Main;
