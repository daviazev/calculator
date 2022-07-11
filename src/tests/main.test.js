import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Verifica se todos os elementos da calculadora são renderizados', () => {
  it('Verifica se o corpo da calculadora foi renderizado', () => {
    render(<App />);

    const calculatorBody = screen.getByTestId('calculator-body');
    const result = screen.getByTestId('result');
    expect(calculatorBody).toBeInTheDocument();
    expect(result).toBeInTheDocument();
  });

  it('Verifica se os botões/números são renderizados', () => {
    render(<App />);

    for (let index = 0; index <= 9; index += 1) {
      const numberButton = screen.getByTestId(`button-number-${index}`);
      expect(numberButton).toBeInTheDocument();
    }
  });
});
