// import React from 'react';
import Numbers from './Numbers';
import Signs from './Signs';
import { evaluate } from 'mathjs';
import '../styles/main.css';
import '../styles/numbers.css';
import { useState } from 'react';
import img from '../delete.svg';
import linkedin from '../linkedin.svg';

function Main() {
  const [expression, setExpression] = useState('');
  const [parenToggle, setParenToggle] = useState(true);
  // const [resultToggle, setResultToggle] = useState(false);
  // const [teste, setTeste] = useState(true);

  const handleClick = ({ target: { value } }) => {
    if (value === '( )') {
      if (expression.length > 0) {
        parenToggle
          ? setExpression(expression + '*(')
          : setExpression(expression + ')');
        setParenToggle(!parenToggle);
      } else {
        parenToggle
          ? setExpression(expression + '(')
          : setExpression(expression + ')');
        setParenToggle(!parenToggle);
      }
    } else {
      setExpression(expression + value);
    }

    if (value === '.') setExpression(expression + '0.');
  };

  const clean = () => {
    setExpression('');
    setParenToggle(true);
  };

  const isAble = () => {
    if (expression) {
      const lastChar = expression[expression.length - 1];
      if (isNaN(parseFloat(lastChar))) return true;
      return false;
    }
  };

  const showResult = () => {
    const result = evaluate(expression);
    setExpression(result);
    isAble(true);
  };

  const deleteExp = () => {
    const newExp = expression.substring(0, expression.length - 1);
    setExpression(newExp);
  };

  // console.log('-----', isAble());

  return (
    <main>
      <section data-testid='result' className='result-container'>
        <span className='result'>{expression}</span>
        <div className='delete-exp-btn-div'>
          <img
            src={img}
            onClick={deleteExp}
            className='delete-exp-btn'
            alt=''
          />
        </div>
      </section>
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
            <img src={linkedin} alt='linkedin' className='button-number' />
            {/* <Numbers handleClick={handleClick} value='+/-' /> */}
          </div>
          <div className='numbers-column'>
            <Signs handleClick={handleClick} value='( )' />
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
            <Signs
              handleClick={handleClick}
              isDisabled={isAble() === undefined ? true : isAble()}
              value='/'
            />
            <Signs
              handleClick={handleClick}
              isDisabled={isAble() === undefined ? true : isAble()}
              value='*'
            />
            <Signs
              handleClick={handleClick}
              isDisabled={isAble() === undefined ? true : isAble()}
              value='-'
            />
            <Signs
              handleClick={handleClick}
              isDisabled={isAble() === undefined ? true : isAble()}
              value='+'
            />
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
    </main>
  );
}

export default Main;
