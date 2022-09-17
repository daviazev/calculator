// import React from 'react';
import Numbers from './Numbers';
import Signs from './Signs';
import { evaluate } from 'mathjs';
import '../styles/main.css';
import '../styles/numbers.css';
import { useState } from 'react';
import img from '../delete.svg';
import linkedin from '../linkedin.svg';
import { useEffect } from 'react';

function Main() {
  const [expression, setExpression] = useState('');
  const [parenToggle, setParenToggle] = useState(true);
  const [resultToggle, setResultToggle] = useState(false);
  const [ableSigns, setableSigns] = useState(true);
  const [pointToggle, setPointToggle] = useState(false);

  useEffect(() => {
    const lastChar = expression[expression.length - 1];
    // console.log(lastChar);
    if (isNaN(parseFloat(lastChar)) && ableSigns) {
      setResultToggle(true);
    } else {
      setResultToggle(false);
      setableSigns(true);
    }

    if (lastChar === '.') {
      setPointToggle(true);
    } else {
      setPointToggle(false);
    }
  }, [expression]);

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

    if (value === '.' && expression === '') {
      setExpression(expression + '0.');
    }
  };

  const clean = () => {
    setExpression('');
    setParenToggle(true);
  };

  const showResult = () => {
    const result = evaluate(expression);
    setExpression(result);
    setableSigns(false);
  };

  const deleteExp = () => {
    const expToStr = expression.toString();
    const newExp = expToStr.substring(0, expToStr.length - 1);
    setExpression(newExp);
  };

  return (
    <main>
      <section data-testid='result' className='result-container'>
        <span className='result'>{expression}</span>
        <div className='delete-exp-btn-div'>
          <img
            src={img}
            onClick={deleteExp}
            className='delete-exp-btn'
            alt='delete button'
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
            <a
              href='https://www.linkedin.com/in/davi-azevedo-a62267206/'
              target='_blanck'
            >
              <img src={linkedin} alt='linkedin' className='button-number' />
            </a>
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
            <Numbers
              handleClick={handleClick}
              isDisabled={pointToggle}
              value='.'
            />
          </div>
          <div className='numbers-column'>
            <Signs
              handleClick={handleClick}
              isDisabled={resultToggle}
              value='/'
            />
            <Signs
              handleClick={handleClick}
              isDisabled={resultToggle}
              value='*'
            />
            <Signs
              handleClick={handleClick}
              isDisabled={resultToggle}
              value='-'
            />
            <Signs
              handleClick={handleClick}
              isDisabled={resultToggle}
              value='+'
            />
            <button
              type='button'
              className='button-number'
              id='equal-button'
              onClick={showResult}
              disabled={resultToggle}
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
