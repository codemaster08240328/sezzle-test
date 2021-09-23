import { render, screen } from '@testing-library/react';
import { buttons } from './util/config';
import App from './App';

test('renders elements exactly', async () => {
  render(<App />);

  const header = await screen.findByText('Fancy Calculator');
  expect(header).toBeInTheDocument();

  const displayElem = await screen.findByTestId('calculator-display-input');
  expect(displayElem).toBeInTheDocument();
  expect(displayElem).toBeDisabled();

  const btnElems = await screen.findAllByTestId('calculator-control-btn');
  expect(btnElems.length).toBe(buttons.length);

  const clearBtn = await screen.findByTestId('calculator-control-clear');
  expect(clearBtn).toBeInTheDocument();
});
